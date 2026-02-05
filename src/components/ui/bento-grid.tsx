import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
      className
    )}>
      {children}
    </div>
  );
};

export const BentoCard = ({ children, className, gradient = false }: BentoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative group overflow-hidden rounded-2xl p-6",
        "bg-card border border-border",
        "hover-lift smooth-transition",
        gradient && "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/10 before:to-secondary/10 before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300",
        className
      )}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
