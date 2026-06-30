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
                <a href="#" className="flex items-center gap-4 group">
                    <img
                        src="https://media.gestionaleimmobiliare.it/files/dynaweb_2_0/1617/logo/Logo_RoyalTeam__1_.png"
                        alt="Royal Team Logo"
                        className="h-12 w-auto brightness-110 group-hover:scale-105 transition-transform"
                    />
                    <div className="text-4xl font-[var(--font-script)] text-white/90 hover:text-white transition-colors">
                        Marco <span className="text-accent">Grivetto</span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {['Home', 'Richiedi Appuntamento', 'Esclusiva Selezione', 'Recensioni', 'Dove Siamo'].map((item) => {
                        let href = "#";
                        let target = "_self";

                        if (item === 'Richiedi Appuntamento') href = "#richiedi-appuntamento";
                        if (item === 'Esclusiva Selezione') href = "https://www.royalteam-immobiliare.it/it/immobili-in-vendita";
                        if (item === 'Recensioni') {
                            href = "https://www.google.com/search?q=Royal+Team+Immobiliare+Asti+Recensioni";
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
if (item === 'Esclusiva Selezione') href = "https://www.royalteam-immobiliare.it/it/immobili-in-vendita";
                                if (item === 'Recensioni') {
                                    href = "https://www.google.com/search?q=Royal+Team+Immobiliare+Asti+Recensioni";
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
