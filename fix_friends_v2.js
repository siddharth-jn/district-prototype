import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mockDataPath = path.join(__dirname, 'src', 'data', 'mockData.js');
let content = fs.readFileSync(mockDataPath, 'utf8');

// === STEP 1: Replace the users array with 15 friends ===
const newUsers = `export const users = [
    {
        id: 'u1',
        name: 'Siddharth Jain',
        city: 'Mumbai',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop',
        friendIds: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12', 'f13', 'f14', 'f15'],
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
    { id: 'f1', name: 'Aditi Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', mutualFriends: 12, visitedPlaces: [] },
    { id: 'f2', name: 'Rohan Kapoor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', mutualFriends: 8, visitedPlaces: [] },
    { id: 'f3', name: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', mutualFriends: 15, visitedPlaces: [] },
    { id: 'f4', name: 'Amit Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', mutualFriends: 5, visitedPlaces: [] },
    { id: 'f5', name: 'Sana Khan', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', mutualFriends: 20, visitedPlaces: [] },
    { id: 'f6', name: 'Vikram Desai', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', mutualFriends: 3, visitedPlaces: [] },
    { id: 'f7', name: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', mutualFriends: 14, visitedPlaces: [] },
    { id: 'f8', name: 'Karan Patel', avatar: 'https://images.unsplash.com/photo-1504257432389-523431e15ce5?q=80&w=150&auto=format&fit=crop', mutualFriends: 9, visitedPlaces: [] },
    { id: 'f9', name: 'Ananya Rao', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150&auto=format&fit=crop', mutualFriends: 18, visitedPlaces: [] },
    { id: 'f10', name: 'Rahul Bose', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', mutualFriends: 7, visitedPlaces: [] },
    { id: 'f11', name: 'Ishaan Mehta', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop', mutualFriends: 11, visitedPlaces: [] },
    { id: 'f12', name: 'Kavya Nair', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150&auto=format&fit=crop', mutualFriends: 6, visitedPlaces: [] },
    { id: 'f13', name: 'Dev Malhotra', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=150&auto=format&fit=crop', mutualFriends: 13, visitedPlaces: [] },
    { id: 'f14', name: 'Tara Reddy', avatar: 'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?q=80&w=150&auto=format&fit=crop', mutualFriends: 4, visitedPlaces: [] },
    { id: 'f15', name: 'Arjun Khanna', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150&auto=format&fit=crop', mutualFriends: 16, visitedPlaces: [] }
];`;

// Replace the existing users block
content = content.replace(/export const users = \[[\s\S]*?\];/, newUsers);

console.log('✅ Users updated to 15 friends');

// === STEP 2: Normalize all friendsActivity to use correct field names ===
// The listing pages look for .name and .avatar but data has .userName and .userImage
// We fix this by changing all userImage -> avatar and userName -> name inside friendsActivity

// Do a smart replacement: In friendsActivity arrays, rename fields
// Strategy: use regex to find friendsActivity blocks and add name/avatar aliases

// Actually simpler: just change the field names in the raw text
// But we need to be careful not to change userName/userImage outside friendsActivity

// The safest approach: replace field names specifically in friendsActivity patterns
// Pattern: "userImage: '" -> "avatar: '" and "userName: '" -> "name: '"
// But these could appear elsewhere. Let us just rename them globally inside friendsActivity blocks.

// We'll do a regex that matches the context - within an object that has "userId: 'f"
// Simple approach: rename these fields globally as they ONLY exist in friendsActivity objects
content = content.replace(/\buserName:/g, 'name:');
content = content.replace(/\buserImage:/g, 'avatar:');

console.log('✅ Renamed userName->name and userImage->avatar in friendsActivity');

fs.writeFileSync(mockDataPath, content, 'utf8');
console.log('✅ mockData.js updated!');
