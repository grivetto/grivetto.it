import { Facebook, Instagram, MapPin } from 'lucide-react';
import signatureImg from '../assets/signature.png';

export const Footer = () => {
    return (
        <footer id="dove-siamo" className="bg-[var(--color-primary)] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">

                    {/* Column 1: About */}
                    <div>
                        <h3 className="font-display text-lg tracking-wider mb-6 text-white">
                            MARCO <span className="text-[var(--color-accent)]">GRIVETTO</span>
                        </h3>
                        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-8 max-w-xs">
                            Eccellenza nel settore immobiliare. Selezioniamo solo le migliori proprietà per una clientela esigente.
                        </p>
                        <a href="https://www.facebook.com/agenziaroyalteam/" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-[var(--color-accent)] text-white transition-all duration-300">
                            <Facebook size={18} />
                        </a>
                        <a href="https://www.instagram.com/royalteamimmobiliare/" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-[var(--color-accent)] text-white transition-all duration-300">
                            <Instagram size={18} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCIunElMzPWHTkaU5-9dMj7Q" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-[var(--color-accent)] text-white transition-all duration-300">
                            {/* YouTube Logo */}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                    </div>

                    {/* Column 2: Locations */}
                    <div>
                        <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-white/40 mb-8">
                            Uffici
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white font-medium mb-1">Asti</h4>
                                <p className="text-[var(--color-text-muted)] text-sm mb-3">Via Brofferio 109<br />14100 Asti AT</p>
                                <div className="flex flex-col gap-2">
                                    <a
                                        href="https://maps.app.goo.gl/JjtByd9Peeivg1FY7?g_st=aw"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] hover:text-white transition-colors group"
                                    >
                                        <MapPin size={14} className="group-hover:animate-bounce" />
                                        Vedi posizione
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-white font-medium mb-1">Torino</h4>
                                <p className="text-[var(--color-text-muted)] text-sm mb-3">
                                    C.so Casale 319 - 10132 TO<br />
                                    Via Luigi Cibrario 30 - 10143 TO
                                </p>
                                <div>
                                    <a
                                        href="https://maps.app.goo.gl/pgQFZy5cW2Hvg7cP9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] hover:text-white transition-colors group"
                                    >
                                        <MapPin size={14} className="group-hover:animate-bounce" />
                                        Vedi posizione
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-white/40 mb-8">
                            Contatti
                        </h3>
                        <div className="space-y-4">
                            <a href="tel:3470034777" className="block text-2xl font-display text-white hover:text-[var(--color-accent)] transition-colors">
                                347.0034777
                            </a>
                            <a href="mailto:marco@royalteam-immobiliare.it" className="block text-[var(--color-text-muted)] hover:text-white transition-colors">
                                marco@royalteam-immobiliare.it
                            </a>
                            <p className="text-xs text-white/30 pt-4">
                                P.IVA 10140700013
                            </p>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/20 text-xs">
                        © 2026 Marco Grivetto. Tutti i diritti riservati.
                    </p>

                    {/* Signature Image */}
                    <div className="flex-shrink-0">
                        <img src={signatureImg} alt="Marco Grivetto Signature" className="h-16 w-auto opacity-80" />
                    </div>
                </div>
            </div>
        </footer>
    );
};
