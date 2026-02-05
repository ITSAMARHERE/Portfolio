import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import profile2 from "@/assets/profile-2.jpg";

const Hero = () => {
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
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 hero-gradient overflow-hidden">
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
          className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.p 
                variants={itemVariants}
                className="text-white/90 text-lg font-medium tracking-wide"
              >
                Hi There, I'm
              </motion.p>
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                Amar <span className="gradient-text">Pal</span>
              </motion.h1>
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-2 justify-center lg:justify-start mt-4"
              >
                <Badge variant="secondary" className="text-sm px-4 py-2 glass animate-float">
                  AI/ML Engineer
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2 glass animate-float" style={{ animationDelay: '0.5s' }}>
                  Data-Driven Developer
                </Badge>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h2 
                className="text-2xl md:text-3xl font-semibold text-white"
              >
                Building <span className="text-white/90 relative">
                  AI-Powered Solutions
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-1 bg-primary/50"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </span>
              </motion.h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                AI & Machine Learning–focused Computer Science undergraduate specializing in building intelligent, 
                data-driven applications. Experienced in designing end-to-end AI solutions — from data preprocessing 
                and model integration to scalable backend deployment.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a href="mailto:tmsl.aiml.amarpal@gmail.com">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="glow-effect smooth-transition hover:scale-105 hover-lift group"
                >
                  <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Get in Touch
                </Button>
              </a>
              <a href="#projects">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 smooth-transition hover:scale-105 group"
                >
                  View Projects
                  <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </Button>
              </a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start"
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
                    className="text-white/80 hover:text-white hover:bg-white/10 smooth-transition"
                  >
                    <social.icon className="h-5 w-5" />
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
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative group w-full md:w-3/4 lg:w-full max-w-sm sm:max-w-md">
              <motion.div 
                animate={{ 
                  rotate: [3, 6, 3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-white/20 rounded-2xl z-0 blur-sm"
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
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl"
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
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/30 rounded-full blur-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/60 flex flex-col items-center gap-2"
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