import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import { experiences } from '../../lib/data';

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 md:py-32 relative" ref={sectionRef}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-cyan text-sm font-semibold tracking-wider uppercase mb-2 block">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">My Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-purple transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`relative pl-12 md:pl-0 mb-10 ${
                index % 2 === 0 ? 'md:pr-[55%] md:text-right' : 'md:pl-[55%] md:text-left'
              }`}
            >
              <div
                className={`absolute left-4 md:left-1/2 top-0 w-4 h-4 rounded-full bg-accent-cyan border-4 border-dark-900 transform -translate-x-1/2 md:-translate-x-1/2 z-10`}
              />
              <div className={`${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                <GlassCard>
                  <div className={`flex items-center gap-2 mb-2 text-accent-cyan text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar size={14} />
                    <span className="font-semibold">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-white mb-1">{exp.title}</h3>
                  <div className={`flex items-center gap-1 text-slate-400 text-sm mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <MapPin size={14} />
                    <span>{exp.company}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
