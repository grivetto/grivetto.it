import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg.png";

export function ModernHero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)] to-transparent z-10" />
                <div className="absolute inset-0 bg-[var(--color-primary)] opacity-90 z-0" />
                <img
                    src={heroBg}
                    alt="Luxury Interior Design - Appartamento di Lusso a Torino"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="inline-block px-4 py-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 backdrop-blur-sm">
                        <span className="text-[var(--color-accent)] text-sm font-medium tracking-wider uppercase">
                            Immobili di Pregio
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl leading-tight text-white font-bold">
                        Scopri <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-accent)]">
                            l'Eccellenza
                        </span> <br />
                        dell'Abitare
                    </h1>

                    <p className="text-xl text-[var(--color-text-muted)] max-w-lg leading-relaxed">
                        Proprietà selezionate per una clientela esigente. Vivi il lusso moderno nelle zone più prestigiose di Torino.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#immobili-vendita"
                            className="px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-semibold rounded-none transition-all duration-300 shadow-[var(--shadow-glow)] hover:scale-105 cursor-pointer inline-block text-center"
                        >
                            Immobili in Vendita
                        </a>
                        <a
                            href="#immobili-affitto"
                            className="px-8 py-4 border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-semibold rounded-none transition-all duration-300 backdrop-blur-sm cursor-pointer inline-block text-center"
                        >
                            Immobili in Affitto
                        </a>
                    </div>
                </motion.div>

                {/* Right Content - Abstract 3D Element */}
                <div className="relative h-[600px] hidden lg:block perspective-1000">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        {/* Main Floating Card */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="relative w-96 h-[500px] z-20"
                        >
                            <a
                                href="https://www.royalteam-immobiliare.it/it/villa-vendita-cossombrato-4647138"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full h-full glass-panel rounded-2xl border border-white/10 shadow-[var(--shadow-glow)] overflow-hidden transition-transform hover:scale-[1.02]"
                            >
                                {/* Card Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src="https://images.gestionaleimmobiliare.it/foto/annunci/251019/4647138/600x600/000__drone-5.jpg"
                                        alt="Villa in vendita a Cossombrato"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Gradient Overlay for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/50 to-transparent opacity-90" />
                                </div>

                                <div className="absolute top-0 right-0 p-8 opacity-20 text-[var(--color-accent)] z-10">
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2L2 22h20L12 2zm0 3.8L18.4 20H5.6L12 5.8z" />
                                    </svg>
                                </div>

                                <div className="relative h-full flex flex-col justify-end p-6 z-10">
                                    <h3 className="text-3xl font-display text-white mb-2 leading-tight">Villa a Cossombrato</h3>
                                    <p className="text-[var(--color-accent)] mb-4">Asti, Italia</p>
                                    <div className="flex justify-between items-center text-sm text-gray-400 border-t border-white/10 pt-4">
                                        <div className="flex items-center gap-2">
                                            <span>355 m²</span>
                                        </div>
                                        <span className="text-white font-semibold text-lg">€ 370.000</span>
                                    </div>
                                </div>
                            </a>
                        </motion.div>

                        {/* Decorative Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                            className="absolute -top-10 -right-10 w-64 h-64 border border-[var(--color-accent)]/20 rounded-full z-10 pointer-events-none"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                            className="absolute -bottom-10 -left-10 w-80 h-80 border border-white/10 rounded-full z-10 pointer-events-none"
                        />

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, 30, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute top-20 -left-12 glass-panel p-4 rounded-xl z-30"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white">
                                    ✓
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Stato</p>
                                    <p className="text-white font-semibold">Verificato Premium</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
