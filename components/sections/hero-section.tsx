"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { ParticleBackground } from "@/components/ui/particle-background"

const roles = ["Software Engineer", "AI/ML Developer", "Full Stack Developer", "React Specialist", "Problem Solver"]

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]

    if (isTyping) {
      if (displayedText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }
    }
  }, [displayedText, isTyping, currentRoleIndex])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Enhanced Gradient Overlay with classic touch */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/50 to-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.1),transparent_50%)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Enhanced Greeting with location */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Kolkata, West Bengal</span>
            </div>
            <span className="text-xl sm:text-2xl text-muted-foreground font-medium tracking-wide">Hello, I'm</span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl sm:text-8xl lg:text-9xl font-bold mb-8 text-balance tracking-tight"
          >
            <span
              className="text-primary drop-shadow-2xl"
              style={{
                textShadow: "0 0 30px rgba(107, 91, 255, 0.5), 0 0 60px rgba(107, 91, 255, 0.3)",
              }}
            >
              Amar Pal
            </span>
          </motion.h1>

          {/* Enhanced Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10 h-20 flex items-center justify-center"
          >
            <div className="glass-card px-8 py-4 rounded-2xl border border-primary/20">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
                I'm a{" "}
                <span className="text-primary font-bold">
                  {displayedText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                    className="inline-block w-1 h-8 bg-primary ml-1"
                  />
                </span>
              </span>
            </div>
          </motion.div>

          {/* Enhanced Description with real profile */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 text-pretty leading-relaxed font-light"
          >
            Aspiring Software Engineer & AI/ML Developer with strong full-stack development expertise. Skilled in React,
            Node.js, and Python ML projects, with experience in building scalable applications, optimizing performance,
            and applying data-driven solutions.
          </motion.p>

          {/* Enhanced Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12"
          >
            {[
              { label: "Years Experience", value: "3+", icon: "🚀" },
              { label: "Projects Built", value: "15+", icon: "💻" },
              { label: "CGPA", value: "7.36", icon: "🎓" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  →
                </motion.div>
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </motion.div>

          {/* Enhanced Social Links with real data */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center space-x-8 mb-16"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/ITSAMARHERE",
                label: "GitHub",
                color: "hover:text-gray-900 dark:hover:text-white",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/amar-pal-a945ba250",
                label: "LinkedIn",
                color: "hover:text-blue-600",
              },
              {
                icon: Mail,
                href: "mailto:tmsl.aiml.amarpal@gmail.com",
                label: "Email",
                color: "hover:text-red-500",
              },
              {
                icon: Phone,
                href: "tel:+919693637388",
                label: "Phone",
                color: "hover:text-green-500",
              },
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group p-4 rounded-full glass-card hover:bg-primary/10 transition-all duration-300 ${color}`}
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-6 w-6 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-muted-foreground mb-4 tracking-wide">Scroll to explore my journey</span>
            <motion.button
              onClick={() => scrollToSection("about")}
              className="p-3 rounded-full glass-card hover:bg-primary/10 transition-all duration-300 border border-primary/20"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              whileHover={{ scale: 1.1 }}
            >
              <ArrowDown className="h-6 w-6 text-primary" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              background: i % 2 === 0 ? "rgba(120,119,198,0.3)" : "rgba(255,119,198,0.3)",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  )
}
