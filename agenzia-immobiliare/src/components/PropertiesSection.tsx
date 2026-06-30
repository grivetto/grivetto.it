import { PropertyCard } from './PropertyCard';
import listingsData from '../data/listings.json';
import { motion } from 'framer-motion';

interface PropertiesSectionProps {
    category?: string | null;
}

export const PropertiesSection = ({ category }: PropertiesSectionProps) => {
    const filteredListings = listingsData.filter(item => {
        if (!category) return true;
        const lowerTitle = item.title.toLowerCase();

        // Handle strict Types from data
        if (category === 'VENDITA') {
            return (item as any).type === 'Sale';
        }
        if (category === 'AFFITTO') {
            return (item as any).type === 'Rent';
        }

        switch (category) {
            case 'Residenziale':
                return lowerTitle.includes('appartamento') || lowerTitle.includes('casa') || lowerTitle.includes('bifamiliare') || lowerTitle.includes('attico');
            case 'Commerciale':
                return lowerTitle.includes('negozio') || lowerTitle.includes('ufficio') || lowerTitle.includes('capannone') || lowerTitle.includes('attività');
            case 'Prestigio':
                return lowerTitle.includes('villa') || lowerTitle.includes('palazzo') || lowerTitle.includes('castello');
            case 'Investimenti':
                return lowerTitle.includes('negozio'); // Simplified for now
            default:
                return true;
        }
    });

    return (
        <section id={category ? `immobili-${category.toLowerCase()}` : 'esclusiva-selezione'} className="relative py-32 bg-[var(--color-primary)]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-6"
                >
                    <div>
                        <h2 className="font-display text-4xl md:text-6xl text-white mb-6">
                            {category ? `Immobili - ${category}` : 'Esclusiva Selezione'}
                        </h2>
                        <p className="text-[var(--color-text-muted)] max-w-md text-lg font-light">
                            Una collezione curata di proprietà prestigiose gestite direttamente da noi.
                        </p>
                    </div>

                </motion.div>

                {filteredListings.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                        {filteredListings.map((prop, index) => {
                            // First item takes 2x2 grid space
                            const isFeatured = index === 0;
                            const gridClass = isFeatured ? "md:col-span-2 md:row-span-2 h-[600px] md:h-full" : "h-full";

                            return (
                                <PropertyCard
                                    key={prop.id}
                                    {...prop}
                                    gridClass={gridClass}
                                    delay={index * 0.1}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-20 glass-panel rounded-2xl">
                        <p className="text-lg text-white/50">Nessun immobile trovato al momento.</p>
                        <p className="text-sm text-white/30 mt-2">Riprova più tardi o contattaci direttamente.</p>
                    </div>
                )}
            </div>
        </section >
    );
};
