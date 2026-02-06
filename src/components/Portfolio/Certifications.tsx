import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Machine Learning Basics",
      issuer: "Coursera",
      date: "2024",
      description: "Fundamental concepts of machine learning, including supervised and unsupervised learning algorithms",
      skills: ["Machine Learning", "Python", "Data Analysis"],
      verified: true
    },
    {
      title: "Introduction to Java",
      issuer: "Online Certification",
      date: "2024",
      description: "Core Java programming concepts, object-oriented principles, and application development",
      skills: ["Java", "OOP", "Programming"],
      verified: true
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
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 soft-gradient">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="heading-secondary text-foreground mb-3 sm:mb-4">
            Certifications & <span className="text-gradient">Leadership</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-3xl mx-auto">
            Professional development and team leadership experience
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="shadow-lg hover:shadow-xl smooth-transition hover-lift border-2 h-full bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                    >
                      <Award className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="font-semibold">{cert.issuer}</span>
                          <span>•</span>
                          <span>{cert.date}</span>
                          {cert.verified && (
                            <>
                              <span>•</span>
                              <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                                Verified
                              </Badge>
                            </>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Leadership & <span className="text-gradient">Activities</span>
          </h3>
          <Card className="shadow-lg border-2 max-w-4xl mx-auto bg-card">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Award className="h-8 w-8 text-primary" />
                </motion.div>
                <div className="flex-1">
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold text-foreground mb-2">
                      Management Head
                    </h4>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="font-semibold">technOTHARSH</span>
                      <span>•</span>
                      <span>Techno Main Salt Lake</span>
                      <span>•</span>
                      <span>06/2024 – 06/2025</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Led a team of 50+ members to organize inter-college and intra-college sports events</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Managed logistics, sponsorship coordination, and event execution</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Strengthened leadership, communication, and team coordination skills</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary" className="text-xs">Leadership</Badge>
                    <Badge variant="secondary" className="text-xs">Team Management</Badge>
                    <Badge variant="secondary" className="text-xs">Event Planning</Badge>
                    <Badge variant="secondary" className="text-xs">Communication</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
