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
      title: "SocialSphere",
      period: "05/2025 – 07/2025",
      description: "A modern forum platform with Supabase backend featuring authentication & real-time community features for 500+ users.",
      technologies: ["React", "TypeScript", "Vite", "Supabase", "Tailwind"],
      highlights: [
        "Real-time community features",
        "500+ active users",
        "Modern UI/UX design",
        "Secure authentication"
      ],
      metrics: {
        users: "500+",
        performance: "Real-time",
        type: "Forum Platform"
      },
      githubUrl: "https://github.com/ITSAMARHERE/SocialSphere",
      demoUrl: "https://social-sphere-smoky.vercel.app/"
    },
    {
      title: "Talka - Chat App",
      period: "01/2025 – 03/2025",
      description: "A secure chat application with real-time messaging & authentication, scaled to handle 200+ concurrent users across devices.",
      technologies: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      highlights: [
        "Real-time messaging",
        "200+ concurrent users",
        "Cross-device compatibility",
        "Secure authentication"
      ],
      metrics: {
        users: "200+",
        performance: "Real-time",
        type: "Chat Application"
      },
      githubUrl: "https://github.com/ITSAMARHERE/Talka",
      demoUrl: "https://talka.onrender.com/login"
    },
    {
      title: "ECommerce App with Admin Panel",
      period: "04/2025 – 06/2025",
      description: "A full-featured e-commerce platform with cart & admin panel, achieving 30% faster load times through optimized database queries.",
      technologies: ["React", "Redux Toolkit", "Tailwind", "MongoDB"],
      highlights: [
        "Complete admin panel",
        "Shopping cart functionality",
        "30% faster load times",
        "Optimized database queries"
      ],
      metrics: {
        performance: "30% faster",
        improvement: "Load time",
        type: "E-commerce"
      },
      githubUrl: "https://github.com/ITSAMARHERE/ECommerce-",
      demoUrl: "https://ecommerce-1-sur7.onrender.com/auth/login"
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
        duration: 0.5,
        ease: "easeOut"
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What have I <span className="gradient-text">created?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore some of the projects I've built, showcasing my technical skills and problem-solving abilities.
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