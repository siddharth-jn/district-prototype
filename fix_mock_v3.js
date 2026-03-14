import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mockDataPath = path.join(__dirname, 'src', 'data', 'mockData.js');

let fileContent = fs.readFileSync(mockDataPath, 'utf8');

// The 10 users with Unsplash portraits
const newUsers = `export const users = [
    {
        id: 'u1',
        name: 'Siddharth Jain',
        city: 'Mumbai',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop',
        friendIds: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10'],
        visitedPlaces: [
            { type: 'restaurant', placeId: 'r1', rating: 4.5, review: "Loved the ambience!", date: '2 weeks ago' },
            { type: 'movie', placeId: 'm1', rating: 5.0, review: "Absolute masterpiece.", date: '1 month ago' },
            { type: 'store', placeId: 's2', rating: 3.5, review: "Good collection but a bit pricey.", date: '3 months ago' },
            { type: 'activity', placeId: 'a1', rating: 4.5, review: "Great place to relax.", date: 'Last week' },
            { type: 'play', placeId: 'p2', rating: 4.0, review: "Fun turf, well maintained.", date: '2 months ago' },
            { type: 'restaurant', placeId: 'r7', rating: 3.5, review: "Crowded but nice vibe.", date: '1 year ago' },
            { type: 'movie', placeId: 'sci_1', rating: 4.5, review: "Visually stunning.", date: '3 weeks ago' },
            { type: 'event', placeId: 'e2', rating: 4.0, review: "Hilarious set!", date: '4 months ago' },
            { type: 'store', placeId: 's5', rating: 4.5, review: "Got some great kicks here.", date: 'Last month' },
            { type: 'play', placeId: 'p3', rating: 5.0, review: "Best pickleball court in town.", date: 'Yesterday' }
        ]
    },
    { id: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', mutualFriends: 12 },
    { id: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', mutualFriends: 8 },
    { id: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', mutualFriends: 15 },
    { id: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', mutualFriends: 5 },
    { id: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', mutualFriends: 20 },
    { id: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', mutualFriends: 3 },
    { id: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', mutualFriends: 14 },
    { id: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1504257432389-523431e15ce5?q=80&w=150&auto=format&fit=crop', mutualFriends: 9 },
    { id: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', mutualFriends: 18 },
    { id: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', mutualFriends: 7 }
];`;

// 1. Replace users array entirely
fileContent = fileContent.replace(/export const users = \[[\s\S]*?\];/, newUsers);

// Ensure currentUser is set correctly (just users[0])
fileContent = fileContent.replace(/export const currentUser = users\[0\];[\s\S]*?\]\n    \}\n\);/g, 'export const currentUser = users[0];');


// 2. Fix friends activities across all items to only use these 10 friends and have .5 ratings
const friends = [
    { id: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop' },
    { id: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop' },
    { id: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop' },
    { id: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop' },
    { id: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop' },
    { id: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop' },
    { id: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop' },
    { id: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1504257432389-523431e15ce5?q=80&w=150&auto=format&fit=crop' },
    { id: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop' },
    { id: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop' }
];

function normalizeRating(val) {
    return (Math.round(val * 2) / 2).toFixed(1);
}

const fReviews = ['Amazing place!', 'Had a really good time here.', 'Definitely check this out.', 'Loved it!', 'Highly recommended.', 'Not bad, would go again.', 'The vibe was incredible.'];

fileContent = fileContent.replace(/friendsActivity:\s*\[[\s\S]*?\]/g, () => {
    // Generate new valid friendsActivity
    const numFriends = Math.floor(Math.random() * 3) + 1; // 1 to 3 friends
    const selected = friends.sort(() => 0.5 - Math.random()).slice(0, numFriends);
    
    const arr = selected.map(f => {
        const rRating = normalizeRating(Math.random() * 1.5 + 3.5); // 3.5 to 5.0
        const rReview = fReviews[Math.floor(Math.random() * fReviews.length)];
        return `{ userId: '${f.id}', userName: '${f.name}', userImage: '${f.avatar}', rating: ${rRating}, review: '${rReview}', date: 'Recently' }`;
    });
    
    return `friendsActivity: [\n            ${arr.join(',\n            ')}\n        ]`;
});

console.log('Writing back to mockData.js...');
fs.writeFileSync(mockDataPath, fileContent, 'utf8');
console.log('Update Complete!');
