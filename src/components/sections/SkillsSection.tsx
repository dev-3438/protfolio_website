import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills, iconMap } from '../../lib/data';
import {
  Monitor,
  Server,
  Terminal,
  Lock,
  Layout,
  Palette,
  FileCode,
  Globe,
  Layers,
  Workflow,
  GitBranch,
  Database,
  Cpu,
  Box,
  Figma,
  Smartphone,
} from 'lucide-react';

const allIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Monitor,
  Server,
  Terminal,
  Lock,
  Layout,
  Palette,
  FileCode,
  Globe,
  Layers,
  Workflow,
  GitBranch,
  Database,
  Cpu,
  Box,
  Figma,
  Smartphone,
  Code2: FileCode,
};

const categoryConfig = {
  frontend: { label: 'Frontend', color: 'from-accent-cyan to-accent-blue' },
  backend: { label: 'Backend', color: 'from-accent-blue to-accent-purple' },
  programming: { label: 'Programming & Tools', color: 'from-accent-purple to-accent-emerald' },
};

function SkillCard({ skill, index }: { skill: { name: string; icon: string; level: number }; index: number }) {
  const Icon = allIcons[skill.icon] || FileCode;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass-card p-5 group cursor-default"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan/20 transition-colors">
          <Icon size={20} />
        </div>
        <h4 className="font-semibold text-white">{skill.name}</h4>
      </div>
      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue"
        />
      </div>
      <div className="text-right text-xs text-slate-400 mt-1">{skill.level}%</div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-32 relative" ref={sectionRef}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-cyan text-sm font-semibold tracking-wider uppercase mb-2 block">My Skills</span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">Technologies I Work With</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto rounded-full" />
        </motion.div>

        {(Object.keys(skills) as Array<keyof typeof skills>).map((category, catIndex) => (
          <div key={category} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              className="text-xl font-poppins font-semibold text-white mb-6 flex items-center gap-3"
            >
              <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${categoryConfig[category].color}`} />
              {categoryConfig[category].label}
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills[category].map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={catIndex * 5 + index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
