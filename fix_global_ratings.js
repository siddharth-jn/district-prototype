import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mockDataPath = path.join(__dirname, 'src', 'data', 'mockData.js');

let fileContent = fs.readFileSync(mockDataPath, 'utf8');

const randomRating = () => (Math.random() * (4.9 - 3.9) + 3.9).toFixed(1);

// We want to replace the FIRST rating occurrence in each item (the global rating).
// The safest way is to target `rating: <number>, reviewsCount:`
// Let's do a regex that specifically looks for rating right before reviewsCount
console.log('Randomizing global item ratings back to decimals...');
fileContent = fileContent.replace(/rating:\s*[\d.]+,\s*reviewsCount/g, () => {
    return `rating: ${Number(randomRating())}, reviewsCount`;
});

// Write it back
fs.writeFileSync(mockDataPath, fileContent, 'utf8');
console.log('Update Complete!');
