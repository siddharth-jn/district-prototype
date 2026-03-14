import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mockDataPath = path.join(__dirname, 'src', 'data', 'mockData.js');

let fileContent = fs.readFileSync(mockDataPath, 'utf8');

// 1. Normalize Rupee Symbols to max 3
fileContent = fileContent.replace(/price:\s*'₹₹₹₹+'/g, "price: '₹₹₹'");

// We need to inject code into the mockData.js to dynamically add reviews and friends.
// However, since mockData.js is a module that exports static arrays, we can write a script
// that evaluates it, modifies the arrays, and writes it back, OR we can parse it using regex.
// Regex/String replacement is safer for preserving the exact formatting of the mockData.js file.

// Let's create a more robust approach:
// We will read the file and do string replacements.

console.log('Replacing Rupee symbols...');

// 2. Randomize ratings (3.9 - 4.9) and add reviewsCount
// We'll find all occurrences of `rating: <number>,` and replace them.
const randomRating = () => (Math.random() * (4.9 - 3.9) + 3.9).toFixed(1);
const randomReviewsCount = () => {
    const counts = ['342', '1.2k', '89', '450', '2.1k', '112', '950', '3.4k', '56', '870', '1.5k', '230'];
    return counts[Math.floor(Math.random() * counts.length)];
};

console.log('Randomizing ratings and adding review counts...');
fileContent = fileContent.replace(/rating:\s*[\d.]+,\s*(price|friendsActivity)/g, (match, p1) => {
    return `rating: ${Number(randomRating())}, reviewsCount: '${randomReviewsCount()}', ${p1}`;
});

// Since the previous regex might not catch things that don't have price or friendsActivity right after,
// let's do a more general replace for rating.
fileContent = fileContent.replace(/rating:\s*([\d.]+)(,)/g, (match, p1, p2) => {
    // If it already has reviewsCount right after, this will break if we run it twice, but we are running once.
    // Wait, the previous replace already added reviewsCount before price/friendsActivity.
    // Let's just do it cleanly:
    return `rating: ${Number(randomRating())}${p2}`;
});

// Add reviewsCount to items that don't have it yet.
// We can search for `rating: <num>,` and if it doesn't have `reviewsCount`, we add it.
fileContent = fileContent.replace(/(rating:\s*[\d.]+,)(?!.*reviewsCount)/g, `$1 reviewsCount: '${randomReviewsCount()}',`);

// 3. Add Generic Public Reviews
// We will look for `friendsActivity: \[.*?\] }` and add `publicReviews` right after it for all items.
const genericReviews = [
    "{ userName: 'Aarav M.', userImage: 'https://i.pravatar.cc/150?u=aarav', rating: 5, text: 'Absolutely loved this place! Highly recommend.' }",
    "{ userName: 'Priya S.', userImage: 'https://i.pravatar.cc/150?u=priya', rating: 4, text: 'Great experience overall, will visit again.' }",
    "{ userName: 'Rohan K.', userImage: 'https://i.pravatar.cc/150?u=rohan', rating: 5, text: 'Exceptional service and wonderful ambiance.' }",
    "{ userName: 'Ananya V.', userImage: 'https://i.pravatar.cc/150?u=ananya', rating: 4, text: 'Good quality, definitely worth the price.' }"
];

console.log('Injecting public reviews...');
fileContent = fileContent.replace(/(friendsActivity:\s*\[.*?\])(\s*\})/g, (match, p1, p2) => {
    // Pick 2 random reviews
    const revs = [...genericReviews].sort(() => 0.5 - Math.random()).slice(0, 2);
    return `${p1}, publicReviews: [${revs.join(', ')}]${p2}`;
});


// 4. Generate 20+ generic users for friends network
console.log('Generating friends...');
const newFriends = [];
const friendNames = ['Aditi Desai', 'Rahul Verma', 'Sneha Kapoor', 'Karan Singh', 'Neha Sharma', 'Vikram Malhotra', 'Pooja Iyer', 'Amit Patel', 'Riya Gupta', 'Suresh Nair', 'Divya Reddy', 'Manish Joshi', 'Ankita Das', 'Rajeev Menon', 'Simran Kaur', 'Deepak Chawla', 'Kavita Rao', 'Arjun Saxena', 'Nisha Ahuja', 'Gaurav Bhatia', 'Ragini Trivedi', 'Varun Ghosh'];
for (let i = 0; i < friendNames.length; i++) {
    newFriends.push(`
    {
        id: 'f${i + 1}',
        name: '${friendNames[i]}',
        avatar: 'https://i.pravatar.cc/150?u=friend${i}',
        mutualFriends: ${Math.floor(Math.random() * 15) + 1},
        visitedPlaces: []
    }`);
}

// 5. Inject these friends into u1's 'friends' array
const u1FriendsArray = friendNames.map((_, i) => `'f${i + 1}'`).join(', ');
fileContent = fileContent.replace(/friends:\s*\['u2',\s*'u3'\]/, `friends: [${u1FriendsArray}]`);

// 6. Supplement u1's visitedPlaces to 10 items.
const u1Visited = `[
            { id: 'r1', type: 'restaurant', rating: 5, review: 'Best cold coffee in Bandra!', date: 'Today' },
            { id: 'r2', type: 'restaurant', rating: 4, review: 'Great ambiance, will come back.', date: 'Yesterday' },
            { id: 'm1', type: 'movie', rating: 5, review: 'Absolutely mind-blowing plot!', date: 'Last Week' },
            { id: 'st_app_1', type: 'store', rating: 4, review: 'Got some amazing deals on casuals.', date: '2 weeks ago' },
            { id: 'act_wp_1', type: 'activity', rating: 5, review: 'So much fun with the family!', date: 'Last Month' },
            { id: 'play_tc_1', type: 'play', rating: 4, review: 'Well maintained turf.', date: 'Last Month' },
            { id: 'r8', type: 'restaurant', rating: 5, review: 'Awesome nightlife vibes.', date: '2 Months ago' },
            { id: 'm3', type: 'movie', rating: 4, review: 'Hilarious, couldn\\'t stop laughing.', date: '3 Months ago' },
            { id: 'st_fw_2', type: 'store', rating: 5, review: 'Great collection of sneakers.', date: '3 Months ago' },
            { id: 'act_ms_2', type: 'activity', rating: 4, review: 'Very informative and historic.', date: '6 Months ago' }
        ]`;
fileContent = fileContent.replace(/visitedPlaces:\s*\[[\s\S]*?\],\s*preferences/, `visitedPlaces: ${u1Visited},\n        preferences`);


// Add the actual new friend objects to the users array.
// Find the end of the users array and insert the new friends.
fileContent = fileContent.replace(/(export const users = \[[\s\S]*?)(];)/, (match, p1, p2) => {
    return `${p1},${newFriends.join(',')}\n${p2}`;
});

// 7. Map friends to item friendsActivity lists randomly.
// We will find `friendsActivity: []` and randomly populate it with 1-3 friends.
console.log('Mapping friend activities...');
fileContent = fileContent.replace(/friendsActivity:\s*\[\]/g, (match) => {
    const numFriends = Math.floor(Math.random() * 3) + 1; // 1 to 3 friends
    const selectedFriends = [];
    const usedIndices = new Set();
    
    for (let i = 0; i < numFriends; i++) {
        let rIndex;
        do {
            rIndex = Math.floor(Math.random() * friendNames.length);
        } while (usedIndices.has(rIndex));
        usedIndices.add(rIndex);
        
        const fId = `f${rIndex + 1}`;
        const fName = friendNames[rIndex];
        const fAvatar = `https://i.pravatar.cc/150?u=friend${rIndex}`;
        const fRating = Math.floor(Math.random() * 2) + 4; // 4 or 5
        const fReviews = ['Amazing place!', 'Had a really good time here.', 'Definitely check this out.', 'Loved it!', 'Highly recommended.'];
        const fReview = fReviews[Math.floor(Math.random() * fReviews.length)];
        
        selectedFriends.push(`{ userId: '${fId}', userName: '${fName}', userImage: '${fAvatar}', rating: ${fRating}, review: '${fReview}', date: 'Recently' }`);
    }
    
    return `friendsActivity: [\n            ${selectedFriends.join(',\n            ')}\n        ]`;
});


console.log('Writing back to mockData.js...');
fs.writeFileSync(mockDataPath, fileContent, 'utf8');
console.log('Done!');
