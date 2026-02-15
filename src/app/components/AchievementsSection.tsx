import { motion } from 'motion/react';
import { Trophy, Award, Medal, Sparkles } from 'lucide-react';

export function AchievementsSection() {
  const achievements = [
    {
      title: 'Zinnovatio 3.0',
      status: 'Winner',
      description: 'Winner in innovation hackathon',
      year: '2024',
      icon: Trophy,
      gradient: 'from-yellow-400 via-yellow-500 to-yellow-600',
      borderGlow: 'shadow-[0_0_60px_rgba(250,204,21,0.4)]',
    },
    {
      title: 'Cipherthon 2.0',
      status: 'Finalist',
      description: 'Top finalist in coding hackathon',
      year: '2024',
      icon: Award,
      gradient: 'from-purple-400 via-purple-500 to-purple-600',
      borderGlow: 'shadow-[0_0_60px_rgba(168,85,247,0.3)]',
    },
    {
      title: 'Byte Bash',
      status: 'Finalist',
      description: 'Finalist in competitive coding hackathon',
      year: '2024',
      icon: Medal,
      gradient: 'from-blue-400 via-blue-500 to-blue-600',
      borderGlow: 'shadow-[0_0_60px_rgba(59,130,246,0.3)]',
    },
  ];

  return (
    <section id="achievements" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 8, repeat: Infinity }}
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
            <span className="px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm font-medium flex items-center gap-2 mx-auto w-fit">
              <Sparkles className="w-4 h-4" />
              Achievements
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Hackathon <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Victories</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Recognized for innovation, problem-solving, and technical excellence in competitive environments
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -15, rotateY: 5, scale: 1.05 }}
                className="relative group perspective-1000"
              >
                {/* Badge Card */}
                <div
                  className={`relative rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden ${achievement.borderGlow}`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Animated Gradient Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-10`}
                    animate={{
                      opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      transform: 'translateZ(20px)',
                    }}
                  />

                  <div className="relative z-10 p-8 flex flex-col items-center text-center">
                    {/* Icon Badge */}
                    <motion.div
                      className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center mb-6 shadow-2xl`}
                      animate={{
                        rotateY: [0, 10, -10, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Icon className="w-12 h-12 text-white" />

                      {/* Glow rings */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl border-2 border-white/30`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.gradient} blur-xl opacity-50`}
                        animate={{
                          scale: [1, 1.3, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    {/* Status Badge */}
                    <motion.div
                      className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${achievement.gradient} mb-4`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-white font-bold text-sm uppercase tracking-wider">
                        {achievement.status}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {achievement.title}
                    </h3>

                    {/* Year */}
                    <div className="text-sm text-gray-400 mb-4 font-mono">
                      {achievement.year}
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-2xl" />
                    <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full bg-gradient-to-tl from-white/5 to-transparent blur-2xl" />
                  </div>
                </div>

                {/* Floating particles */}
                <motion.div
                  className={`absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-br ${achievement.gradient}`}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className={`absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-br ${achievement.gradient}`}
                  animate={{
                    y: [10, -10, 10],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
