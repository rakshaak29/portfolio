import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative overflow-x-hidden">
        <CustomCursor />
        <AnimatedBackground />
        
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="relative"
              >
                <div className="h-32 w-32 rounded-full border-8 border-t-purple-500 border-r-blue-500 border-b-indigo-500 border-l-cyan-500 animate-spin" />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl"
                >
                  R
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar />
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
              </main>
              <footer className="bg-slate-900 dark:bg-black py-8 text-center text-slate-400 dark:text-slate-600">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  © 2025 | Built with ♥ and lots of coffee by <a href="https://github.com/rakshaak29" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-400">Raksha AK</a>
                </motion.p>
              </footer>
              <ScrollToTop />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}
