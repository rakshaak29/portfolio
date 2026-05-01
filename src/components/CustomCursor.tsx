import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<'default' | 'text' | 'button'>('default');
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        setIsHovering(true);
        setCursorVariant('button');
      } else if (target.tagName === 'A' || target.closest('a')) {
        setIsHovering(true);
        setCursorVariant('button');
      } else if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'P' ||
        target.tagName === 'H1' ||
        target.tagName === 'H2' ||
        target.tagName === 'H3' ||
        target.tagName === 'H4' ||
        target.tagName === 'SPAN'
      ) {
        setIsHovering(true);
        setCursorVariant('text');
      } else {
        setIsHovering(false);
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: 'rgba(139, 92, 246, 0.5)',
      border: '2px solid rgba(139, 92, 246, 1)',
    },
    text: {
      width: 64,
      height: 64,
      backgroundColor: 'rgba(96, 165, 250, 0.3)',
      border: '2px solid rgba(96, 165, 250, 1)',
    },
    button: {
      width: 64,
      height: 64,
      backgroundColor: 'rgba(236, 72, 153, 0.3)',
      border: '3px solid rgba(236, 72, 153, 1)',
    },
  };

  return (
    <>
      {/* Main animated cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={cursorVariant}
          variants={variants}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
          className="rounded-full"
          style={{
            scale: isClicking ? 0.8 : 1,
          }}
        />
      </motion.div>

      {/* Trailing dots */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-2 h-2 bg-purple-400 rounded-full pointer-events-none z-[9998] hidden md:block mix-blend-difference"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          animate={{
            scale: [1, 0.5, 1],
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 80 : 50,
            height: isHovering ? 80 : 50,
            opacity: isHovering ? 0.4 : 0.2,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="rounded-full border border-purple-400 blur-sm"
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
