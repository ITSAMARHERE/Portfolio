import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-foreground text-background py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="text-2xl font-bold">
              Amar<span className="text-primary">Pal</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              AI & Machine Learning–focused Computer Science undergraduate passionate about building 
              intelligent, data-driven solutions and creating impactful technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Experience", href: "#experience" },
                { label: "Projects", href: "#projects" },
                { label: "Certifications", href: "#certifications" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ x: 5, color: "hsl(45 100% 58%)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-background/80 hover:text-primary smooth-transition text-sm"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Connect</h3>
            <div className="space-y-2">
              <p className="text-background/80 text-sm">tmsl.aiml.amarpal@gmail.com</p>
              <p className="text-background/80 text-sm">+91 9693637388</p>
              <p className="text-background/80 text-sm">Kolkata, West Bengal</p>
            </div>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/ITSAMARHERE" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/amar-pal-a945ba250" },
                { icon: Mail, href: "mailto:tmsl.aiml.amarpal@gmail.com" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="text-background/80 hover:text-primary hover:bg-background/10"
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-background/60 text-sm text-center md:text-left">
            © 2025 Amar Pal. All rights reserved.
          </p>
          <motion.p 
            className="text-background/60 text-sm flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Built with <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-primary inline" />
            </motion.span> using React & Tailwind CSS
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-8 right-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl smooth-transition"
      >
        <ArrowUp className="h-5 w-5 text-foreground" />
      </motion.button>
    </footer>
  );
};

export default Footer;