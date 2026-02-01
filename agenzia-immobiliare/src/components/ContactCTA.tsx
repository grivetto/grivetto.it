

export const ContactCTA = () => {
    return (
        <section id="richiedi-appuntamento" className="bg-[var(--color-accent)] py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">

                    <div className="flex-1">
                        <h2 className="font-display text-3xl md:text-5xl text-white font-bold leading-tight mb-4">
                            VUOI AFFITTARE O VENDERE <br /> UNA PROPRIETÀ?
                        </h2>
                        <p className="text-[var(--color-accent)] font-medium text-lg tracking-wide">
                            Benvenuto in casa <span className="font-bold">TUA</span>
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-2">
                            CHIAMACI OGGI
                        </p>
                        <a href="tel:3470034777" className="text-white font-display text-4xl font-bold hover:text-white/90 transition-colors">
                            347.0034777
                        </a>
                    </div>

                    <div>
                        <a
                            href="mailto:marco@grivetto.it"
                            className="inline-block bg-white text-[var(--color-accent)] px-8 py-4 font-bold uppercase tracking-widest hover:bg-black/20 hover:text-white transition-all duration-300 shadow-lg"
                        >
                            Contattaci
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};
