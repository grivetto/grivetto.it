import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[var(--color-primary)]/80 backdrop-blur-md py-4 shadow-[var(--shadow-elevation)] border-b border-white/5' : 'bg-transparent py-8'
            }`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-2xl font-display font-light text-white tracking-wider">
                    MARCO <span className="font-semibold text-accent">GRIVETTO</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {['Home', 'Richiedi Appuntamento', 'Esclusiva Selezione', 'Recensioni', 'Dove Siamo'].map((item) => {
                        let href = "#";
                        let target = "_self";

                        if (item === 'Richiedi Appuntamento') href = "#richiedi-appuntamento";
                        if (item === 'Esclusiva Selezione') href = "#immobili";
                        if (item === 'Recensioni') {
                            href = "https://www.google.com/search?sca_esv=37b29cacd6547f1e&rlz=1C1FKPE_enIT1177IT1177&sxsrf=ANbL-n69wZf_yhNyvsvWwq82kt_EZL3TIw:1769880203587&q=search+rewiew+for+royalteam+immobilare+asti&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qObQmHPoXqK-3EdcjlXNCOjck7JRyYVLzCjCmaUY74I3M4p5mo8t2dVIFHOfYL2PS2SGOs8M%3D&uds=ALYpb_nyEaCYADf75iw0qqWiiEWFNfjR1x8-erjX5Hb49Cw5lqt99B6UryNyHLMy5E0YVHE0jiOMZ_NVart9oSiYqmGPjgzFUjf2KkZtFNZPtM82nGpSdip8kEg5NZ-KA5K2JMFRJhuF1LWFhEERaZwTT1woiSnzsQ&sa=X&ved=2ahUKEwjRuNHGpbaSAxX_Rf4FHXbWIRoQ3PALegQIORAF&biw=1920&bih=1031&aic=0";
                            target = "_blank";
                        }
                        if (item === 'Dove Siamo') href = "#dove-siamo";

                        return (
                            <a
                                key={item}
                                href={href}
                                target={target}
                                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                                className="text-sm font-medium text-white/90 hover:text-accent transition-all hover:-translate-y-0.5 uppercase tracking-widest"
                            >
                                {item}
                            </a>
                        );
                    })}
                    <a href="#richiedi-appuntamento" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-2 rounded-full transition-all text-sm uppercase tracking-wider backdrop-blur-sm cursor-pointer">
                        Contatti
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white cursor-pointer">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-primary shadow-xl overflow-hidden border-t border-white/10"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {['Home', 'Richiedi Appuntamento', 'Esclusiva Selezione', 'Recensioni', 'Dove Siamo', 'Contatti'].map((item) => {
                                let href = "#";
                                let target = "_self";

                                if (item === 'Richiedi Appuntamento' || item === 'Contatti') href = "#richiedi-appuntamento";
                                if (item === 'Esclusiva Selezione') href = "#immobili";
                                if (item === 'Recensioni') {
                                    href = "https://www.google.com/search?sca_esv=37b29cacd6547f1e&rlz=1C1FKPE_enIT1177IT1177&sxsrf=ANbL-n69wZf_yhNyvsvWwq82kt_EZL3TIw:1769880203587&q=search+rewiew+for+royalteam+immobilare+asti&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qObQmHPoXqK-3EdcjlXNCOjck7JRyYVLzCjCmaUY74I3M4p5mo8t2dVIFHOfYL2PS2SGOs8M%3D&uds=ALYpb_nyEaCYADf75iw0qqWiiEWFNfjR1x8-erjX5Hb49Cw5lqt99B6UryNyHLMy5E0YVHE0jiOMZ_NVart9oSiYqmGPjgzFUjf2KkZtFNZPtM82nGpSdip8kEg5NZ-KA5K2JMFRJhuF1LWFhEERaZwTT1woiSnzsQ&sa=X&ved=2ahUKEwjRuNHGpbaSAxX_Rf4FHXbWIRoQ3PALegQIORAF&biw=1920&bih=1031&aic=0";
                                    target = "_blank";
                                }
                                if (item === 'Dove Siamo') href = "#dove-siamo";

                                return (
                                    <a
                                        key={item}
                                        href={href}
                                        target={target}
                                        rel={target === "_blank" ? "noopener noreferrer" : undefined}
                                        onClick={() => setIsOpen(false)}
                                        className="text-white/80 hover:text-accent text-lg font-light"
                                    >
                                        {item}
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
