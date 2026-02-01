import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import https from 'https';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RAW_DIR = path.join(__dirname, '../src/data/raw');

const agent = new https.Agent({
    rejectUnauthorized: false,
    // Lower security level to accept small keys
    ciphers: 'DEFAULT@SECLEVEL=0'
});

const SECTIONS = [
    { name: 'vendita', url: 'https://www.royalteam-immobiliare.it/it/immobili-in-vendita' },
    { name: 'affitto', url: 'https://www.royalteam-immobiliare.it/it/immobili-in-affitto' }
];

async function downloadPage(url, filepath) {
    try {
        console.log(`Downloading ${url}...`);
        const response = await axios.get(url, {
            httpsAgent: agent,
            responseType: 'text',
            // Mimic a browser just in case
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        const html = response.data;

        if (html.includes('Nessun immobile trovato')) {
            console.log('Page indicates no listings found.');
            return false;
        }

        await fs.writeFile(filepath, html);
        return true;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.log('404 Not Found.');
            return false;
        }
        console.error(`Error downloading ${url}:`, error.message);
        return false;
    }
}

async function run() {
    await fs.mkdir(RAW_DIR, { recursive: true });

    for (const section of SECTIONS) {
        console.log(`--- Fetching ${section.name} listings ---`);
        let sectionPage = 1;
        while (true) {
            const url = `${section.url}?page=${sectionPage}`;
            const filename = `${section.name}_page_${sectionPage}.html`;
            const filepath = path.join(RAW_DIR, filename);

            const success = await downloadPage(url, filepath);
            if (!success) break;

            if (sectionPage > 20) break;

            sectionPage++;
            await new Promise(r => setTimeout(r, 1000));
        }
    }
}

run();
