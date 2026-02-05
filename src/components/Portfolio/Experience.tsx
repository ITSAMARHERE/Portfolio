import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Briefcase } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Software Development Intern",
      company: "Intelligent Creation",
      location: "Pune, India",
      period: "08/2025 – 01/2026",
      type: "Internship",
      responsibilities: [
        "Analyzed and structured application data using relational database models to optimize data flow",
        "Designed and implemented optimized SQL queries improving data retrieval efficiency by 25%",
        "Developed backend APIs to collect, process, and validate data for business logic implementation",
        "Collaborated with cross-functional teams to ensure data accuracy and consistency across systems",
        "Prepared and structured datasets for analytics and reporting, enabling data-driven decision-making"
      ],
      skills: ["SQL", "Database Design", "Backend APIs", "Data Analysis", "Python"],
      current: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Building expertise in data-driven development and backend system architecture
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 ${
                    exp.current ? 'w-6 h-6' : 'w-4 h-4'
                  } rounded-full ${
                    exp.current 
                      ? 'bg-primary shadow-lg shadow-primary/50 animate-glow-pulse' 
                      : 'bg-primary/60'
                  } z-10 flex items-center justify-center`}
                >
                  {exp.current && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </motion.div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-3rem)] ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card 
                      className={`elegant-shadow smooth-transition hover-lift border-l-4 ${
                        exp.current 
                          ? 'border-l-primary bg-primary/5 shadow-xl' 
                          : 'border-l-muted hover:border-l-primary/50'
                      }`}
                    >
                      <CardHeader>
                        <div className="flex flex-col gap-4">
                          <div className="space-y-2">
                            <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                              <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                              >
                                <Briefcase className="h-6 w-6 text-primary" />
                              </motion.div>
                              {exp.title}
                            </CardTitle>
                            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Building className="h-4 w-4" />
                                <span className="font-semibold">{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>{exp.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{exp.period}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Badge variant={exp.current ? "default" : "secondary"}>
                              {exp.type}
                            </Badge>
                            {exp.current && (
                              <Badge variant="outline" className="border-primary text-primary">
                                Current
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key Responsibilities</h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((responsibility, i) => (
                              <motion.li 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.3 + i * 0.1 }}
                                className="flex items-start gap-3 text-muted-foreground"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>{responsibility}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.3, delay: index * 0.3 + i * 0.05 }}
                                whileHover={{ scale: 1.1 }}
                              >
                                <Badge variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;