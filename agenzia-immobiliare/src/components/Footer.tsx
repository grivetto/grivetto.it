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
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/agenziaroyalteam/" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-[var(--color-accent)] text-white transition-all duration-300">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.instagram.com/royalteamimmobiliare/" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-[var(--color-accent)] text-white transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="https://x.com/royalteamimmobiliare" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-[var(--color-accent)] text-white transition-all duration-300">
                                {/* X Logo */}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zl-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="https://wa.me/393470034777" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-[var(--color-accent)] text-white transition-all duration-300">
                                {/* WhatsApp Logo */}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.214 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                        </div>
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
