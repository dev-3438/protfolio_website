import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Target, Zap } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const stats = [
  { label: 'Projects Completed', value: 15, suffix: '+', icon: Briefcase },
  { label: 'LeetCode Problems', value: 100, suffix: '+', icon: Zap },
  { label: 'Certificates', value: 5, suffix: '', icon: GraduationCap },
  { label: 'Technologies', value: 15, suffix: '+', icon: Target },
];

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'University of Technology',
    period: '2020 - 2024',
    description: 'Focused on software engineering, data structures, algorithms, and web development.',
  },
  {
    degree: 'Higher Secondary Education',
    school: 'Science Academy',
    period: '2018 - 2020',
    description: 'Completed with focus on Mathematics, Physics, and Computer Science.',
  },
];

function CountUp({ end, isInView }: { end: number; isInView: boolean }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = Date.now();
    const duration = 2000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * end);
      setCount(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isInView, end]);

  return <>{count}</>;
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CountUp end={value} isInView={isInView} />
      {suffix}
    </motion.span>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={sectionRef}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-cyan text-sm font-semibold tracking-wider uppercase mb-2 block">About Me</span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-poppins font-semibold text-white mb-4">Professional Introduction</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              I'm a passionate Full Stack Developer with expertise in the MERN stack. I specialize in building scalable, production-ready applications that deliver exceptional user experiences.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              With a strong foundation in computer science and continuous learning mindset, I've developed multiple SaaS applications, e-commerce platforms, and management systems that solve real-world problems.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My approach combines technical excellence with creative problem-solving. I believe in writing clean, maintainable code and staying current with the latest industry trends and best practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-poppins font-semibold text-white mb-4">Career Objective</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              To leverage my expertise in full-stack development to build innovative, scalable solutions that drive business growth and enhance user experiences.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I'm seeking opportunities to contribute to impactful projects, collaborate with talented teams, and continue growing as a developer while delivering value through clean, efficient code.
            </p>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-poppins font-semibold text-white mb-8 text-center">Education</h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan to-accent-purple transform md:-translate-x-1/2" />
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                className={`relative pl-12 md:pl-0 mb-8 ${index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:text-left'}`}
              >
                <div className={`absolute left-4 md:left-1/2 top-0 w-3 h-3 rounded-full bg-accent-cyan transform -translate-x-1/2 md:-translate-x-1/2 border-4 border-dark-900`} />
                <GlassCard className={`${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className={`flex items-center gap-2 mb-2 text-accent-cyan ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <GraduationCap size={16} />
                    <span className="text-sm font-semibold">{edu.period}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                  <p className="text-slate-400 text-sm mb-2">{edu.school}</p>
                  <p className="text-slate-500 text-sm">{edu.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <GlassCard className="text-center">
                <stat.icon className="mx-auto text-accent-cyan mb-3" size={28} />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
