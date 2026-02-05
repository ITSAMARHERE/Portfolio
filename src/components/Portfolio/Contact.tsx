import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section ref={ref} className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary text-foreground mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            Open to opportunities in AI/ML engineering and full-stack development
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's start a conversation</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "tmsl.aiml.amarpal@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 9693637388" },
                { icon: MapPin, label: "Location", value: "Kolkata, West Bengal, India" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-4 cursor-default"
                >
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                  >
                    <item.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-muted-foreground break-all">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="flex gap-4">
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
                    variant="outline" 
                    className="hover:bg-primary/10 hover:border-primary smooth-transition"
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="elegant-shadow border-primary/20 hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name
                      </label>
                      <Input 
                        placeholder="John" 
                        className="border-primary/20 focus:border-primary smooth-transition" 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Doe" 
                        className="border-primary/20 focus:border-primary smooth-transition" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="border-primary/20 focus:border-primary smooth-transition" 
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input 
                      placeholder="Project Discussion" 
                      className="border-primary/20 focus:border-primary smooth-transition" 
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="border-primary/20 focus:border-primary resize-none smooth-transition"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full glow-effect smooth-transition group"
                    >
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;