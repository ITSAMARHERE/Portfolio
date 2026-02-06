import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - validate environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const toEmail = import.meta.env.VITE_CONTACT_EMAIL || "tmsl.aiml.amarpal@gmail.com";

      // Validate that required environment variables are set
      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS configuration missing. Please check CONTACT_FORM_SETUP.md for setup instructions.");
        toast({
          title: "Configuration Error",
          description: "Email service is not properly configured. Please contact the site owner directly.",
          variant: "destructive",
        });
        return;
      }

      // Prepare the email parameters
      const templateParams = {
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: toEmail,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });

      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
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
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="heading-secondary text-foreground mb-3 sm:mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-3xl mx-auto">
            Open to opportunities in AI/ML engineering and full-stack development
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Let's start a conversation</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
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
            <Card className="shadow-lg hover:shadow-xl border-2 hover-lift bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name
                      </label>
                      <Input 
                        {...register("firstName")}
                        placeholder="John" 
                        className="border-primary/20 focus:border-primary smooth-transition"
                        disabled={isSubmitting}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input 
                        {...register("lastName")}
                        placeholder="Doe" 
                        className="border-primary/20 focus:border-primary smooth-transition"
                        disabled={isSubmitting}
                      />
                      {errors.lastName && (
                        <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input 
                      {...register("email")}
                      type="email" 
                      placeholder="john@example.com" 
                      className="border-primary/20 focus:border-primary smooth-transition"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input 
                      {...register("subject")}
                      placeholder="Project Discussion" 
                      className="border-primary/20 focus:border-primary smooth-transition"
                      disabled={isSubmitting}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      {...register("message")}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="border-primary/20 focus:border-primary resize-none smooth-transition"
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full glow-effect smooth-transition group"
                      disabled={isSubmitting}
                    >
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {isSubmitting ? "Sending..." : "Send Message"}
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