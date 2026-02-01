import { Navbar } from "./components/Navbar";
import { ModernHero } from "./components/ModernHero";
import { BentoFeatures } from "./components/BentoFeatures";
import { PropertiesSection } from "./components/PropertiesSection";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";
import { AboutSection } from './components/AboutSection';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function App() {
  // const [category, setCategory] = useState<string | null>(null);
  // Just use null if setCategory is unused, or remove state if unused entirely?
  // PropertiesSection uses category.
  // PropertiesSection category={category}
  // So read is used, but write is not?
  // Let's keep category but ignore setCategory destructuring.
  // const [category, setCategory] = useState<string | null>(null);
  // Unused state removed


  // Smooth scroll to top on load
  useState(() => {
    window.scrollTo(0, 0);
  });

  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[var(--color-primary)] min-h-screen text-white selection:bg-[var(--color-accent)] selection:text-white"
      >
        <Navbar />

        <ModernHero />
        <AboutSection />
        <BentoFeatures />

        <div id="immobili-vendita">
          <PropertiesSection category="VENDITA" />
        </div>

        <div id="immobili-affitto">
          <PropertiesSection category="AFFITTO" />
        </div>

        <div id="richiedi-appuntamento">
          <ContactCTA />
        </div>

        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}

export default App;
