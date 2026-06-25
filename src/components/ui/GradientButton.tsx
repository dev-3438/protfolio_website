import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'outline';
  icon?: ReactNode;
}

export default function GradientButton({
  children,
  onClick,
  href,
  className = '',
  size = 'md',
  variant = 'primary',
  icon,
}: GradientButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'gradient-btn text-white',
    outline: 'bg-transparent border-2 border-accent-cyan/50 text-accent-cyan hover:bg-accent-cyan/10 hover:border-accent-cyan',
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <Component
      {...props}
      className={`inline-flex items-center gap-2 rounded-xl font-semibold font-poppins transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {icon}
    </Component>
  );
}
