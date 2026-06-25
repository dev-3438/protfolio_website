import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import { certificates } from '../../lib/data';

export default function CertificatesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="certificates" className="py-20 md:py-32 relative" ref={sectionRef}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-cyan text-sm font-semibold tracking-wider uppercase mb-2 block">
            Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">Certificates & Credentials</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <GlassCard className="h-full group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center text-white shadow-lg">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">{cert.name}</h3>
                    <p className="text-slate-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                  <Calendar size={14} />
                  <span>Issued: {cert.date}</span>
                </div>
                <motion.a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-cyan text-sm font-medium hover:text-white transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <ExternalLink size={14} />
                  Verify Certificate
                </motion.a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
