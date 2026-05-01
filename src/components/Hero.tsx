import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import AnimatedText, { GradientText } from './AnimatedText';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-12 flex flex-col overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-blue-900/20"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col flex-1">
        
        {/* Top Left Text - Standard document flow prevents overlap */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left w-full mt-4 md:mt-8 z-30"
        >
          <p className="text-xl md:text-3xl font-medium text-slate-600 dark:text-slate-400 mb-2">
            👋 Hi, I am
          </p>
          <h1 className="text-6xl sm:text-7xl md:text-[5rem] lg:text-[7rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Raksha A K
          </h1>
        </motion.div>

        {/* Centered Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col items-center justify-center text-center mt-12 md:mt-16"
        >
          {/* Profile Image with Animation (Enlarged and Centered) */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center w-full"
          >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 blur-xl opacity-75"
            />
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl overflow-hidden border-[6px] border-white dark:border-slate-800">
              <img src="/images/hero-avatar.jpg" alt="Raksha AK" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </motion.div>

        {/* Typing Animation */}
        <motion.div variants={itemVariants} className="mb-8 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-700 dark:text-slate-300">
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'Open Source Contributor',
              2000,
              'B.Tech CSE (AI/ML)',
              2000,
              'Web3 & Blockchain Dev',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto"
        >
          B.Tech CSE (AI/ML) student from Bengaluru, building at the intersection of Web3 + AI.
          Open source contributor & passionate about scalable systems. Let's build something amazing! 🚀
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(139, 92, 246, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 rounded-full font-semibold shadow-lg border-2 border-purple-600 dark:border-purple-400 hover:bg-purple-50 dark:hover:bg-slate-700 transition-all"
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          {[
            { Icon: FaGithub, href: 'https://github.com/rakshaak29', color: 'hover:text-gray-800 dark:hover:text-gray-200' },
            { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/raksha-ak-73622a3b4/', color: 'hover:text-blue-600' },
            { Icon: FaTwitter, href: 'https://github.com/rakshaak29', color: 'hover:text-blue-400' },
            { Icon: FaEnvelope, href: 'mailto:rakshaak29@gmail.com', color: 'hover:text-red-500' },
          ].map(({ Icon, href, color }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`text-3xl text-slate-600 dark:text-slate-400 ${color} transition-colors`}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2,
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1.5 h-3 bg-purple-600 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
};

export default Hero;
