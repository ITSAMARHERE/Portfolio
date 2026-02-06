import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import profile2 from "@/assets/profile-2.jpg";

const Hero = () => {
  const roles = [
    "AI & Machine Learning Engineer",
    "Full Stack Developer", 
    "Software Engineer"
  ];
  
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 50, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 h-48 sm:w-64 md:w-96 sm:h-64 md:h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 h-48 sm:w-64 md:w-96 sm:h-64 md:h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left space-y-6 sm:space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.p 
                variants={itemVariants}
                className="text-foreground/70 text-base sm:text-lg font-medium tracking-wide"
              >
                Hi, I'm
              </motion.p>
              <motion.h1 
                variants={itemVariants}
                className="heading-primary text-foreground mb-4 sm:mb-6"
              >
                Amar <span className="text-gradient">Pal</span>
              </motion.h1>
              
              {/* Animated Role Switcher with Gradient */}
              <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={currentRole}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-purple"
                  >
                    {roles[currentRole]}
                  </motion.h2>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <motion.p 
                className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Building intelligent systems with <span className="text-primary font-semibold">AI/ML</span> and scalable 
                web applications. Focused on delivering data-driven solutions from model development to production deployment.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a href="mailto:tmsl.aiml.amarpal@gmail.com">
                <Button 
                  size="lg" 
                  variant="default"
                  className="shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 smooth-transition hover:scale-105 group text-sm sm:text-base"
                >
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform" />
                  Get in Touch
                </Button>
              </a>
              <a href="#projects">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 hover:bg-primary/5 smooth-transition hover:scale-105 group text-sm sm:text-base"
                >
                  View Projects
                  <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-1 transition-transform" />
                </Button>
              </a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/ITSAMARHERE" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/amar-pal-a945ba250" },
                { icon: Mail, href: "mailto:tmsl.aiml.amarpal@gmail.com" },
                { icon: Phone, href: "tel:9693637388" }
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
                    className="hover:bg-primary/10 hover:text-primary smooth-transition border border-border h-9 w-9 sm:h-10 sm:w-10"
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Display */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative group w-full sm:w-3/4 lg:w-full max-w-xs sm:max-w-md">
              <motion.div 
                animate={{ 
                  rotate: [3, 6, 3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl z-0 blur-sm"
              />
              
              <motion.img 
                src={profile2} 
                alt="Amar Pal - Professional photo" 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover object-center z-10"
                style={{ maxHeight: '450px' }}
              />
              
              {/* Decorative elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-primary/30 rounded-full blur-2xl"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 bg-secondary/30 rounded-full blur-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-muted-foreground flex flex-col items-center gap-2"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;