import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionSeparatorProps {
  className?: string;
}

export const SectionSeparator = ({ className }: SectionSeparatorProps) => {
  return (
    <div className={cn("relative py-12 overflow-hidden", className)}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-2 h-2 rounded-full bg-primary animate-pulse"
        />
      </div>
    </div>
  );
};

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

export const GradientBorder = ({ 
  children, 
  className,
  gradient = "from-primary to-secondary"
}: GradientBorderProps) => {
  return (
    <div className={cn("relative group", className)}>
      <div className={cn(
        "absolute -inset-0.5 bg-gradient-to-r rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-300",
        gradient
      )} />
      <div className="relative">
        {children}
      </div>
    </div>
  );
};
