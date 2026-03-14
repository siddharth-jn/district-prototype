import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mockDataPath = path.join(__dirname, 'src', 'data', 'mockData.js');
let content = fs.readFileSync(mockDataPath, 'utf8');

// Remove ", publicReviews: [...]" blocks (handles nested brackets)
// We match from ", publicReviews: [" to the matching closing "]"
const removePublicReviews = (str) => {
    let result = '';
    let i = 0;
    while (i < str.length) {
        // Look for ", publicReviews: ["
        const marker = ',';
        const keyword = ' publicReviews: [';
        if (str[i] === ',' && str.slice(i + 1, i + 1 + keyword.length) === keyword) {
            // Skip forward past the opening "["
            let depth = 0;
            let j = i + 1 + keyword.length - 1; // j is at "["
            while (j < str.length) {
                if (str[j] === '[') depth++;
                else if (str[j] === ']') {
                    depth--;
                    if (depth === 0) { i = j + 1; break; }
                }
                j++;
            }
        } else {
            result += str[i];
            i++;
        }
    }
    return result;
};

content = removePublicReviews(content);

fs.writeFileSync(mockDataPath, content, 'utf8');
console.log('Removed all publicReviews from mockData.js!');
