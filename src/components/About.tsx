import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaRocket, FaLightbulb } from 'react-icons/fa';
import AnimatedText from './AnimatedText';

const About = () => {
  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaPaintBrush,
      title: 'Creative Design',
      description: 'Crafting beautiful user interfaces',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaRocket,
      title: 'Fast Performance',
      description: 'Optimizing for speed and efficiency',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaLightbulb,
      title: 'Innovative Solutions',
      description: 'Solving complex problems creatively',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 shadow-2xl"
              >
                <div className="aspect-square bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center overflow-hidden">
                  <img src="/images/profile-avatar.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-60"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              <AnimatedText text="Passionate Developer & Open Source Contributor" type="word" />
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <AnimatedText 
                text="I'm Raksha AK, a B.Tech CSE (AI/ML) student from Bengaluru, building at the intersection of Web3, AI, and modern web development. I love turning complex challenges into elegant solutions." 
                type="fade" 
                delay={0.2}
              />
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <AnimatedText 
                text="I actively contribute to open-source projects (Hyperledger Besu, sktime, OpenKruise, Wagtail, API Dash) and build decentralized apps, AI-powered tools, and scalable full-stack systems." 
                type="fade" 
                delay={0.4}
              />
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Let's Work Together
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl" 
                style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
              />
              <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <feature.icon className="text-white text-xl" />
                </motion.div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
