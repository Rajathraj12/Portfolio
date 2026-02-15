import { motion } from 'motion/react';
import { Rocket, LayoutDashboard, Smartphone, Sparkles, Code, Zap } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: LayoutDashboard,
      title: 'MVP Development',
      description: 'Transform your startup idea into a functional product with rapid MVP development',
      features: [
        'Full-stack web applications',
        'Modern UI/UX design',
        'Scalable architecture',
        'Fast delivery',
      ],
      color: 'yellow',
    },
    {
      icon: Sparkles,
      title: 'AI Integration',
      description: 'Integrate intelligent features and automation into your applications',
      features: [
        'AI-powered automation',
        'Smart recommendations',
        'Natural language processing',
        'Data analytics',
      ],
      color: 'purple',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications with React Native',
      features: [
        'iOS & Android support',
        'Native performance',
        'Seamless UX',
        'API integration',
      ],
      color: 'blue',
    },
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Modern, responsive, and performant user interfaces',
      features: [
        'React & Next.js',
        'TailwindCSS styling',
        'Responsive design',
        'Performance optimized',
      ],
      color: 'yellow',
    },
    {
      icon: Rocket,
      title: 'SaaS Products',
      description: 'Complete SaaS product development from concept to launch',
      features: [
        'Subscription models',
        'User authentication',
        'Admin dashboards',
        'Payment integration',
      ],
      color: 'purple',
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Quick prototypes to validate your ideas and secure funding',
      features: [
        'Interactive prototypes',
        'Figma to code',
        'Quick iterations',
        'Investor-ready demos',
      ],
      color: 'blue',
    },
  ];

  const colorClasses = {
    yellow: {
      gradient: 'from-yellow-400/20 via-yellow-600/10 to-yellow-800/5',
      border: 'border-yellow-400/30',
      icon: 'bg-yellow-400/20 text-yellow-400',
      button: 'bg-yellow-400/10 hover:bg-yellow-400/20 border-yellow-400/30 text-yellow-400',
    },
    purple: {
      gradient: 'from-purple-400/20 via-purple-600/10 to-purple-800/5',
      border: 'border-purple-400/30',
      icon: 'bg-purple-400/20 text-purple-400',
      button: 'bg-purple-400/10 hover:bg-purple-400/20 border-purple-400/30 text-purple-400',
    },
    blue: {
      gradient: 'from-blue-400/20 via-blue-600/10 to-blue-800/5',
      border: 'border-blue-400/30',
      icon: 'bg-blue-400/20 text-blue-400',
      button: 'bg-blue-400/10 hover:bg-blue-400/20 border-blue-400/30 text-blue-400',
    },
  };

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-50, 50, -50],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [50, -50, 50],
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
              Services
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Startup <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Builder</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Premium development services for startups, MVPs, and SaaS products
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative rounded-3xl bg-gradient-to-br ${colors.gradient} backdrop-blur-xl border ${colors.border} p-8 group cursor-pointer`}
                style={{
                  boxShadow: '0 0 60px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${colors.icon} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-gray-400 text-sm"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.icon.split(' ')[0]}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    className={`w-full px-4 py-3 rounded-xl border backdrop-blur-sm font-medium transition-colors ${colors.button}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Started
                  </motion.button>
                </div>

                {/* Decorative corner glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${colors.icon.split(' ')[0]} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity`} />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 relative rounded-3xl bg-gradient-to-br from-yellow-400/20 via-yellow-600/10 to-yellow-800/5 backdrop-blur-xl border border-yellow-400/30 p-12 text-center overflow-hidden"
          style={{
            boxShadow: '0 0 80px rgba(250, 204, 21, 0.2)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project. From MVPs to full-scale SaaS products, I'll help bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl font-semibold text-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start a Project
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}