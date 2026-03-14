const fs = require('fs');

const mockData = fs.readFileSync('./src/data/mockData.js', 'utf8');
const urls = [...mockData.matchAll(/image: '(https:\/\/[^']+)'/g)].map(m => m[1]);
const uniqueUrls = [...new Set(urls)];

async function checkUrls() {
    let brokenCount = 0;
    for (const url of uniqueUrls) {
        try {
            const res = await fetch(url, { method: 'HEAD' });
            if (!res.ok) {
                console.log('BROKEN:', url, res.status);
                brokenCount++;
            }
        } catch (e) {
            console.log('ERROR:', url, e.message);
            brokenCount++;
        }
    }
    console.log('Done checking ' + uniqueUrls.length + ' urls. Broken: ' + brokenCount);
}

checkUrls();
