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
      skills: ["Python", "TensorFlow", "NLP", "Deep Learning", "NumPy", "Pandas"],
      color: "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400"
    },
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
      color: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "REST APIs"],
      color: "bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "Postman", "Vercel", "Supabase"],
      color: "bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400"
    },
    {
      title: "Core Computer Science",
      icon: Award,
      skills: ["Data Structures", "Algorithms", "Operating Systems", "DBMS", "Computer Networks", "OOP"],
      color: "bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400"
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
          <h2 className="heading-secondary text-foreground mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            Core competencies in AI/ML, full-stack development, and computer science fundamentals
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