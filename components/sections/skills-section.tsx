"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
      { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
      { name: "Tailwind CSS", level: 92, color: "from-teal-500 to-green-500" },
      { name: "Framer Motion", level: 85, color: "from-purple-500 to-pink-500" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 88, color: "from-green-600 to-green-400" },
      { name: "Express.js", level: 85, color: "from-gray-600 to-gray-400" },
      { name: "PostgreSQL", level: 82, color: "from-blue-700 to-blue-500" },
      { name: "MongoDB", level: 80, color: "from-green-700 to-green-500" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub", level: 90, color: "from-orange-500 to-red-500" },
      { name: "Docker", level: 75, color: "from-blue-500 to-blue-600" },
      { name: "AWS", level: 70, color: "from-yellow-500 to-orange-500" },
      { name: "Figma", level: 85, color: "from-purple-600 to-purple-400" },
    ],
  },
]

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "Docker",
  "AWS",
  "Vercel",
  "Supabase",
  "Prisma",
  "tRPC",
  "Zustand",
  "React Query",
]

function AnimatedProgress({ value, color }: { value: number; color: string }) {
  return (
    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
      <motion.div
        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${color} rounded-full`}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 text-secondary border-secondary/20">
              Skills & Expertise
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Technical{" "}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Proficiency
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              A comprehensive overview of my technical skills and the technologies I work with to build modern, scalable
              applications.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <Card className="glass-card p-6 h-full">
                  <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <AnimatedProgress value={skill.level} color={skill.color} />
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technologies Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="glass-card px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-primary/10 transition-all duration-300"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
