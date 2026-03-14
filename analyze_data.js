
import { 
    restaurants, cuisines, diningMoods,
    movies, movieGenres,
    events, eventTypes,
    stores, storeTypes,
    activities, activityCategories,
    playFacilities, sportServices 
} from './src/data/mockData.js';

function checkCategory(items, subtypes, typeKey, subtypeIdKey, categoryName) {
    console.log(`\n--- ${categoryName} ---`);
    const counts = {};
    subtypes.forEach(s => counts[s[subtypeIdKey]] = 0);
    
    items.forEach(item => {
        // some items have arrays for subtypes (like restaurants.cuisines), some have a single string (item.type or item.category)
        if (Array.isArray(item[typeKey])) {
            item[typeKey].forEach(t => { if (counts[t] !== undefined) counts[t]++; });
        } else {
            if (counts[item[typeKey]] !== undefined) counts[item[typeKey]]++;
        }
    });

    let needed = 0;
    subtypes.forEach(s => {
        const count = counts[s[subtypeIdKey]];
        console.log(`- ${s[subtypeIdKey]}: ${count}`);
        if (count < 2) needed += (2 - count);
    });
    console.log(`Total needed for ${categoryName}: ${needed}`);
}

checkCategory(restaurants, cuisines, 'cuisines', 'id', 'Dining Cuisines');
checkCategory(movies, movieGenres, 'genres', 'id', 'Movie Genres');
checkCategory(events, eventTypes, 'type', 'id', 'Event Types');
checkCategory(stores, storeTypes, 'type', 'id', 'Store Types');
checkCategory(activities, activityCategories, 'type', 'id', 'Activity Types');
checkCategory(playFacilities, sportServices, 'type', 'id', 'Play Sports');
