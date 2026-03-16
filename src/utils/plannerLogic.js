import { restaurants, movies, events, stores, activities, playFacilities } from '../data/mockData.js';

const ANDHERI_WEST_BASE = 'Andheri West, Mumbai';

// Convert "10:00 AM" or "9:00 AM" string → decimal hour (e.g. 10.0, 21.5)
export const parseTimeToDecimal = (timeStr) => {
    if (!timeStr) return 10;
    try {
        const parts = timeStr.split(' ');
        if (parts.length < 2) return 10;
        const [timePart, period] = parts;
        if (!timePart || !period) return 10;
        let [hours, mins] = timePart.split(':').map(Number);
        if (isNaN(hours) || isNaN(mins)) return 10;
        if (period === 'PM' && hours !== 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;
        return hours + mins / 60;
    } catch(e) {
        return 10;
    }
};

// Convert decimal hour → "10:30 AM" string
export const formatTime = (decimalHour) => {
    let hrs = Math.floor(decimalHour) % 24;
    let mins = Math.round((decimalHour - Math.floor(decimalHour)) * 60);
    if (mins === 60) { hrs = (hrs + 1) % 24; mins = 0; }
    const period = hrs >= 12 ? 'PM' : 'AM';
    let displayHrs = hrs % 12;
    if (displayHrs === 0) displayHrs = 12;
    const displayMins = mins.toString().padStart(2, '0');
    return `${displayHrs}:${displayMins} ${period}`;
};

const estimateCost = (item, type, memberCount, playHours) => {
    if (!item) return 0;
    
    // Helper to extract numbers from strings like "₹1,200 for two" or "₹350 onwards"
    const extractNumber = (str, fallback) => {
        if (!str) return fallback;
        if (typeof str === 'number') return str;
        const num = parseInt(str.toString().replace(/[^0-9]/g, ''), 10);
        return isNaN(num) ? fallback : num;
    };

    if (type === 'restaurant') {
        const base = extractNumber(item.priceForTwo, 1000);
        return (base / 2) * memberCount;
    } else if (type === 'movie') {
        const base = extractNumber(item.startingPrice, 350);
        return base * memberCount;
    } else if (type === 'event' || type === 'activity') {
        const base = extractNumber(item.price, 500);
        return base * memberCount;
    } else if (type === 'play') {
        const base = extractNumber(item.pricePerHour, 600);
        return base * (playHours || 1);
    } else if (type === 'store') {
        return 0;
    }
    return 0;
};

const filterAndPrioritize = ({
    items, selectedType, typeKey, prioritization, travelRadius, warnings,
    groupSize = 2, playHours = 1, itemType
}) => {
    let typed = items;
    if (selectedType) {
        typed = items.filter(item => {
            if (Array.isArray(item[typeKey])) return item[typeKey].includes(selectedType);
            return item[typeKey] === selectedType;
        });
    }
    if (typed.length === 0) return null;

    let inRadius = typed.filter(item => (item.distanceKm || 0) <= travelRadius);
    let chosenPool = inRadius;

    if (inRadius.length === 0) {
        // Fallback: absolute closest
        const sortedByDistance = [...typed].sort((a, b) => (a.distanceKm || Infinity) - (b.distanceKm || Infinity));
        chosenPool = [sortedByDistance[0]];
        if (chosenPool[0]) {
            warnings.push(`No ${selectedType || itemType} found within ${travelRadius}km. Suggesting nearest match (${chosenPool[0].distanceKm}km away).`);
        }
    }
    if (chosenPool.length === 0) return null;

    // Prioritization
    if (prioritization === 'friends_network') {
        const withFriendAvg = chosenPool.map(item => {
            if (!item.friendsActivity || item.friendsActivity.length === 0) return { ...item, friendAvg: 0 };
            const sum = item.friendsActivity.reduce((acc, f) => acc + (f.rating || 0), 0);
            return { ...item, friendAvg: sum / item.friendsActivity.length };
        });
        
        // Loosen the strict friend rating check so at least SOMETHING is returned if they have ANY friend reviews
        let qualifyFn = withFriendAvg.filter(i => i.friendAvg > 0);
        
        if (qualifyFn.length > 0) {
            return qualifyFn.sort((a, b) => (b.friendAvg || 0) - (a.friendAvg || 0))[0];
        } else {
            return [...chosenPool].sort((a, b) => (b.rating || 0) - (a.rating || 0))[0];
        }
    } 
    else if (prioritization === 'budget_friendly') {
        return [...chosenPool].sort((a, b) => {
            const costA = estimateCost(a, itemType, groupSize, playHours) || 0;
            const costB = estimateCost(b, itemType, groupSize, playHours) || 0;
            return costA - costB;
        })[0];
    }
    else {
        return [...chosenPool].sort((a, b) => (b.rating || 0) - (a.rating || 0))[0];
    }
};

const filterRestaurantStrict = (meal, baseRestaurants, diningPrefs, prioritization, travelRadius, warnings, groupSize) => {
    let pool = baseRestaurants;
    const mealPrefs = diningPrefs[meal] || {};

    const mealStartHour = meal === 'breakfast' ? 9 : meal === 'lunch' ? 12 : 19;
    pool = pool.filter(r => {
        const openH = r.openTime ? parseInt(r.openTime.split(':')[0]) : 9;
        return openH <= mealStartHour;
    });

    if (meal === 'breakfast') {
        pool = pool.filter(r => {
            const hasSI = r.cuisines?.includes('south_indian') && ['cafes', 'romantic', 'family', 'fine_dining'].includes(r.mood);
            const hasCont = r.cuisines?.includes('continental') && r.mood === 'cafes';
            return hasSI || hasCont;
        });
    } else if (meal === 'lunch') {
        pool = pool.filter(r => r.mood !== 'nightlife');
    }

    if (mealPrefs.mappedCuisine) pool = pool.filter(r => r.cuisines?.includes(mealPrefs.mappedCuisine));
    if (mealPrefs.moods?.length > 0) pool = pool.filter(r => mealPrefs.moods.includes(r.mood));

    if (pool.length === 0) return null;

    return filterAndPrioritize({
        items: pool,
        selectedType: mealPrefs.mappedCuisine,
        typeKey: 'cuisines',
        prioritization,
        travelRadius,
        warnings,
        groupSize,
        itemType: 'restaurant'
    });
};

export const generateItineraries = (prefs) => {
    const {
        dining: diningPrefs, movies: moviePrefs, events: eventPrefs,
        stores: storePrefs, activities: activityPrefs, play: playPrefs,
        memberCount = 2, budget, dayStart = '10:00 AM', dayEnd = '10:00 PM',
        travelRadius = 10, prioritization = 'district_top_picks',
    } = prefs;

    const dayStartH = parseTimeToDecimal(dayStart);
    const dayEndH = parseTimeToDecimal(dayEnd);
    const itineraries = [];

    const getDistinctSelection = (selections, itineraryIndex) => {
        if (!selections || selections.length === 0) return null;
        return selections[itineraryIndex % selections.length];
    };

    for (let i = 0; i < 3; i++) {
        const timeline = [];
        const warnings = [];
        let currentH = dayStartH;
        let totalCost = 0;
        let idCounter = 1;

        const canFit = (durationH) => (currentH + durationH) <= dayEndH;

        const addEvent = (item, type, durationHours, titlePrefix = '', fixedStartH = null) => {
            if (!item) return;
            const startH = fixedStartH !== null ? Math.max(currentH, fixedStartH) : currentH;
            if ((startH + durationHours) > dayEndH) return; 
            currentH = startH + durationHours;

            const cost = estimateCost(item, type, memberCount, playPrefs?.hours || 1);
            totalCost += cost;
            const travelMins = Math.floor(Math.random() * 20) + 10;

            const getRouteFromType = (t) => {
                const map = { restaurant: 'dining', movie: 'movies', event: 'events', activity: 'activities', store: 'stores', play: 'play' };
                return map[t] || t;
            };

            timeline.push({
                id: `tl_${i}_${idCounter++}`,
                startTime: formatTime(startH),
                endTime: formatTime(currentH),
                duration: `${durationHours} hours`,
                itemType: type,
                item,
                titlePrefix,
                estimatedCost: cost,
                travelTime: `${travelMins} mins drive`,
                linkTo: `/${getRouteFromType(type)}/${item.id}`,
            });
            currentH += 0.33;
        };

        // ── Breakfast ──
        if (dayStartH <= 10.5 && diningPrefs.breakfast.cuisines.length > 0) {
            const mappedCuisine = getDistinctSelection(diningPrefs.breakfast.cuisines, i);
            const item = filterRestaurantStrict('breakfast', restaurants, { ...diningPrefs, breakfast: { ...diningPrefs.breakfast, mappedCuisine } }, prioritization, travelRadius, warnings, memberCount);
            if (item && canFit(1.5)) addEvent(item, 'restaurant', 1.5, '🍳 Breakfast', 9);
        }

        // ── Morning Activity or Play ──
        if (activityPrefs.types.length > 0 && currentH < 13 && canFit(2)) {
            const mappedType = getDistinctSelection(activityPrefs.types, i);
            const item = filterAndPrioritize({ items: activities, selectedType: mappedType, typeKey: 'type', prioritization, travelRadius, warnings, groupSize: memberCount, itemType: 'activity' });
            addEvent(item, 'activity', 2, '🎯 Morning Activity');
        } else if (playPrefs.types.length > 0 && currentH < 13 && canFit(playPrefs.hours || 1)) {
            const mappedType = getDistinctSelection(playPrefs.types, i);
            const item = filterAndPrioritize({ items: playFacilities, selectedType: mappedType, typeKey: 'type', prioritization, travelRadius, warnings, groupSize: memberCount, playHours: playPrefs.hours, itemType: 'play' });
            addEvent(item, 'play', playPrefs.hours || 1, '⚽ Morning Sport');
        }

        // ── Lunch ──
        if (currentH < 15 && diningPrefs.lunch.cuisines.length > 0) {
            const mappedCuisine = getDistinctSelection(diningPrefs.lunch.cuisines, i);
            const lunchH = Math.max(currentH, 12);
            const item = filterRestaurantStrict('lunch', restaurants, { ...diningPrefs, lunch: { ...diningPrefs.lunch, mappedCuisine } }, prioritization, travelRadius, warnings, memberCount);
            if (item && (lunchH + 1.5) <= dayEndH) addEvent(item, 'restaurant', 1.5, '🍽 Lunch', lunchH);
        }

        // ── Afternoon Shopping ──
        if (storePrefs.types.length > 0 && currentH < 18 && canFit(1.5)) {
            const mappedType = getDistinctSelection(storePrefs.types, i);
            const item = filterAndPrioritize({ items: stores, selectedType: mappedType, typeKey: 'type', prioritization, travelRadius, warnings, groupSize: memberCount, itemType: 'store' });
            addEvent(item, 'store', 1.5, '🛍 Shopping');
        }

        // ── Evening: Event or Movie ──
        if (eventPrefs.types.length > 0 && canFit(2.5)) {
            const mappedType = getDistinctSelection(eventPrefs.types, i);
            const item = filterAndPrioritize({ items: events, selectedType: mappedType, typeKey: 'type', prioritization, travelRadius, warnings, groupSize: memberCount, itemType: 'event' });
            if (item?.time) {
                try {
                    const replaced = item.time.replace(/(\d+):(\d+)\s*(AM|PM)/i, '$1:$2 $3').toUpperCase();
                    const eventStartH = parseTimeToDecimal(replaced);
                    if (eventStartH >= currentH && (eventStartH + 2.5) <= dayEndH) {
                        addEvent(item, 'event', 3, '🎭 Live Experience', eventStartH);
                    } else {
                        addEvent(item, 'event', 2.5, '🎭 Live Experience');
                    }
                } catch(e) {
                    addEvent(item, 'event', 2.5, '🎭 Live Experience');
                }
            } else {
                addEvent(item, 'event', 2.5, '🎭 Live Experience');
            }
        } 
        else if (moviePrefs.genres.length > 0 && currentH < 21 && canFit(2.5)) {
            const mappedGenre = getDistinctSelection(moviePrefs.genres, i);
            const item = filterAndPrioritize({ items: movies, selectedType: mappedGenre, typeKey: 'genres', prioritization, travelRadius, warnings, groupSize: memberCount, itemType: 'movie' });
            addEvent(item, 'movie', 2.5, '🎬 Movie Night');
        }

        // ── Dinner ──
        if (dayEndH > 18 && diningPrefs.dinner.cuisines.length > 0) {
            const mappedCuisine = getDistinctSelection(diningPrefs.dinner.cuisines, i);
            const dinnerH = Math.max(currentH, 19);
            const item = filterRestaurantStrict('dinner', restaurants, { ...diningPrefs, dinner: { ...diningPrefs.dinner, mappedCuisine } }, prioritization, travelRadius, warnings, memberCount);
            if (item && (dinnerH + 2) <= dayEndH && (dinnerH + 2) <= 24.5) addEvent(item, 'restaurant', 2, '🍷 Dinner', dinnerH);
        }

        if (timeline.length > 0) timeline[timeline.length - 1].travelTime = null;

        const uniqueWarnings = [...new Set(warnings)];
        const budgetPerPerson = budget ? parseInt(budget) : null;
        const groupBudget = budgetPerPerson ? budgetPerPerson * memberCount : null;
        const overBudget = groupBudget && totalCost > groupBudget;

        itineraries.push({
            id: `itinerary_${i}`,
            title: `Option ${i + 1}: ${timeline.length} Stops`,
            totalCostRaw: totalCost,
            totalPrice: `₹${totalCost.toLocaleString()}`,
            overBudget,
            groupBudget: groupBudget ? `₹${groupBudget.toLocaleString()}` : null,
            warnings: uniqueWarnings,
            timeline,
        });
    }

    return itineraries;
};
