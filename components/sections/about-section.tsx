"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code, GraduationCap, Briefcase, Users, Award, Target } from "lucide-react"

const stats = [
  { label: "Projects Completed", value: 15, suffix: "+" },
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Technologies Mastered", value: 20, suffix: "+" },
  { label: "Current CGPA", value: 7.36, suffix: "" },
]

const highlights = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Expert in React, Node.js, Express.js, MongoDB with focus on scalable applications.",
  },
  {
    icon: GraduationCap,
    title: "AI/ML Specialization",
    description: "B.Tech in CSE with AI/ML specialization, experienced in TensorFlow and Python ML projects.",
  },
  {
    icon: Briefcase,
    title: "Industry Experience",
    description: "Software Development Intern at Intelligent Creation, Data Analytics Intern at Deloitte.",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Management Co-Head at technOTHARSH, leading 120+ members in sports tournaments.",
  },
]

const education = [
  {
    degree: "B.Tech in CSE (AI/ML Specialization)",
    institution: "Techno Main Salt Lake",
    period: "2022 - Present",
    cgpa: "7.36",
    location: "Kolkata, India",
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "B.D. College",
    period: "2020 - 2022",
    cgpa: "65.8%",
    location: "Patna, India",
  },
]

function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration }}
        onViewportEnter={() => {
          // Counter animation logic would go here
        }}
      >
        {value}
      </motion.span>
      {suffix}
    </motion.span>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-primary/10 to-secondary/10"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 px-4 py-2">
              About Me
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
              Passionate About{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Technology & Innovation
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Aspiring Software Engineer & AI/ML Developer with strong full-stack development expertise. Proven
              adaptability, leadership, and teamwork through internships and as Management Co-Head at technOTHARSH
              (Official Sports Society of Techno Main Salt Lake).
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold flex items-center gap-3">
                  <Target className="h-8 w-8 text-primary" />
                  My Journey
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Currently pursuing B.Tech in Computer Science Engineering with AI/ML specialization at Techno Main
                  Salt Lake. My journey began with curiosity about how technology can solve real-world problems, leading
                  me to specialize in full-stack development and machine learning.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Through internships at Intelligent Creation and Deloitte, I've gained hands-on experience in building
                  scalable applications, optimizing performance, and applying data-driven solutions. I believe in
                  continuous learning and staying ahead of technological trends.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-semibold flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="glass-card p-6 rounded-xl border-l-4 border-primary"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-lg">{edu.degree}</h4>
                        <Badge variant="secondary">{edu.cgpa}</Badge>
                      </div>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>{edu.period}</span>
                        <span>{edu.location}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-semibold flex items-center gap-3">
                  <Award className="h-8 w-8 text-primary" />
                  Core Strengths
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass-card p-6 rounded-xl hover:border-primary/30 transition-all duration-300"
                    >
                      <highlight.icon className="h-10 w-10 text-primary mb-3" />
                      <h4 className="font-semibold mb-2 text-lg">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotateY: 5 }}
                    className="glass-card p-8 rounded-2xl text-center group cursor-pointer relative overflow-hidden"
                  >
                    <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="text-4xl lg:text-5xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm text-muted-foreground font-medium leading-tight">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="glass-card p-8 rounded-2xl"
              >
                <h4 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Award className="h-6 w-6 text-primary" />
                  Key Achievements
                </h4>
                <div className="space-y-4">
                  {[
                    "Led team of 120+ members at technOTHARSH",
                    "Optimized system performance by 20% at Intelligent Creation",
                    "Built scalable apps handling 500+ concurrent users",
                    "Completed multiple industry certifications",
                  ].map((achievement, index) => (
                    <motion.div
                      key={achievement}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
