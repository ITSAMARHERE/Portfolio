import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Github, Users, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Campus Care – Digital Mental Health Platform",
      period: "08/2025 – 11/2025",
      description: "AI-powered mental health platform for students with real-time emotion detection and behavioral analysis. Built data pipelines for processing student interactions.",
      technologies: ["Python", "TensorFlow", "NLP", "React", "Node.js", "MongoDB"],
      highlights: [
        "Analyzed student interaction and emotion data to identify behavioral patterns",
        "Developed real-time AI-based emotion detection pipelines",
        "Processed and structured datasets using Python for behavioral analysis",
        "Generated actionable insights to improve system responsiveness"
      ],
      metrics: {
        users: "Students",
        performance: "Real-time AI",
        type: "Mental Health AI"
      },
      aiTags: ["NLP", "Data Analysis", "Real-time Processing"],
      githubUrl: "https://github.com/ANISHAGRWAL/SIH_25",

      demoUrl: "https://campuscare.live/"
    },
    {
      title: "ECommerce Platform with Admin Panel",
      period: "04/2025 – 06/2025",
      description: "Full-stack e-commerce platform with comprehensive admin dashboard. Optimized database queries achieving 30% faster response times.",
      technologies: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Tailwind CSS"],
      highlights: [
        "Developed full-stack platform with React and Node.js",
        "Optimized database queries achieving ~30% improvement in response time",
        "Implemented role-based access control for admin operations",
        "Designed scalable architecture for product management"
      ],
      metrics: {
        performance: "30% faster",
        improvement: "Response Time",
        type: "E-commerce"
      },
      aiTags: ["Full Stack"],
      githubUrl: "https://github.com/ITSAMARHERE/ECommerce-",
      demoUrl: "https://ecommerce-1-sur7.onrender.com/auth/login"
    },
    {
      title: "Talka - Real-Time Chat Application",
      period: "01/2025 – 03/2025",
      description: "Scalable real-time messaging platform with intelligent data architecture. Designed for concurrent user handling with optimized message storage.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      highlights: [
        "Analyzed chat usage patterns and user activity data",
        "Designed optimized database schemas for message storage and retrieval",
        "Implemented scalability features for concurrent user handling",
        "Built real-time communication infrastructure"
      ],
      metrics: {
        users: "Concurrent",
        performance: "Real-time",
        type: "Chat Platform"
      },
      aiTags: ["Real-time", "Data Architecture"],
      githubUrl: "https://github.com/ITSAMARHERE/Talka",
      demoUrl: "https://talka.onrender.com/login"
    }
  ];

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
        duration: 0.5
      }
    }
  };

  return (
    <section ref={ref} id="projects" className="py-20 px-4 soft-gradient">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            Real-world applications showcasing AI/ML and full-stack development capabilities
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              tabIndex={0}
              role="article"
              aria-label={`Project: ${project.title}`}
            >
              <Card className="elegant-shadow smooth-transition hover-lift border-primary/20 group h-full relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.05 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary to-secondary pointer-events-none z-0"
                />

                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {project.period}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {project.metrics.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary smooth-transition">
                    {project.title}
                  </CardTitle>
                  
                  {/* AI Tags */}
                  {project.aiTags && (
                    <div className="flex flex-wrap gap-1 mt-2 mb-3">
                      {project.aiTags.map((tag, i) => (
                        <Badge 
                          key={i} 
                          className="text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/30 text-purple-700 dark:text-purple-300"
                        >
                          ✨ {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-3 bg-primary/10 rounded-lg smooth-transition"
                    >
                      <Users className="h-5 w-5 text-primary mx-auto mb-1" />
                      <p className="text-sm font-semibold text-foreground">
                        {project.metrics.users || project.metrics.performance}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {project.metrics.users ? "Users" : "Performance"}
                      </p>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-3 bg-secondary/10 rounded-lg smooth-transition"
                    >
                      <Zap className="h-5 w-5 text-secondary mx-auto mb-1" />
                      <p className="text-sm font-semibold text-foreground">
                        {project.metrics.improvement || project.metrics.performance}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {project.metrics.improvement ? "Improvement" : "Features"}
                      </p>
                    </motion.div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm">Key Features</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="sm" variant="outline" className="w-full text-xs group/btn">
                          <Github className="h-3 w-3 mr-1 group-hover/btn:rotate-12 transition-transform" />
                          Code
                        </Button>
                      </motion.div>
                    </a>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="sm" variant="default" className="w-full text-xs group/btn">
                          <ExternalLink className="h-3 w-3 mr-1 group-hover/btn:translate-x-1 transition-transform" />
                          Demo
                        </Button>
                      </motion.div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;