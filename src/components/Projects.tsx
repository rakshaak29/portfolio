import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'SkillSwap',
      description: 'A full-stack skill-exchange platform where learners and teachers connect to swap skills. Features real-time chat, JWT auth, file uploads, and a collaborative learning dashboard.',
      tags: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Express'],
      gradient: 'from-purple-500 to-pink-500',
      image: '🔄',
      github: 'https://github.com/rakshaak29/SkillSwap',
      live: '',
    },
    {
      title: 'Study Hours Tracker',
      description: 'A Web3 dApp where users log study time immutably on the blockchain. Built with Next.js and MetaMask integration — data stored on-chain cannot be tampered.',
      tags: ['JavaScript', 'Next.js', 'Web3', 'MetaMask', 'Solidity'],
      gradient: 'from-blue-500 to-cyan-500',
      image: '📚',
      github: 'https://github.com/rakshaak29/studyhours',
      live: '',
    },
    {
      title: 'Kinetic Particles',
      description: 'An AI-powered interactive React app featuring real-time particle simulations driven by physics algorithms. Deployed on Vercel with smooth canvas animations.',
      tags: ['TypeScript', 'React', 'Canvas API', 'AI', 'Vercel'],
      gradient: 'from-green-500 to-emerald-500',
      image: '✨',
      github: 'https://github.com/rakshaak29/Kinetic-Particles',
      live: 'https://kinetic-particles-gamma.vercel.app',
    },
    {
      title: 'Wagtail CMS',
      description: 'Contributed to Wagtail, a Django-based CMS. Added features like advanced search, media uploads, and a custom Django content management system focused on flexibility.',
      tags: ['Python', 'Django', 'Wagtail', 'PostgreSQL', 'REST API'],
      gradient: 'from-orange-500 to-red-500',
      image: '🦜',
      github: 'https://github.com/rakshaak29/Wagatil-CMS',
      live: '',
    },
    {
      title: 'Veridict Dashboard',
      description: 'A Web3 + AI powered analytics dashboard for decentralized verdict tracking. Features real-time data visualization and blockchain-backed data integrity.',
      tags: ['React', 'Web3', 'AI', 'Netlify', 'JavaScript'],
      gradient: 'from-indigo-500 to-purple-500',
      image: '⚖️',
      github: 'https://github.com/rakshaak29',
      live: 'http://veridict.netlify.app/',
    },
    {
      title: 'Hospital Bed Tracker',
      description: 'Real-time hospital bed and medicine availability tracker built with JavaScript. Helps patients find available hospital resources quickly during emergencies.',
      tags: ['JavaScript', 'HTML', 'CSS', 'REST API', 'Geolocation'],
      gradient: 'from-cyan-500 to-blue-500',
      image: '🏥',
      github: 'https://github.com/rakshaak29/Hospital-Bed-and-Medicine-Availability-tracker',
      live: '',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/5 dark:to-blue-900/5" />
      
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
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700">
                {/* Project Image/Icon */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="text-8xl"
                  >
                    {project.image}
                  </motion.div>
                  
                    {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full text-slate-900 hover:bg-purple-500 hover:text-white transition-colors"
                    >
                      <FaGithub className="text-xl" />
                    </motion.a>
                    {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full text-slate-900 hover:bg-blue-500 hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  style={{ transform: 'skewX(-20deg)' }}
                />
              </div>

              {/* Glow effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.5 }}
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl -z-10`}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/rakshaak29"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(139, 92, 246, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            View All Projects
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
