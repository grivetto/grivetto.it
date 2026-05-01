import * as cheerio from 'cheerio';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import https from 'https';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RAW_DIR = path.join(__dirname, '../src/data/raw');
const OUTPUT_FILE = path.join(__dirname, '../src/data/listings.json');
const ASSETS_DIR = path.join(__dirname, '../public/assets/properties');

const agent = new https.Agent({
    rejectUnauthorized: false,
    ciphers: 'DEFAULT@SECLEVEL=0'
});

async function downloadImage(url, id) {
    if (!url) return null;
    const extension = path.extname(new URL(url).pathname) || '.jpg';
    const filename = `${id}${extension}`;
    const filepath = path.join(ASSETS_DIR, filename);

    try {
        // Check if already exists
        try {
            await fs.access(filepath);
            return `/assets/properties/${filename}`;
        } catch {
            // Proceed to download
        }

        console.log(`Downloading image for ${id}...`);
        const response = await axios.get(url, {
            httpsAgent: agent,
            responseType: 'arraybuffer',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        await fs.writeFile(filepath, response.data);
        return `/assets/properties/${filename}`;
    } catch (error) {
        console.error(`Failed to download image for ${id}: ${error.message}`);
        return null;
    }
}

async function processListings() {
    try {
        await fs.mkdir(ASSETS_DIR, { recursive: true });
        const files = await fs.readdir(RAW_DIR);
        let allListings = [];

        for (const file of files) {
            if (!file.endsWith('.html')) continue;

            console.log(`Processing ${file}...`);
            const filePath = path.join(RAW_DIR, file);
            const html = await fs.readFile(filePath, 'utf-8');
            const $ = cheerio.load(html);

            const elements = $('.box-annuncio');

            for (let i = 0; i < elements.length; i++) {
                const el = elements[i];
                const $el = $(el);

                // Extract Agency Code
                const codeText = $el.find('.fa-file-lines').parent().text().trim();

                // Extract Title
                const title = $el.find('.card-body h5').text().trim();

                // Extract Price
                const price = $el.find('.price-box').text().trim();

                // Extract Image URL
                const style = $el.find('.listing-box-image').attr('style');
                let externalImage = '';
                if (style) {
                    const match = style.match(/url\((.*?)\)/);
                    if (match) externalImage = match[1];
                }

                // Extract Link
                let link = $el.find('a.link-b-carousel').attr('href');
                if (link && !link.startsWith('http')) {
                    link = 'https://www.royalteam-immobiliare.it' + link;
                }

                const area = $el.find('.fa-ruler-combined').parent().text().replace(':', '').trim();

                if (codeText) {
                    const upperCode = codeText.toUpperCase();
                    let type = 'Unknown';
                    // Determine type based on source filename
                    if (file.toLowerCase().includes('vendita')) {
                        type = 'Sale';
                    } else if (file.toLowerCase().includes('affitto')) {
                        type = 'Rent';
                    } else if (upperCode.startsWith('MGRA')) {
                        type = 'Rent';
                    } else if (upperCode.startsWith('MGRV')) {
                        type = 'Sale';
                    }

                    // Process all listings found
                    // Download image locally
                    const localImage = await downloadImage(externalImage, codeText);

                    allListings.push({
                        id: codeText,
                        title,
                        price,
                        location: 'Torino & Provincia',
                        image: localImage || externalImage, // Fallback to external if download fails
                        link,
                        area,
                        code: codeText,
                        type: type
                    });
                }
            }
        }

        // Deduplicate by ID
        const uniqueListings = Array.from(new Map(allListings.map(item => [item.id, item])).values());

        console.log(`Total listings found: ${uniqueListings.length}`);

        await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
        await fs.writeFile(OUTPUT_FILE, JSON.stringify(uniqueListings, null, 2));
        console.log(`Saved listings to ${OUTPUT_FILE}`);

    } catch (error) {
        console.error('Error processing listings:', error);
        process.exit(1);
    }
}

processListings();
