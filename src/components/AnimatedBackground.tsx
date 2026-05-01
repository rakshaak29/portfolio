import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const AnimatedBackground = () => {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Morphing blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1.5, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
          x: [0, 100, 0, -100, 0],
          y: [0, -100, 0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 dark:from-purple-600/20 dark:to-pink-600/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.5, 1, 1.2, 1, 1.5],
          rotate: [360, 270, 180, 90, 0],
          x: [0, -150, 0, 150, 0],
          y: [0, 150, 0, -150, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/30 to-cyan-500/30 dark:from-blue-600/20 dark:to-cyan-600/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1, 1.3, 1],
          rotate: [0, 180, 360, 180, 0],
          x: [0, 200, 0, -200, 0],
          y: [0, -50, 100, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/30 to-purple-500/30 dark:from-indigo-600/20 dark:to-purple-600/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.4, 1, 1.2],
          rotate: [0, -90, -180, -270, -360],
          x: [0, -100, 50, -100, 0],
          y: [0, 100, -100, 100, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-teal-500/30 to-green-500/30 dark:from-teal-600/20 dark:to-green-600/20 rounded-full blur-3xl"
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100 - i * 20, 0],
            x: [0, (i % 2 === 0 ? 1 : -1) * (50 + i * 10), 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
          className={`absolute w-2 h-2 rounded-full ${
            isDark ? 'bg-purple-400' : 'bg-purple-600'
          }`}
          style={{
            left: `${(i * 5) % 100}%`,
            top: `${(i * 7) % 100}%`,
          }}
        />
      ))}

      {/* Gradient orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 2,
          }}
          className="absolute rounded-full"
          style={{
            width: `${200 + i * 50}px`,
            height: `${200 + i * 50}px`,
            left: `${(i * 20) % 80}%`,
            top: `${(i * 15) % 80}%`,
            background: `radial-gradient(circle, ${
              ['rgba(139, 92, 246, 0.2)', 'rgba(59, 130, 246, 0.2)', 'rgba(236, 72, 153, 0.2)', 'rgba(34, 211, 238, 0.2)', 'rgba(168, 85, 247, 0.2)'][i]
            }, transparent)`,
          }}
        />
      ))}

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
          </linearGradient>
        </defs>
        {[...Array(10)].map((_, i) => (
          <motion.path
            key={`line-${i}`}
            d={`M ${i * 100} 0 Q ${i * 150} ${i * 80} ${i * 200} ${typeof window !== 'undefined' ? window.innerHeight : 1000}`}
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>

      {/* Mesh gradient overlay */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 20%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0"
      />

      {/* Additional floating circles - 30 */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`extra-circle-${i}`}
          animate={{
            y: [0, -150, 0],
            x: [0, Math.sin(i) * 80, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 12 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
          className="absolute rounded-full border"
          style={{
            width: `${20 + (i % 8) * 8}px`,
            height: `${20 + (i % 8) * 8}px`,
            left: `${(i * 7) % 95}%`,
            top: `${(i * 11) % 95}%`,
            borderColor: isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.3)',
          }}
        />
      ))}

      {/* Animated waves - 5 waves */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute h-1 w-full blur-sm"
          style={{
            top: `${20 + i * 20}%`,
            background: `linear-gradient(90deg, transparent, ${
              isDark ? 'rgba(139, 92, 246, 0.4)' : 'rgba(139, 92, 246, 0.5)'
            }, transparent)`,
          }}
        />
      ))}

      {/* Geometric shapes - 15 */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute"
          style={{
            width: `${30 + (i % 6) * 10}px`,
            height: `${30 + (i % 6) * 10}px`,
            left: `${(i * 13) % 90}%`,
            top: `${(i * 17) % 90}%`,
            background: i % 3 === 0 
              ? 'transparent' 
              : `linear-gradient(135deg, ${isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.2)'}, transparent)`,
            border: `1px solid ${isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.3)'}`,
            borderRadius: i % 2 === 0 ? '50%' : '10%',
          }}
        />
      ))}

      {/* Sparkles - 25 */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
          className="absolute"
          style={{
            width: '4px',
            height: '4px',
            left: `${(i * 9) % 100}%`,
            top: `${(i * 13) % 100}%`,
            background: isDark ? '#a78bfa' : '#8b5cf6',
            borderRadius: '50%',
            boxShadow: `0 0 10px ${isDark ? '#a78bfa' : '#8b5cf6'}`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;