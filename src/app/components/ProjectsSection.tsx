import { motion } from 'motion/react';
import { Github, CheckCircle2, Rocket, Users, TrendingUp, MapPin, Calendar, Brain } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Udaan',
      subtitle: 'Unified Founder Workspace Platform',
      description: 'A comprehensive digital platform empowering early-stage founders to manage execution, validate ideas, collaborate with teams, and gain actionable insights.',
      problem: 'Founders struggle with fragmented tools for managing tasks, team collaboration, and investor readiness.',
      solution: 'Unified platform combining execution management, idea validation, team collaboration, and analytics in one ecosystem.',
      features: [
        'Execution Management with tasks & milestones',
        'Structured idea validation framework',
        'Team collaboration with role-based access',
        'Data-driven analytics dashboard',
        'Investor readiness tools',
        'Web + Mobile ecosystem',
      ],
      techStack: {
        web: ['React.js 18', 'Tailwind CSS', 'Recharts', 'Node.js', 'Express.js', 'Firebase'],
        mobile: ['React Native (Expo)', 'React Navigation', 'AsyncStorage', 'Axios JWT APIs'],
      },
      gradient: 'from-yellow-400/20 via-yellow-600/10 to-yellow-800/5',
      border: 'border-yellow-400/30',
      icon: Rocket,
      iconBg: 'bg-yellow-400/20',
      iconColor: 'text-yellow-400',
      github: 'https://github.com/Rajathraj12/Udaan',
    },
    {
      title: 'Parivartan',
      subtitle: 'Civic Issue Management System',
      description: 'A civic-tech platform enabling citizens to report, track, and resolve community issues with real-time updates and location-based services.',
      problem: 'Citizens lack efficient channels to report civic issues and track their resolution status.',
      solution: 'Interactive platform with Google Maps integration for precise issue location and real-time status tracking.',
      features: [
        'Interactive Google Maps issue reporting',
        'Real-time status tracking & updates',
        'Category-based issue classification',
        'Government dashboard for resolution',
        'Community engagement features',
        'Analytics & reporting tools',
      ],
      techStack: {
        web: ['ReactJS', 'TailwindCSS', 'Node.js', 'Firebase', 'Google Maps API'],
        mobile: [],
      },
      gradient: 'from-purple-400/20 via-purple-600/10 to-purple-800/5',
      border: 'border-purple-400/30',
      icon: MapPin,
      iconBg: 'bg-purple-400/20',
      iconColor: 'text-purple-400',
      github: 'https://github.com/Rajathraj12/Parivartan',
    },
    {
      title: 'AI Smart Timetable Generator',
      subtitle: 'Intelligent Scheduling & Automation',
      description: 'AI-powered timetable generation system that automatically creates optimized schedules based on constraints, preferences, and availability.',
      problem: 'Manual timetable creation is time-consuming and often results in conflicts and inefficiencies.',
      solution: 'AI algorithm that analyzes constraints and generates conflict-free, optimized schedules with calendar integration.',
      features: [
        'AI-powered conflict detection',
        'Constraint-based optimization',
        'Google Calendar API integration',
        'Preference-based scheduling',
        'Automatic updates & notifications',
        'Multi-user support',
      ],
      techStack: {
        web: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Google Calendar API'],
        mobile: [],
      },
      gradient: 'from-blue-400/20 via-blue-600/10 to-blue-800/5',
      border: 'border-blue-400/30',
      icon: Brain,
      iconBg: 'bg-blue-400/20',
      iconColor: 'text-blue-400',
      github: 'https://github.com/Rajathraj12/Plan-PIlot-Smart-time-table-generator',
    },
  ];

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 6, repeat: Infinity }}
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
              Featured Projects
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Product <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Showcase</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            SaaS products and platforms built to solve real-world problems with cutting-edge technology
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative rounded-3xl bg-gradient-to-br ${project.gradient} backdrop-blur-xl border ${project.border} overflow-hidden group`}
                style={{
                  boxShadow: '0 0 80px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Main Info */}
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 rounded-2xl ${project.iconBg} flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-8 h-8 ${project.iconColor}`} />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                          <p className={`text-lg ${project.iconColor} font-medium`}>{project.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed">
                        {project.description}
                      </p>

                      {/* Problem → Solution */}
                      <div className="space-y-4">
                        <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4">
                          <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Problem
                          </h4>
                          <p className="text-gray-400 text-sm">{project.problem}</p>
                        </div>
                        <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-4">
                          <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" />
                            Solution
                          </h4>
                          <p className="text-gray-400 text-sm">{project.solution}</p>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-wrap gap-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-colors flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </motion.a>
                      </div>
                    </div>

                    {/* Right Column - Features & Tech */}
                    <div className="space-y-6">
                      {/* Features */}
                      <div>
                        <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                          <CheckCircle2 className={`w-5 h-5 ${project.iconColor}`} />
                          Key Features
                        </h4>
                        <div className="grid gap-2">
                          {project.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-2 text-gray-400 text-sm"
                            >
                              <CheckCircle2 className={`w-4 h-4 ${project.iconColor} flex-shrink-0 mt-0.5`} />
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-white font-bold text-lg mb-4">Tech Stack</h4>
                        <div className="space-y-4">
                          {project.techStack.web.length > 0 && (
                            <div>
                              <p className="text-sm text-gray-500 mb-2 font-semibold">Web Platform</p>
                              <div className="flex flex-wrap gap-2">
                                {project.techStack.web.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-xs font-medium"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          {project.techStack.mobile.length > 0 && (
                            <div>
                              <p className="text-sm text-gray-500 mb-2 font-semibold">Mobile Platform</p>
                              <div className="flex flex-wrap gap-2">
                                {project.techStack.mobile.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-xs font-medium"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
