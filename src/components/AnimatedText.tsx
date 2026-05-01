import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'letter' | 'word';
}

const AnimatedText = ({ text, className = '', delay = 0, type = 'fade' }: AnimatedTextProps) => {
  const words = text.split(' ');
  const letters = text.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: type === 'letter' ? 0.03 : type === 'word' ? 0.1 : 0,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.8 } },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    },
    slideDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    },
  };

  if (type === 'letter') {
    return (
      <motion.span
        className={className}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={itemVariants.slideUp}
            className="inline-block"
            style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  if (type === 'word') {
    return (
      <motion.span
        className={className}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={itemVariants.slideUp} className="inline-block mr-2">
            {word}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: itemVariants[type].hidden,
        visible: { ...itemVariants[type].visible, transition: { ...itemVariants[type].visible.transition, delay } },
      }}
    >
      {text}
    </motion.span>
  );
};

// Gradient animated text component
export const GradientText = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return (
    <motion.span
      className={`bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] ${className}`}
      animate={{
        backgroundPosition: ['0% center', '200% center', '0% center'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.span>
  );
};

// Glitch text effect
export const GlitchText = ({ text, className = '' }: { text: string; className?: string }) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileHover={{
        textShadow: [
          '0 0 0 transparent',
          '2px 2px 0 #8b5cf6, -2px -2px 0 #3b82f6',
          '0 0 0 transparent',
        ],
      }}
      transition={{ duration: 0.3 }}
    >
      {text}
    </motion.span>
  );
};

export default AnimatedText;