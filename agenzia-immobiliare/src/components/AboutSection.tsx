import { motion } from 'framer-motion';
import signatureImg from '../assets/signature.png';

export const AboutSection = () => {
    return (
        <section id="chi-sono" className="py-24 bg-[var(--color-surface)] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-8"
                    >
                        <div className="inline-block px-4 py-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 backdrop-blur-sm">
                            <span className="text-[var(--color-accent)] text-sm font-medium tracking-wider uppercase">
                                Chi Sono
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-display text-white leading-tight">
                            Quasi 20 anni di <br />
                            <span className="text-[var(--color-accent)]">Eccellenza Immobiliare</span>
                        </h2>

                        <div className="space-y-6 text-[var(--color-text-muted)] text-lg leading-relaxed">
                            <p>
                                Benvenuti. Sono <strong className="text-white">Marco Grivetto</strong>, fondatore di <em>Royal Team Immobiliare</em>.
                                Da quasi vent'anni, opero con passione e dedizione nel mercato immobiliare di <strong className="text-white">Torino</strong> e <strong className="text-white">Asti</strong>.
                            </p>
                            <p>
                                La mia filosofia è semplice: offrire un servizio sartoriale, basato su trasparenza, competenza e una profonda conoscenza del territorio.
                                Non mi limito a vendere immobili; accompagno i miei clienti nella realizzazione dei loro progetti di vita, selezionando solo proprietà che rispondano ai più alti standard di qualità e pregio.
                            </p>
                            <p>
                                Che si tratti di una villa storica nel Monferrato o di un attico nel centro di Torino, la mia esperienza è al vostro servizio per garantire trattative riservate e risultati concreti.
                            </p>
                        </div>

                        <div className="pt-6">
                            <img src={signatureImg} alt="Firma Marco Grivetto" className="h-20 w-auto opacity-80 invert" />
                            <p className="text-sm text-white/40 mt-2 tracking-widest uppercase">Marco Grivetto</p>
                        </div>
                    </motion.div>

                    {/* Right: Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10 shadow-[var(--shadow-glow)]">
                            {/* Placeholder for professional photo - using abstract/interior for now or a reliable placeholder */}
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Marco Grivetto - Agente Immobiliare"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 to-transparent"></div>

                            {/* Stats Overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-8 grid grid-cols-2 gap-4 border-t border-white/10 bg-black/20 backdrop-blur-md">
                                <div>
                                    <p className="text-3xl font-display text-white">20</p>
                                    <p className="text-xs text-[var(--color-accent)] uppercase tracking-wider">Anni di Esperienza</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-display text-white">500+</p>
                                    <p className="text-xs text-[var(--color-accent)] uppercase tracking-wider">Immobili venduti</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
