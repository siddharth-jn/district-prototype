import { restaurants, movies, events, stores, activities, playFacilities } from '../data/mockData.js';

// ── Utility helpers ───────────────────────────────────────────────────────────

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
    } catch (e) {
        return 10;
    }
};

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

export const estimateCost = (item, type, memberCount, playHours) => {
    if (!item) return 0;
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
        const base = extractNumber(item.theatres?.[0]?.startingPrice, 350);
        return base * memberCount;
    } else if (type === 'event' || type === 'activity') {
        const priceStr = item.price?.toString().toLowerCase() || '';
        if (priceStr === 'free' || priceStr === '0') return 0;
        const base = extractNumber(item.price, 500);
        return base * memberCount;
    } else if (type === 'play') {
        const base = extractNumber(item.price, 600);
        return base * (playHours || 1);
    } else if (type === 'store') {
        return 0;
    }
    return 0;
};

// Natural target times for non-meal categories (hour of day they typically fit best)
const CAT_DEFAULTS = {
    play:     { targetH: 7,    prefix: '🏋️ Sport' },
    activity: { targetH: 10,   prefix: '🎯 Activity' },
    movie:    { targetH: 14,   prefix: '🎬 Movie' },
    store:    { targetH: 16,   prefix: '🛍 Shopping' },
    event:    { targetH: 18,   prefix: '🎭 Live Event' },
};

// ── Superset builders ─────────────────────────────────────────────────────────

const buildMovieSuperset = (moviePrefs, travelRadius, warnings) => {
    const { genres = [], languages = [] } = moviePrefs;
    if (genres.length === 0 && languages.length === 0) return [];

    let pool = movies.filter(m => (m.distanceKm || 0) <= travelRadius);

    // Normalize language comparison: IDs are lowercase ('hindi'), data may be 'Hindi'
    const normLang = (l) => (l || '').toLowerCase();

    if (genres.length > 0 && languages.length > 0) {
        pool = pool.filter(m =>
            Array.isArray(m.genres) && m.genres.some(g => genres.includes(g)) &&
            languages.includes(normLang(m.language))
        );
    } else if (genres.length > 0) {
        pool = pool.filter(m => Array.isArray(m.genres) && m.genres.some(g => genres.includes(g)));
    } else {
        pool = pool.filter(m => languages.includes(normLang(m.language)));
    }

    if (pool.length === 0) {
        let fallback = movies;
        if (genres.length > 0) fallback = fallback.filter(m => Array.isArray(m.genres) && m.genres.some(g => genres.includes(g)));
        if (languages.length > 0) fallback = fallback.filter(m => languages.includes(normLang(m.language)));
        fallback = fallback.sort((a, b) => (a.distanceKm || 0) - (b.distanceKm || 0));
        if (fallback.length > 0) warnings.push(`No matching movie found within ${travelRadius}km. Showing nearest match.`);
        return fallback.slice(0, 3);
    }
    return pool;
};

const buildRestaurantSuperset = (meal, diningPrefs, travelRadius, dinnerAnchorH = 19, warnings) => {
    const mealPrefs = diningPrefs[meal] || {};
    const { cuisines: selectedCuisines = [], moods: selectedMoods = [] } = mealPrefs;
    if (selectedCuisines.length === 0 && selectedMoods.length === 0) return [];

    let pool = restaurants.filter(r => (r.distanceKm || 0) <= travelRadius);

    // Time-based open/close filters
    const mealStartHour = meal === 'breakfast' ? 9 : meal === 'lunch' ? 12 : dinnerAnchorH;
    pool = pool.filter(r => {
        const openH = r.openTime ? parseInt(r.openTime.split(':')[0]) : 9;
        return openH <= mealStartHour;
    });
    if (meal === 'dinner') {
        const dinnerEndH = dinnerAnchorH + 1.5;
        pool = pool.filter(r => {
            if (!r.closeTime) return true;
            const [ch, cm] = r.closeTime.split(':').map(Number);
            let closeH = ch + cm / 60;
            if (closeH < 6) closeH += 24;
            return closeH >= dinnerEndH;
        });
    }

    // Breakfast eligibility rules (unchanged)
    if (meal === 'breakfast') {
        pool = pool.filter(r => {
            const hasSI = r.cuisines?.includes('south_indian') && ['cafes', 'romantic', 'family', 'fine_dining'].includes(r.mood);
            const hasCont = r.cuisines?.includes('continental') && r.mood === 'cafes';
            return hasSI || hasCont;
        });
    } else if (meal === 'lunch') {
        pool = pool.filter(r => r.mood !== 'nightlife');
    }

    // Cuisine + mood filter
    if (selectedCuisines.length > 0 && selectedMoods.length > 0) {
        pool = pool.filter(r =>
            r.cuisines?.some(c => selectedCuisines.includes(c)) &&
            selectedMoods.includes(r.mood)
        );
    } else if (selectedCuisines.length > 0) {
        pool = pool.filter(r => r.cuisines?.some(c => selectedCuisines.includes(c)));
    } else {
        pool = pool.filter(r => selectedMoods.includes(r.mood));
    }

    if (pool.length === 0) {
        // Fallback: nearest match within eligibility rules
        let fallback = restaurants.filter(r => {
            if (meal === 'breakfast') {
                const hasSI = r.cuisines?.includes('south_indian') && ['cafes', 'romantic', 'family', 'fine_dining'].includes(r.mood);
                const hasCont = r.cuisines?.includes('continental') && r.mood === 'cafes';
                return hasSI || hasCont;
            }
            if (meal === 'lunch') return r.mood !== 'nightlife';
            return true;
        }).sort((a, b) => (a.distanceKm || 0) - (b.distanceKm || 0));
        if (fallback.length > 0) warnings.push(`No matching ${meal} restaurant found within ${travelRadius}km. Showing nearest match.`);
        return fallback.slice(0, 3);
    }
    return pool;
};

const buildTypeSuperset = (itemList, selectedTypes = [], travelRadius, warnings, itemTypeName) => {
    if (selectedTypes.length === 0) return [];
    let pool = itemList.filter(item =>
        (item.distanceKm || 0) <= travelRadius && selectedTypes.includes(item.type)
    );
    if (pool.length === 0) {
        const fallback = itemList
            .filter(item => selectedTypes.includes(item.type))
            .sort((a, b) => (a.distanceKm || 0) - (b.distanceKm || 0));
        if (fallback.length > 0) warnings.push(`No ${itemTypeName} found within ${travelRadius}km. Showing nearest match.`);
        return fallback.slice(0, 3);
    }
    return pool;
};

// ── Prioritization ────────────────────────────────────────────────────────────

// For district_top_picks: pick the best-rated item per (combination) bucket, deduplicated
const bucketPick = (superset, bucketKeyFn) => {
    const seen = new Set();
    const result = [];
    const sorted = [...superset].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    for (const item of sorted) {
        const key = bucketKeyFn(item);
        if (!seen.has(key)) {
            seen.add(key);
            result.push(item);
        }
    }
    return result;
};

// Score items for friends_network:
// Friend-reviewed items get friendAvg (0–5). Non-reviewed get (rating - 10) so they rank below
// all friend-reviewed items but still rank among themselves by district rating.
// BucketPick on this sorted list means: each bucket gets its best friend-reviewed item,
// or falls back to the best district-rated item if that bucket has no friend reviews.
const scoredForFriends = (superset, categoryLabel, warnings) => {
    const hasFriendReviews = superset.some(i => i.friendsActivity?.length > 0);
    if (!hasFriendReviews) {
        warnings.push(`No friend reviews found for ${categoryLabel} — showing District Top Picks instead.`);
    }
    return superset.map(item => {
        if (item.friendsActivity?.length > 0) {
            const sum = item.friendsActivity.reduce((acc, f) => acc + (f.rating || 0), 0);
            return { ...item, _score: sum / item.friendsActivity.length };
        }
        return { ...item, _score: (item.rating || 0) - 10 };
    }).sort((a, b) => b._score - a._score);
};

const buildMovieMainSet = (superset, moviePrefs, prioritization, memberCount, warnings) => {
    if (superset.length === 0) return [];
    const { genres = [] } = moviePrefs;

    // Always bucket by (genre, language) for variety — even when one dimension is unselected
    const movieBucketKey = (item) => {
        const g = item.genres?.find(g => genres.includes(g)) || item.genres?.[0] || '';
        return `${g}__${(item.language || '').toLowerCase()}`;
    };

    if (prioritization === 'friends_network') {
        // Per-bucket: friend-reviewed items beat district-rated within each (genre, language) bucket
        const scored = scoredForFriends(superset, 'Movies', warnings);
        return bucketPick(scored, movieBucketKey);
    }
    if (prioritization === 'budget_friendly') {
        return [...superset].sort((a, b) =>
            (estimateCost(a, 'movie', memberCount) || 0) - (estimateCost(b, 'movie', memberCount) || 0)
        );
    }
    // district_top_picks: best-rated per (genre, language) bucket
    return bucketPick(superset, movieBucketKey);
};

const buildRestaurantMainSet = (superset, mealPrefs, meal, prioritization, memberCount, warnings) => {
    if (superset.length === 0) return [];
    const { cuisines: selectedCuisines = [] } = mealPrefs;
    const mealLabel = meal.charAt(0).toUpperCase() + meal.slice(1);

    // Always bucket by (cuisine, mood) for variety — even when one dimension is unselected
    const restaurantBucketKey = (item) => {
        const c = selectedCuisines.length > 0
            ? (item.cuisines?.find(c => selectedCuisines.includes(c)) || item.cuisines?.[0] || '')
            : (item.cuisines?.[0] || '');
        return `${c}__${item.mood || ''}`;
    };

    if (prioritization === 'friends_network') {
        // Per-bucket: friend-reviewed items beat district-rated within each (cuisine, mood) bucket
        const scored = scoredForFriends(superset, mealLabel, warnings);
        return bucketPick(scored, restaurantBucketKey);
    }
    if (prioritization === 'budget_friendly') {
        return [...superset].sort((a, b) =>
            (estimateCost(a, 'restaurant', memberCount) || 0) - (estimateCost(b, 'restaurant', memberCount) || 0)
        );
    }
    // district_top_picks: best-rated per (cuisine, mood) bucket
    return bucketPick(superset, restaurantBucketKey);
};

const buildTypeMainSet = (superset, itemType, prioritization, memberCount, playHours, categoryLabel, warnings) => {
    if (superset.length === 0) return [];

    // Bucket by type for variety across multiple selected types
    const typeBucketKey = (item) => item.type || '';

    if (prioritization === 'friends_network') {
        // Per-bucket: friend-reviewed items beat district-rated within each type bucket
        const scored = scoredForFriends(superset, categoryLabel, warnings);
        return bucketPick(scored, typeBucketKey);
    }
    if (prioritization === 'budget_friendly') {
        return [...superset].sort((a, b) =>
            (estimateCost(a, itemType, memberCount, playHours) || 0) - (estimateCost(b, itemType, memberCount, playHours) || 0)
        );
    }
    // district_top_picks: best-rated per type bucket
    return bucketPick(superset, typeBucketKey);
};

// ── Triple rotation: pick up to 3 non-meal categories, cycling through all C(n,3) combos ──

const rotateTriple = (available, attempt) => {
    if (available.length <= 3) return available;
    const triples = [];
    for (let i = 0; i < available.length; i++)
        for (let j = i + 1; j < available.length; j++)
            for (let k = j + 1; k < available.length; k++)
                triples.push([available[i], available[j], available[k]]);
    return triples[attempt % triples.length];
};

// ── Main generator ────────────────────────────────────────────────────────────

export const generateItinerary = (prefs) => {
    const {
        dining: diningPrefs = {},
        movies: moviePrefs = {},
        events: eventPrefs = {},
        stores: storePrefs = {},
        activities: activityPrefs = {},
        play: playPrefs = {},
        memberCount = 2,
        dayStart = '6:00 AM',
        dayEnd = '4:00 AM',
        travelRadius = 10,
        prioritization = 'district_top_picks',
        attempt = 0,
    } = prefs;

    const dayStartH = parseTimeToDecimal(dayStart);
    let dayEndH = parseTimeToDecimal(dayEnd);
    if (dayEndH === 0) dayEndH = 24;
    else if (dayEndH < dayStartH) dayEndH += 24;

    const warnings = [];
    const playHrs = playPrefs.hours || 1;

    // ── Build supersets ───────────────────────────────────────────────────────
    const movieSuperset     = buildMovieSuperset(moviePrefs, travelRadius, warnings);
    const breakfastSuperset = buildRestaurantSuperset('breakfast', diningPrefs, travelRadius, 19, warnings);
    const lunchSuperset     = buildRestaurantSuperset('lunch', diningPrefs, travelRadius, 19, warnings);
    const dinnerSuperset    = buildRestaurantSuperset('dinner', diningPrefs, travelRadius, 19, warnings);
    const eventSuperset     = buildTypeSuperset(events, eventPrefs.types, travelRadius, warnings, 'event');
    const activitySuperset  = buildTypeSuperset(activities, activityPrefs.types, travelRadius, warnings, 'activity');
    const playSuperset      = buildTypeSuperset(playFacilities, playPrefs.types, travelRadius, warnings, 'sport');
    const storeSuperset     = buildTypeSuperset(stores, storePrefs.types, travelRadius, warnings, 'store');

    // ── Build main sets ───────────────────────────────────────────────────────
    const movieMainSet     = buildMovieMainSet(movieSuperset, moviePrefs, prioritization, memberCount, warnings);
    const breakfastMainSet = buildRestaurantMainSet(breakfastSuperset, diningPrefs.breakfast || {}, 'breakfast', prioritization, memberCount, warnings);
    const lunchMainSet     = buildRestaurantMainSet(lunchSuperset, diningPrefs.lunch || {}, 'lunch', prioritization, memberCount, warnings);
    const dinnerMainSet    = buildRestaurantMainSet(dinnerSuperset, diningPrefs.dinner || {}, 'dinner', prioritization, memberCount, warnings);
    const eventMainSet     = buildTypeMainSet(eventSuperset, 'event', prioritization, memberCount, 1, 'Events', warnings);
    const activityMainSet  = buildTypeMainSet(activitySuperset, 'activity', prioritization, memberCount, 1, 'Activities', warnings);
    const playMainSet      = buildTypeMainSet(playSuperset, 'play', prioritization, memberCount, playHrs, 'Sports', warnings);
    const storeMainSet     = buildTypeMainSet(storeSuperset, 'store', prioritization, memberCount, 1, 'Stores', warnings);

    const pick = (mainSet) => (!mainSet || mainSet.length === 0) ? null : mainSet[attempt % mainSet.length];

    // ── Choose up to 3 non-meal categories (C(n,3) rotation) ─────────────────
    const mainSetMap = { movie: movieMainSet, event: eventMainSet, activity: activityMainSet, play: playMainSet, store: storeMainSet };
    const available = ['movie', 'event', 'activity', 'play', 'store'].filter(cat => mainSetMap[cat].length > 0);
    const chosenCats = rotateTriple(available, attempt);

    // ── Assemble candidate slots with natural target times ────────────────────
    // All items get a targetH (best time of day for this activity).
    // Sorting by targetH gives a natural day ordering — no hardcoded templates needed.
    const candidates = [];

    // Meals: fixed target anchors, flexible within a cap
    if (breakfastMainSet.length > 0)
        candidates.push({ kind: 'meal', meal: 'breakfast', item: pick(breakfastMainSet), type: 'restaurant', duration: 1.5, targetH: 9,    prefix: '🍳 Breakfast' });
    if (lunchMainSet.length > 0)
        candidates.push({ kind: 'meal', meal: 'lunch',     item: pick(lunchMainSet),     type: 'restaurant', duration: 1.5, targetH: 13,   prefix: '🍽 Lunch' });
    if (dinnerMainSet.length > 0)
        candidates.push({ kind: 'meal', meal: 'dinner',    item: pick(dinnerMainSet),    type: 'restaurant', duration: 1.5, targetH: 19.5, prefix: '🍷 Dinner' });

    // Non-meal chosen categories
    for (const cat of chosenCats) {
        const item = pick(mainSetMap[cat]);
        if (!item) continue;
        const def = CAT_DEFAULTS[cat];

        if (cat === 'event') {
            // Events: use item's scheduled time as target (or 6 PM default)
            const eventTime = item.time ? parseTimeToDecimal(item.time) : 18;
            candidates.push({ kind: 'event', item, type: 'event', duration: item.durationHours || 2.5, targetH: eventTime, fixedTime: !!item.time, prefix: def.prefix });
        } else if (cat === 'movie') {
            // Movie duration from item data
            const dur = item.duration;
            const hM = dur?.match(/(\d+)h/); const mM = dur?.match(/(\d+)m/);
            const actualH = (hM ? parseInt(hM[1]) : 0) + (mM ? parseInt(mM[1]) : 0) / 60 || 2.25;
            candidates.push({ kind: 'movie', item, type: 'movie', duration: actualH + 0.5, targetH: def.targetH, fixedTime: false, prefix: def.prefix });
        } else {
            const duration = cat === 'play' ? playHrs : cat === 'activity' ? 2.0 : 1.0;
            candidates.push({ kind: cat, item, type: def.type || cat, duration, targetH: def.targetH, fixedTime: false, prefix: def.prefix });
        }
    }

    // Sort by targetH → natural day order
    candidates.sort((a, b) => a.targetH - b.targetH);

    // ── Schedule linearly ─────────────────────────────────────────────────────
    const timeline = [];
    let currentH = dayStartH;
    let totalCost = 0;
    let idCounter = 1;
    let breakfastEndH = null;
    const routeMap = { restaurant: 'dining', movie: 'movies', event: 'events', activity: 'activities', store: 'stores', play: 'play' };

    for (const slot of candidates) {
        const { item, type, duration, targetH, fixedTime, prefix, kind, meal } = slot;

        const travelH = timeline.length === 0 ? 0
            : Math.round(Math.min(90, (item.distanceKm || 0) * 3.5 + 5)) / 60;
        const arrivalH = currentH + travelH;

        let startH;

        if (kind === 'movie') {
            // Find next available showtime (9 AM base, repeating every slotInterval)
            const slotInterval = duration + 0.5;
            let showtime = 9;
            while (showtime < arrivalH) showtime += slotInterval;
            if (showtime >= 24 || (showtime + duration) > dayEndH) {
                warnings.push('Movie not added: no showtime fits within your day.');
                continue;
            }
            startH = showtime;

        } else if (fixedTime) {
            // Fixed-time event: must arrive by targetH (allow up to 15 min late)
            if (arrivalH > targetH + 0.25) {
                warnings.push(`Event "${item.name || item.title}" skipped: we'd arrive at ${formatTime(arrivalH)}, event starts at ${formatTime(targetH)}.`);
                continue;
            }
            startH = targetH;

        } else if (kind === 'meal') {
            const mealCap = { breakfast: 11, lunch: 15.5, dinner: 23 }[meal];
            startH = Math.max(arrivalH, targetH);
            if (meal === 'lunch' && breakfastEndH !== null)
                startH = Math.max(startH, breakfastEndH + 3);
            if (startH > mealCap) {
                warnings.push(`${prefix} not added: too late (latest possible: ${formatTime(mealCap)}).`);
                continue;
            }
            if (startH + duration > dayEndH) {
                warnings.push(`${prefix} not added: extends past end of day.`);
                continue;
            }

        } else {
            // Flexible (activity, play, store): wait for target if arriving early
            startH = Math.max(arrivalH, targetH);
            if (startH + duration > dayEndH) {
                warnings.push(`${prefix} not added: not enough time remaining.`);
                continue;
            }
        }

        // For non-restaurant items, also check return journey fits before midnight / dayEnd
        if (type !== 'restaurant') {
            const returnH = Math.round(Math.min(90, (item.distanceKm || 0) * 3.5 + 5)) / 60;
            const playEndLimit = type === 'play' ? Math.min(dayEndH, 24) : dayEndH;
            if (startH + duration + returnH > playEndLimit) {
                warnings.push(`${prefix} not added: return journey would exceed day end.`);
                continue;
            }
        }

        const cost = estimateCost(item, type, memberCount, playHrs);
        totalCost += cost;
        if (kind === 'meal' && meal === 'breakfast') breakfastEndH = startH + duration;
        currentH = startH + duration;

        timeline.push({
            id: `tl_${attempt}_${idCounter++}`,
            startTime: formatTime(startH),
            endTime: formatTime(currentH),
            _startH: startH,
            _endH: currentH,
            duration: `${duration} hours`,
            itemType: type,
            item,
            titlePrefix: prefix,
            estimatedCost: cost,
            travelTime: null,
            linkTo: `/${routeMap[type] || type}/${item.id}`,
        });
    }

    // ── Post-process: travel + buffer between items ───────────────────────────
    for (let j = 0; j < timeline.length - 1; j++) {
        const cur = timeline[j];
        const next = timeline[j + 1];
        const driveMins = Math.round(Math.min(90, (next.item?.distanceKm || 0) * 3.5 + 5));
        const actualGapMins = Math.round((next._startH - cur._endH) * 60);
        const bufferMins = Math.max(0, actualGapMins - driveMins);
        let travelStr = `${driveMins} min drive`;
        if (bufferMins >= 5) travelStr += ` · ${bufferMins} min free time`;
        cur.travelTime = travelStr;
        cur.driveMins = driveMins;
        cur.bufferMins = bufferMins;
    }
    if (timeline.length > 0) timeline[timeline.length - 1].travelTime = null;

    return {
        id: `itinerary_${attempt}`,
        title: `Your Day: ${timeline.length} Stops`,
        totalCostRaw: totalCost,
        totalPrice: `₹${totalCost.toLocaleString()}`,
        warnings: [...new Set(warnings)],
        timeline,
    };
};
