import { restaurants, movies, events, stores, activities, playFacilities } from '../data/mockData';

// Helper to get a random item from an array
const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Helper to filter items based on preference and friend review toggle
const filterItems = (items, selectedTypes, typeKey, useFriendReviews) => {
    let filtered = items;

    // 1. Filter by selected types if any are provided
    if (selectedTypes && selectedTypes.length > 0) {
        filtered = filtered.filter(item => {
            if (Array.isArray(item[typeKey])) {
                return item[typeKey].some(t => selectedTypes.includes(t));
            }
            return selectedTypes.includes(item[typeKey]);
        });

        // Fallback: If filter is too strict and yields nothing, use all items
        if (filtered.length === 0) {
            filtered = items;
        }
    }

    // 2. Prioritize based on user toggle
    let prioritized = [];
    if (useFriendReviews) {
        prioritized = filtered.filter(item => item.friendsActivity && item.friendsActivity.length > 0);
    } else {
        prioritized = filtered.filter(item => item.rating >= 4.7);
    }

    // Fallback: If prioritization yields nothing, revert to filtered list
    if (prioritized.length === 0) {
        prioritized = filtered;
    }

    return prioritized;
};

const formatTime = (decimalHour) => {
    let hrs = Math.floor(decimalHour);
    let mins = Math.round((decimalHour - hrs) * 60);
    hrs = hrs % 24;
    const period = hrs >= 12 ? 'PM' : 'AM';
    let displayHrs = hrs % 12;
    if (displayHrs === 0) displayHrs = 12;
    const displayMins = mins.toString().padStart(2, '0');
    return `${displayHrs}:${displayMins} ${period}`;
};

// Main generator function
export const generateItineraries = (prefs) => {
    const itineraries = [];
    const numItineraries = 3;

    for (let i = 0; i < numItineraries; i++) {
        const timeline = [];
        let currentTimeHour = 10; // Start at 10 AM
        let idCounter = 1;

        const addEvent = (item, type, durationHours, titlePrefix = '') => {
            if (!item) return;
            const startTime = formatTime(currentTimeHour);
            currentTimeHour += durationHours;
            const endTime = formatTime(currentTimeHour);

            // Add a mock travel time logically, except for the last item
            const travelMins = Math.floor(Math.random() * 20) + 10;
            const travelTime = `${travelMins} mins drive`;

            timeline.push({
                id: `tl_${i}_${idCounter++}`,
                startTime,
                endTime,
                duration: `${durationHours} hours`,
                itemType: type,
                item: item,
                titlePrefix: titlePrefix,
                travelTime: travelTime
            });

            // Add roughly travel time to the counter
            currentTimeHour += 0.5;
        };

        // Construct timeline chronologically based on selections

        // 1. Morning Activity or Play
        if (!prefs.activities.omit) {
            const pool = filterItems(activities, prefs.activities.types, 'type', prefs.useFriendReviews);
            addEvent(getRandom(pool), 'activity', 2, 'Morning Activity');
        } else if (!prefs.play.omit) {
            const pool = filterItems(playFacilities, prefs.play.types, 'type', prefs.useFriendReviews);
            addEvent(getRandom(pool), 'play', 2, 'Morning Sport');
        }

        // 2. Lunch
        if (!prefs.dining.omit) {
            const pool = filterItems(restaurants, prefs.dining.cuisines, 'cuisines', prefs.useFriendReviews);
            // Additionally try to match mood if provided
            let lunchPool = pool;
            if (prefs.dining.moods && prefs.dining.moods.length > 0) {
                lunchPool = pool.filter(r => prefs.dining.moods.includes(r.mood));
                if (lunchPool.length === 0) lunchPool = pool;
            }
            addEvent(getRandom(lunchPool), 'restaurant', 1.5, 'Lunch Date');
        }

        // 3. Afternoon Store or Play (if not done in morning)
        if (!prefs.stores.omit) {
            const pool = filterItems(stores, prefs.stores.types, 'type', prefs.useFriendReviews);
            addEvent(getRandom(pool), 'store', 1.5, 'Shopping Spree');
        } else if (!prefs.play.omit && prefs.activities.omit) { // Only do play here if didn't do it in morning
            const pool = filterItems(playFacilities, prefs.play.types, 'type', prefs.useFriendReviews);
            addEvent(getRandom(pool), 'play', 2, 'Afternoon Sport');
        }

        // 4. Evening Event or Movie
        if (!prefs.events.omit) {
            const pool = filterItems(events, prefs.events.types, 'type', prefs.useFriendReviews);
            addEvent(getRandom(pool), 'event', 3, 'Live Experience');
        } else if (!prefs.movies.omit) {
            const pool = filterItems(movies, prefs.movies.genres, 'genre', prefs.useFriendReviews); // Assuming movies have 'genre' string
            addEvent(getRandom(pool), 'movie', 2.5, 'Movie Night');
        }

        // 5. Dinner (If dining not omitted and we are late enough)
        if (!prefs.dining.omit && currentTimeHour < 22) { // Don't schedule dinner starting after 10 PM
            const pool = filterItems(restaurants, prefs.dining.cuisines, 'cuisines', prefs.useFriendReviews);
            addEvent(getRandom(pool), 'restaurant', 2, 'Dinner');
        }

        // Clean up the last event's travel time as it's the end of the day
        if (timeline.length > 0) {
            timeline[timeline.length - 1].travelTime = null;
        }

        // Calculate a mock bundled price based on member count
        const basePrice = Math.floor(Math.random() * 2000) + 1500;
        const totalPrice = basePrice * prefs.memberCount;

        itineraries.push({
            id: `itinerary_${i}`,
            title: `Option ${i + 1}: ${timeline.length} Stops`,
            totalPrice: `₹${totalPrice.toLocaleString()}`,
            timeline: timeline
        });
    }

    return itineraries;
};
