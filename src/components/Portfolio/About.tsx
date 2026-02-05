import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Get to know more about my background, education, and what drives my passion for technology
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Profile Card */}
          <motion.div variants={cardVariants}>
            <Card className="elegant-shadow smooth-transition hover-lift border-primary/20 h-full">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <GraduationCap className="h-12 w-12 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Education</h3>
                </div>
                <div className="space-y-4 text-left">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="border-l-4 border-primary pl-4"
                  >
                    <h4 className="font-semibold text-foreground">B.Tech in CSE (AI/ML)</h4>
                    <p className="text-muted-foreground text-sm">Techno Main Salt Lake</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">2022 - Present</span>
                    </div>
                    <Badge variant="secondary" className="mt-2">CGPA: 7.52</Badge>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="border-l-4 border-muted pl-4"
                  >
                    <h4 className="font-semibold text-foreground">Higher Secondary</h4>
                    <p className="text-muted-foreground text-sm">B.D. College</p>
                    <Badge variant="outline" className="mt-2">65.8%</Badge>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Location & Contact */}
          <motion.div variants={cardVariants}>
            <Card className="elegant-shadow smooth-transition hover-lift border-primary/20 h-full">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <MapPin className="h-12 w-12 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Location</h3>
                </div>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-foreground">Kolkata, West Bengal</p>
                    <p className="text-muted-foreground">India</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground break-all">tmsl.aiml.amarpal@gmail.com</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+91 9693637388</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bio */}
          <motion.div variants={cardVariants}>
            <Card className="elegant-shadow smooth-transition hover-lift border-primary/20 h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Profile</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  AI & Machine Learning–focused Computer Science undergraduate with hands-on experience in building 
                  AI-powered, data-driven applications. Strong foundation in Machine Learning, Deep Learning fundamentals, 
                  NLP pipelines, and AI-integrated full-stack systems.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm mt-4">
                  Experienced in designing end-to-end AI solutions — from data preprocessing and model integration to 
                  scalable backend deployment. Passionate about applying AI to real-world problems in mental health, 
                  education, and automation.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;