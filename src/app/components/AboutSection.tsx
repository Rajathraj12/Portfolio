import { motion } from 'motion/react';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Expertise',
      description: 'React, Next.js, Node.js, React Native',
      color: 'yellow',
    },
    {
      icon: Lightbulb,
      title: 'AI Innovation',
      description: 'Building intelligent automation tools',
      color: 'purple',
    },
    {
      icon: Rocket,
      title: 'Startup Builder',
      description: 'MVP development & product design',
      color: 'blue',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Hackathon winner & collaborator',
      color: 'yellow',
    },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-100, 100, -100],
            y: [-50, 50, -50],
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
            <span className="px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm font-medium">
              About Me
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Building the <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Future</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            I'm a BTech Computer Science student passionate about creating innovative solutions that merge 
            AI, web development, and user experience design.
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 lg:p-12 mb-12"
          style={{
            boxShadow: '0 0 80px rgba(250, 204, 21, 0.1)',
          }}
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/5 via-transparent to-purple-600/5" />
          
          <div className="relative z-10">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My journey in tech is driven by a simple belief: <span className="text-yellow-400 font-semibold">technology should empower and simplify</span>. 
              From building unified founder workspace platforms to civic issue management systems, I focus on creating 
              products that make a real difference.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              With experience in <span className="text-purple-400 font-semibold">React</span>, 
              <span className="text-blue-400 font-semibold"> Node.js</span>, and 
              <span className="text-yellow-400 font-semibold"> AI integration</span>, I've developed full-stack 
              applications that have won hackathons and served real users. I'm particularly passionate about 
              building startup MVPs and SaaS products.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently exploring opportunities in <span className="text-yellow-400 font-semibold">frontend engineering</span>, 
              AI product development, and startup collaborations. Let's build something amazing together!
            </p>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            const colorClasses = {
              yellow: 'from-yellow-400/10 to-yellow-600/5 border-yellow-400/20 text-yellow-400',
              purple: 'from-purple-400/10 to-purple-600/5 border-purple-400/20 text-purple-400',
              blue: 'from-blue-400/10 to-blue-600/5 border-blue-400/20 text-blue-400',
            };
            const colorClass = colorClasses[item.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative rounded-2xl bg-gradient-to-br ${colorClass} backdrop-blur-xl border p-6 group cursor-pointer`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
