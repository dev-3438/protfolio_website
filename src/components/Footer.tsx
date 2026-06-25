import { motion } from 'framer-motion';
import { Code2, Heart } from 'lucide-react';
import { navItems, socialLinks } from '../lib/data';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialIconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-slate-800/50">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <motion.a
              href="#home"
              className="flex items-center gap-2 text-white font-poppins font-semibold text-xl mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="text-accent-cyan" size={28} />
              <span className="gradient-text">Portfolio</span>
            </motion.a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full Stack MERN Developer building production-ready SaaS applications with modern technologies and best practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-poppins font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-400 hover:text-accent-cyan transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-poppins font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon] || Mail;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-accent-cyan transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.name}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Designed & Developed with <Heart size={14} className="text-red-500" fill="currentColor" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
