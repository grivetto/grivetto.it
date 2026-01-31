import * as cheerio from 'cheerio';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RAW_DIR = path.join(__dirname, '../src/data/raw');
const OUTPUT_FILE = path.join(__dirname, '../src/data/listings.json');

async function processListings() {
    try {
        const files = await fs.readdir(RAW_DIR);
        let allListings = [];

        for (const file of files) {
            if (!file.endsWith('.html')) continue;

            console.log(`Processing ${file}...`);
            const filePath = path.join(RAW_DIR, file);
            const html = await fs.readFile(filePath, 'utf-8');
            const $ = cheerio.load(html);

            const elements = $('.box-annuncio');
            // console.log(`Found ${elements.length} elements in ${file}.`);

            elements.each((i, el) => {
                const $el = $(el);

                // Extract Agency Code
                const codeText = $el.find('.fa-file-lines').parent().text().trim();

                // Extract Title
                const title = $el.find('.card-body h5').text().trim();

                // Extract Price
                const price = $el.find('.price-box').text().trim();

                // Extract Image
                const style = $el.find('.listing-box-image').attr('style');
                let image = '';
                if (style) {
                    const match = style.match(/url\((.*?)\)/);
                    if (match) image = match[1];
                }

                // Extract Link
                let link = $el.find('a.link-b-carousel').attr('href');
                if (link && !link.startsWith('http')) {
                    link = 'https://www.royalteam-immobiliare.it' + link;
                }

                const area = $el.find('.fa-ruler-combined').parent().text().replace(':', '').trim();

                if (codeText && codeText.toUpperCase().startsWith('MGR')) {
                    allListings.push({
                        id: codeText,
                        title,
                        price,
                        location: 'Torino & Provincia',
                        image,
                        link,
                        area,
                        code: codeText
                    });
                }
            });
        }

        // Deduplicate by ID
        const uniqueListings = Array.from(new Map(allListings.map(item => [item.id, item])).values());

        console.log(`Total MGR listings found: ${uniqueListings.length}`);

        await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
        await fs.writeFile(OUTPUT_FILE, JSON.stringify(uniqueListings, null, 2));
        console.log(`Saved listings to ${OUTPUT_FILE}`);

    } catch (error) {
        console.error('Error processing listings:', error);
        process.exit(1);
    }
}

processListings();
