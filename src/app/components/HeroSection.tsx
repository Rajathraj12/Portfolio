import { motion } from 'motion/react';
import { Sparkles, Download, FolderOpen, Github, Linkedin, Mail } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Floating Grid Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(250, 204, 21, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(250, 204, 21, 0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 backdrop-blur-sm mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 text-sm font-medium">Available for Projects</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                  Rajathkumar
                </span>
                <br />
                <span className="text-white">R K</span>
              </h1>

              <p className="text-base sm:text-xl lg:text-2xl text-gray-300 mb-6">
                <span className="text-yellow-400">AI Builder</span> •
                <span className="text-purple-400"> Frontend Engineer</span> •
                <span className="text-blue-400"> Hackathon Winner</span>
              </p>

              <p className="text-gray-400 text-sm sm:text-lg mb-8 max-w-xl">
                Building futuristic AI tools, web apps, and startup products that solve real-world problems.
                BTech CSE student with a passion for innovation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="#projects"
                  className="px-4 sm:px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl font-semibold text-xs sm:text-sm text-black flex items-center gap-2 group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <FolderOpen className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">View Projects</span>
                </motion.a>

                <motion.a
                  href="#contact"
                  className="px-4 sm:px-6 py-3 bg-white/5 backdrop-blur-sm border border-yellow-400/30 rounded-xl font-semibold text-xs sm:text-sm text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Mail className="w-4 h-4" />
                  Contact
                </motion.a>

                <motion.a
                  href="/resume.pdf"
                  download
                  className="px-4 sm:px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-400/30 rounded-xl font-semibold text-xs sm:text-sm text-white hover:bg-purple-600/30 transition-colors flex items-center gap-2 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4 mt-8">
                <motion.a
                  href="https://github.com/Rajathraj12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all group"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/rajathraj12/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all group"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
                <motion.a
                  href="mailto:prof.raj1205@gmail.com"
                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-yellow-400 transition-all group"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right - Floating Cards */}
          <div className="relative h-[600px] hidden lg:block">
            <motion.div
              className="absolute top-0 right-0 w-64 h-80 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 backdrop-blur-xl border border-yellow-400/20 p-6 shadow-2xl"
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                boxShadow: '0 0 60px rgba(250, 204, 21, 0.15)',
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-400/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Innovation</h3>
              <p className="text-gray-400 text-sm">Building intelligent solutions for tomorrow's challenges</p>
            </motion.div>

            <motion.div
              className="absolute bottom-20 right-12 w-64 h-80 rounded-2xl bg-gradient-to-br from-purple-600/10 to-purple-800/5 backdrop-blur-xl border border-purple-400/20 p-6 shadow-2xl"
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                boxShadow: '0 0 60px rgba(168, 85, 247, 0.15)',
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-purple-400/20 flex items-center justify-center mb-4">
                <FolderOpen className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Full-Stack Dev</h3>
              <p className="text-gray-400 text-sm">Web & Mobile apps with cutting-edge technologies</p>
            </motion.div>

            <motion.div
              className="absolute top-40 left-0 w-64 h-80 rounded-2xl bg-gradient-to-br from-blue-600/10 to-blue-800/5 backdrop-blur-xl border border-blue-400/20 p-6 shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              style={{
                boxShadow: '0 0 60px rgba(59, 130, 246, 0.15)',
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-400/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Hackathons</h3>
              <p className="text-gray-400 text-sm">Winner & finalist in multiple competitions</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
