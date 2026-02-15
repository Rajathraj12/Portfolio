import { motion } from 'motion/react';
import { Code, Database, Palette, Wrench } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'yellow',
      skills: ['ReactJS', 'Next.js', 'TailwindCSS', 'HTML/CSS', 'TypeScript', 'JavaScript'],
    },
    {
      title: 'Backend & Database',
      icon: Database,
      color: 'purple',
      skills: ['Node.js', 'Express.js', 'MySQL', 'Firebase', 'MongoDB'],
    },
    {
      title: 'Languages',
      icon: Code,
      color: 'blue',
      skills: ['JavaScript', 'TypeScript', 'Python', 'C/C++', 'PHP'],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'yellow',
      skills: ['Git/GitHub', 'Figma', 'AWS S3', 'Vercel', 'React Native'],
    },
  ];

  const colorClasses = {
    yellow: {
      gradient: 'from-yellow-400/20 via-yellow-600/10 to-yellow-800/5',
      border: 'border-yellow-400/30',
      icon: 'bg-yellow-400/20 text-yellow-400',
      badge: 'bg-yellow-400/10 border-yellow-400/20 text-yellow-400 hover:bg-yellow-400/20',
      glow: 'group-hover:shadow-[0_0_30px_rgba(250,204,21,0.1)]',
    },
    purple: {
      gradient: 'from-purple-400/20 via-purple-600/10 to-purple-800/5',
      border: 'border-purple-400/30',
      icon: 'bg-purple-400/20 text-purple-400',
      badge: 'bg-purple-400/10 border-purple-400/20 text-purple-400 hover:bg-purple-400/20',
      glow: 'group-hover:shadow-[0_0_30px_rgba(192,132,252,0.1)]',
    },
    blue: {
      gradient: 'from-blue-400/20 via-blue-600/10 to-blue-800/5',
      border: 'border-blue-400/30',
      icon: 'bg-blue-400/20 text-blue-400',
      badge: 'bg-blue-400/10 border-blue-400/20 text-blue-400 hover:bg-blue-400/20',
      glow: 'group-hover:shadow-[0_0_30px_rgba(96,165,250,0.1)]',
    },
  };

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm font-medium">
              Tech Stack
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Skills & <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Cutting-edge technologies and tools that power modern web applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className={`relative rounded-2xl bg-gradient-to-br ${colors.gradient} backdrop-blur-xl border ${colors.border} p-6 group hover:scale-[1.02] transition-all duration-300 ${colors.glow}`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg ${colors.icon} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all cursor-default ${colors.badge}`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold text-white text-center mb-6">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'React Router',
              'Redux',
              'REST APIs',
              'GraphQL',
              'Jest',
              'Git',
              'Docker',
              'CI/CD',
              'Responsive Design',
              'UI/UX Design',
              'Agile',
              'Scrum',
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm text-gray-300 text-sm font-medium hover:bg-yellow-400/10 hover:border-yellow-400/30 hover:text-yellow-400 transition-all cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}