import { motion } from "framer-motion";
import { Search, Home, MapPin, Key } from "lucide-react";

const features = [
    {
        title: "Portafoglio Esclusivo",
        description: "Accesso a proprietà fuori mercato e annunci premium non disponibili altrove.",
        icon: Home,
        colSpan: "lg:col-span-2",
        bg: "bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent"
    },
    {
        title: "Posizioni Strategiche",
        description: "Immobili nei quartieri più ambiti di Torino.",
        icon: MapPin,
        colSpan: "lg:col-span-1",
        bg: "bg-white/5"
    },
    {
        title: "Valutazione Intelligente",
        description: "Analisi basata sui dati per garantire il miglior valore di investimento.",
        icon: Search,
        colSpan: "lg:col-span-1",
        bg: "bg-white/5"
    },
    {
        title: "Servizio Chiavi in Mano",
        description: "Dalla trattativa alla consegna delle chiavi, curiamo ogni dettaglio.",
        icon: Key,
        colSpan: "lg:col-span-2",
        bg: "bg-gradient-to-tl from-[var(--color-accent)]/10 to-transparent"
    }
];

export function BentoFeatures() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center max-w-2xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ridefiniamo l'Immobiliare</h2>
                    <p className="text-[var(--color-text-muted)] text-lg">
                        Combiniamo l'esperienza tradizionale con la tecnologia moderna per offrire un'esperienza senza pari.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`${feature.colSpan} ${feature.bg} glass-panel rounded-3xl p-8 relative group overflow-hidden`}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                                <feature.icon className="w-24 h-24 text-[var(--color-accent)] opacity-10" />
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-between min-h-[200px]">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center mb-6 text-[var(--color-accent)]">
                                    <feature.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
