import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      company: 'SMG Electric Scooters',
      role: 'Engineering Intern',
      period: 'Dec 2025 - Jan 2026',
      description: 'Worked on product development and engineering solutions for electric scooter technology.',
      achievements: [
        'Contributed to product design improvements',
        'Analyzed performance metrics and optimization',
        'Collaborated with cross-functional teams',
      ],
      color: 'yellow',
    },
    {
      company: 'Edunet Foundation',
      role: 'Frontend Developer Intern',
      period: 'Aug 2025 - Sept 2025',
      description: 'Developed responsive web applications and educational platforms using modern frontend technologies.',
      achievements: [
        'Built interactive UI components with React',
        'Implemented responsive designs with Tailwind CSS',
        'Enhanced user experience across platforms',
      ],
      color: 'purple',
    },
  ];

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-50, 50, -50],
          }}
          transition={{ duration: 7, repeat: Infinity }}
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
              Experience
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Building expertise through real-world experience and impactful internships
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400/50 via-purple-400/50 to-blue-400/50" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const colorClasses = {
                yellow: {
                  gradient: 'from-yellow-400/20 via-yellow-600/10 to-yellow-800/5',
                  border: 'border-yellow-400/30',
                  glow: 'shadow-yellow-400/20',
                  icon: 'bg-yellow-400/20 text-yellow-400',
                },
                purple: {
                  gradient: 'from-purple-400/20 via-purple-600/10 to-purple-800/5',
                  border: 'border-purple-400/30',
                  glow: 'shadow-purple-400/20',
                  icon: 'bg-purple-400/20 text-purple-400',
                },
              };
              const colors = colorClasses[exp.color as keyof typeof colorClasses];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`lg:grid lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                >
                  {/* Content Card */}
                  <div className={`${isEven ? 'lg:text-right' : 'lg:col-start-2'}`}>
                    <div
                      className={`relative rounded-2xl bg-gradient-to-br ${colors.gradient} backdrop-blur-xl border ${colors.border} p-8 shadow-2xl ${colors.glow} group hover:scale-105 transition-transform duration-300`}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="relative z-10">
                        <div className={`flex items-center gap-3 mb-4 ${isEven ? 'lg:justify-end' : ''}`}>
                          <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center`}>
                            <Briefcase className="w-6 h-6" />
                          </div>
                          <div className={isEven ? 'lg:text-right' : ''}>
                            <h3 className="text-white font-bold text-xl">{exp.company}</h3>
                            <p className="text-gray-400 text-sm">{exp.role}</p>
                          </div>
                        </div>

                        <div className={`flex items-center gap-2 mb-4 text-sm ${colors.icon.split(' ')[1]} ${isEven ? 'lg:justify-end' : ''}`}>
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>

                        <p className="text-gray-300 mb-4">{exp.description}</p>

                        <div className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <div
                              key={idx}
                              className={`flex items-start gap-2 text-gray-400 text-sm ${isEven ? 'lg:justify-end' : ''}`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${colors.icon.split(' ')[0]} mt-1.5 flex-shrink-0 ${isEven ? 'lg:order-2' : ''}`} />
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <motion.div
                      className={`w-6 h-6 rounded-full border-4 border-black ${colors.icon.split(' ')[0]}`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                    />
                    <motion.div
                      className={`absolute w-12 h-12 rounded-full ${colors.icon.split(' ')[0]} opacity-20 blur-xl`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className={`hidden lg:block ${isEven ? 'lg:col-start-2' : ''}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
