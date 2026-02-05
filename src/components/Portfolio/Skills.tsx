import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Database, Brain, Users, Award } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["Python", "NumPy", "Pandas", "TensorFlow", "NLP Pipelines", "Deep Learning"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "Java", "JavaScript", "Node.js"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Web Development",
      icon: Wrench,
      skills: ["React", "Next.js", "Tailwind CSS", "Shadcn", "HTMX", "Redux Toolkit"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "Postman", "VSCode", "Clerk", "NextAuth"],
      color: "bg-cyan-500/10 text-cyan-600"
    },
    {
      title: "Core Computer Science",
      icon: Award,
      skills: ["OOP", "Data Structures", "Algorithms", "Operating Systems", "DBMS", "Computer Networks"],
      color: "bg-red-500/10 text-red-600"
    },
    {
      title: "Professional Skills",
      icon: Users,
      skills: ["Problem Solving", "Critical Thinking", "Leadership", "Team Collaboration", "Communication"],
      color: "bg-indigo-500/10 text-indigo-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 soft-gradient">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Comprehensive skill set spanning AI/ML development, full-stack engineering, and data-driven solutions
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                tabIndex={0}
                role="article"
                aria-label={`${category.title} skills`}
              >
                <Card className="elegant-shadow smooth-transition hover-lift border-primary/20 h-full">
                  <CardHeader className="text-center pb-4">
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className="h-8 w-8" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.1 + skillIndex * 0.05 
                          }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="text-xs smooth-transition hover:bg-primary/20 hover:scale-110 cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;