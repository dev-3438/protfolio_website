import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowDown, ExternalLink, Mail } from 'lucide-react';
import GradientButton from '../ui/GradientButton';

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#06b6d4', '#3b82f6', '#8b5cf6', '#10b981'];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.15), transparent 40%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900" style={{ zIndex: 1 }} />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div custom={0} variants={textVariants} initial="hidden" animate={controls}>
          <span className="inline-block px-4 py-2 rounded-full glass-card text-accent-cyan text-sm font-medium mb-6">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate={controls}
          className="font-poppins font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6"
        >
          <span className="gradient-text">Hi, I am</span>
          <br />
          <span className="text-white">Devender Singh Bisht</span>
        </motion.h1>

        <motion.div custom={2} variants={textVariants} initial="hidden" animate={controls} className="mb-6">
          <span className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-accent-cyan">
            Full Stack MERN Developer
          </span>
        </motion.div>

        <motion.p
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate={controls}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Building Production-Ready SaaS Applications
        </motion.p>

        <motion.p
          custom={4}
          variants={textVariants}
          initial="hidden"
          animate={controls}
          className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft scalable, performant, and beautiful web applications using modern technologies. Passionate about clean code, user experience, and building products that make a difference.
        </motion.p>

        <motion.div
          custom={5}
          variants={textVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <GradientButton href="#projects" icon={<ExternalLink size={18} />}>
            View Projects
          </GradientButton>
          <GradientButton href="#contact" variant="outline" icon={<Mail size={18} />}>
            Contact Me
          </GradientButton>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown className="text-slate-500" size={24} />
      </motion.div>
    </section>
  );
}
