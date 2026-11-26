import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Code2, Sparkles, Rocket } from 'lucide-react';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Clean UI',
      description: 'Passionate about creating beautiful and intuitive user interfaces',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Scalable Systems',
      description: 'Building robust and maintainable applications that scale',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions',
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm a software engineer and creative vibe coder who enjoys building modern web
                applications and AI solutions.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Passionate about clean UI, scalable systems, and innovative technology. I focus on
                frontend development with React and building intelligent backend systems using
                Python.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                My goal is to create impactful digital experiences that solve real-world problems
                while staying on the cutting edge of technology.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex gap-4 p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-colors"
                >
                  <div className="text-cyan-400 flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl mb-2">{feature.title}</h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
