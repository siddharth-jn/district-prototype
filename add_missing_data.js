import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/data/mockData.js');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Limit u1's friendIds to 10
content = content.replace(/friendIds:\s*\[([^\]]+)\]/, (match, friendsStr) => {
    const friendIds = friendsStr.split(',').map(s => s.trim().replace(/['"]/g, '')).filter(Boolean);
    const limited = friendIds.slice(0, 10);
    return `friendIds: [${limited.map(id => `'${id}'`).join(', ')}]`;
});

// Since we can't easily execute JS logic in a simple string replace for all arrays,
// we will just write a complex script to EVAL the mockData, modify it, and write it back?
// No, regenerating mockData from scratch is hard since it's ES module with exports.
// Let's use regex to fix friendsActivity ratings.
content = content.replace(/rating:\s*([0-9.]+)(?=\s*,\s*review|\s*})/g, (match, ratingStr) => {
    let r = parseFloat(ratingStr);
    let rounded = Math.round(r * 2) / 2;
    return `rating: ${rounded}`;
});

// Add missing movies before the bottom of movies array
const missingMovies = `
    // --- Missing Categories Additions ---
    { id: 'com_tam_1', title: 'Comali', genre: 'Comedy', genres: ['comedy'], rating: 4.5, reviewsCount: '2k', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 20m', language: 'Tamil', format: '2D' },
    { id: 'com_tel_1', title: 'Jathi Ratnalu', genre: 'Comedy', genres: ['comedy'], rating: 4.8, reviewsCount: '3.5k', image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 25m', language: 'Telugu', format: '2D' },
    { id: 'hor_tam_1', title: 'Pizza', genre: 'Horror', genres: ['horror'], rating: 4.6, reviewsCount: '1.2k', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 0m', language: 'Tamil', format: '2D' },
    { id: 'hor_tel_1', title: 'Masooda', genre: 'Horror', genres: ['horror'], rating: 4.7, reviewsCount: '1.8k', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 40m', language: 'Telugu', format: '2D' },
    { id: 'rom_eng_1', title: 'La La Land', genre: 'Romance', genres: ['romance'], rating: 4.8, reviewsCount: '5k', image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 8m', language: 'English', format: '2D' },
    { id: 'rom_tam_1', title: '96', genre: 'Romance', genres: ['romance'], rating: 4.9, reviewsCount: '4k', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 38m', language: 'Tamil', format: '2D' },
    { id: 'act_mal_1', title: 'Minnal Murali', genre: 'Action', genres: ['action'], rating: 4.7, reviewsCount: '3k', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop', duration: '2h 38m', language: 'Malayalam', format: '2D' },
    { id: 'sci_tam_1', title: '24', genre: 'Sci-Fi', genres: ['sci_fi'], rating: 4.6, reviewsCount: '2.5k', image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=1974&auto=format&fit=crop', duration: '2h 44m', language: 'Tamil', format: '2D' },
    { id: 'sci_mal_1', title: 'Android Kunjappan Version 5.25', genre: 'Sci-Fi', genres: ['sci_fi'], rating: 4.7, reviewsCount: '1.5k', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop', duration: '2h 20m', language: 'Malayalam', format: '2D' }
];

// --- Events Data ---`;
content = content.replace('];\n\n// --- Events Data ---', missingMovies);

fs.writeFileSync(filePath, content);
console.log('updated mockData through regex');
