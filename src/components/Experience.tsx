import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      year: '2026 · Active',
      role: 'Open Source Contributor',
      company: 'Hyperledger Besu',
      description: 'Contributed performance improvements to the enterprise-grade Java Ethereum client. Fixed eager string concatenation in SLF4J logging statements and replaced shared Random with ThreadLocalRandom for better concurrency performance.',
      skills: ['Java', 'Ethereum', 'Blockchain', 'Performance', 'Open Source'],
    },
    {
      year: '2026 · Active',
      role: 'Open Source Contributor',
      company: 'sktime (ML Library)',
      description: 'Hardened the sktime time-series ML library by eliminating silent exception-handling bugs, fixing instantiated-but-unraised exceptions, and modernizing deprecated pandas API usages across forecasting pipelines.',
      skills: ['Python', 'Machine Learning', 'Time Series', 'AST Analysis', 'Bug Fixing'],
    },
    {
      year: '2026 · Active',
      role: 'Open Source Contributor',
      company: 'OpenKruise (CNCF)',
      description: 'Resolved security issue #2419 in the OpenKruise webhook system. Tightened file and directory permissions for webhook certificates — replacing overly permissive os.MkdirAll calls with secure 0700/0600 modes.',
      skills: ['Go', 'Kubernetes', 'CNCF', 'Security', 'Webhooks'],
    },
    {
      year: '2026 · Active',
      role: 'Open Source Contributor',
      company: 'Liquid Galaxy',
      description: 'Contributed to the Liquid Galaxy project, working on interactive panoramic visualization clusters. Enhanced dynamic configurations and data integration across multi-screen setups.',
      skills: ['Java', 'Bash', 'Android', 'Visualization', 'Google Earth'],
    },
    {
      year: '2025 - 2026',
      role: 'Open Source Contributor',
      company: 'Wagtail CMS & API Dash',
      description: 'Contributed to Wagtail (Django CMS) and API Dash (Flutter API client). Enhanced content management features, improved documentation, and added new schema spec contributions to the JSON Schema ecosystem.',
      skills: ['Python', 'Django', 'Flutter', 'Dart', 'Documentation'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-black dark:to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
            className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl"
            style={{
              top: `${20 + i * 30}%`,
              left: `${10 + i * 25}%`,
            }}
          />
        ))}
      </div>

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
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Open Source Contributions
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full md:w-5/12 mb-4 md:mb-0"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="mb-4"
                    >
                      <span className="inline-block px-4 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold">
                        {exp.year}
                      </span>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.role}
                    </h3>
                    
                    <h4 className="text-lg text-purple-400 mb-4">
                      {exp.company}
                    </h4>
                    
                    <p className="text-slate-400 mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Center circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.2,
                    type: 'spring',
                  }}
                  className="hidden md:flex w-2/12 justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.5, rotate: 180 }}
                    className="w-6 h-6 bg-purple-500 rounded-full border-4 border-slate-800 shadow-lg shadow-purple-500/50"
                  />
                </motion.div>

                {/* Spacer */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
