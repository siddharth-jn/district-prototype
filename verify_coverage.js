
import { restaurants, diningMoods, cuisines } from './src/data/mockData.js';

console.log('Verifying Mood x Cuisine Coverage...');

let missingCombinations = [];

diningMoods.forEach(mood => {
    cuisines.forEach(cuisine => {
        const hasRestaurant = restaurants.some(r =>
            r.mood === mood.id && r.cuisines.includes(cuisine.id)
        );

        if (!hasRestaurant) {
            missingCombinations.push(`${mood.name} + ${cuisine.name}`);
        }
    });
});

if (missingCombinations.length > 0) {
    console.log(`Missing ${missingCombinations.length} combinations:`);
    missingCombinations.forEach(c => console.log(`- ${c}`));
} else {
    console.log('All Mood x Cuisine combinations are covered! ✅');
}
