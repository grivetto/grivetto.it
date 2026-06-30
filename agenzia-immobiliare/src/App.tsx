import { Navbar } from "./components/Navbar";
import { ModernHero } from "./components/ModernHero";
import { BentoFeatures } from "./components/BentoFeatures";
import { PropertiesSection } from "./components/PropertiesSection";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";
import { AboutSection } from './components/AboutSection';
import { motion, AnimatePresence } from "framer-motion";

function App() {
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

        <div>
          <PropertiesSection category="VENDITA" />
        </div>

        <div>
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
