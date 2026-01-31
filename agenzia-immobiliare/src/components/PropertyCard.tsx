import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface PropertyProps {
    image: string;
    title: string;
    location: string;
    price: string;
    gridClass?: string;
    delay?: number;
    link?: string;
    code?: string;
    area?: string;
}

export const PropertyCard = ({ image, title, location, price, gridClass = "", delay = 0, link, code, area }: PropertyProps) => {
    const handleClick = () => {
        if (link) {
            window.open(link, '_blank');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            className={`group relative overflow-hidden rounded-2xl ${gridClass} cursor-pointer glass-panel border-none`}
            onClick={handleClick}
        >
            {image ? (
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            ) : (
                <div className="h-full w-full flex items-center justify-center text-white/20 bg-[var(--color-surface)]">
                    No Image
                </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest block">{location}</span>
                    {code && <span className="text-white/60 text-xs font-mono bg-black/40 px-2 py-1 rounded backdrop-blur-sm border border-white/10">{code}</span>}
                </div>

                <div className="flex justify-between items-end">
                    <div className="flex-1 pr-4">
                        <h3 className="text-white font-display text-xl md:text-2xl mb-1 line-clamp-2">{title}</h3>
                        <div className="flex items-center gap-3 text-white/70 font-light text-sm">
                            <span>{price}</span>
                            {area && (
                                <>
                                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                                    <span>{area} m²</span>
                                </>
                            )}
                        </div>
                    </div>
                    <button className="bg-white/10 p-3 rounded-full text-white hover:bg-[var(--color-accent)] hover:text-white transition-all backdrop-blur-md shrink-0 border border-white/20 hover:border-[var(--color-accent)]">
                        <ArrowUpRight size={20} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};
