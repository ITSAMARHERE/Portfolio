"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProjectModal } from "@/components/ui/project-modal"
import { ExternalLink, Github, Eye } from "lucide-react"

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  features: string[]
  technologies: string[]
  challenges: string
  solution: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A modern, full-stack e-commerce solution with real-time inventory management and secure payments.",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and TypeScript, featuring a modern design, real-time inventory management, secure payment processing, and an intuitive admin dashboard. The platform supports multiple payment methods, order tracking, and automated email notifications.",
    image: "/modern-ecommerce-dashboard.png",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/ecommerce",
    features: [
      "Real-time inventory management",
      "Secure payment processing with Stripe",
      "Admin dashboard with analytics",
      "Order tracking and notifications",
      "Responsive design for all devices",
      "SEO optimized product pages",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe API", "Vercel"],
    challenges:
      "The main challenge was implementing real-time inventory updates across multiple concurrent users while maintaining data consistency and preventing overselling.",
    solution:
      "Implemented optimistic locking with database transactions and real-time WebSocket connections to ensure inventory accuracy and provide instant updates to users.",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates, team collaboration, and advanced filtering.",
    longDescription:
      "A sophisticated task management application designed for teams, featuring real-time collaboration, advanced project tracking, customizable workflows, and comprehensive reporting. Built with modern technologies to ensure scalability and performance.",
    image: "/task-management-dashboard.png",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/example/taskmanager",
    features: [
      "Real-time team collaboration",
      "Drag-and-drop task management",
      "Advanced filtering and search",
      "Time tracking and reporting",
      "Custom project templates",
      "Mobile-responsive design",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT Authentication"],
    challenges:
      "Ensuring real-time synchronization across multiple users while maintaining optimal performance and handling offline scenarios.",
    solution:
      "Implemented event-driven architecture with Socket.io for real-time updates and optimistic UI updates with conflict resolution for offline scenarios.",
  },
  {
    id: "3",
    title: "AI-Powered Analytics Dashboard",
    description:
      "An intelligent analytics platform that provides actionable insights using machine learning algorithms.",
    longDescription:
      "A cutting-edge analytics dashboard that leverages artificial intelligence to provide deep insights into business data. Features predictive analytics, automated reporting, and interactive visualizations that help businesses make data-driven decisions.",
    image: "/ai-analytics-dashboard.png",
    tags: ["Python", "React", "TensorFlow", "D3.js"],
    demoUrl: "https://analytics.example.com",
    githubUrl: "https://github.com/example/ai-analytics",
    features: [
      "Predictive analytics with ML models",
      "Interactive data visualizations",
      "Automated report generation",
      "Real-time data processing",
      "Custom dashboard creation",
      "API integration capabilities",
    ],
    technologies: ["React", "Python", "TensorFlow", "D3.js", "FastAPI", "PostgreSQL"],
    challenges:
      "Processing large datasets in real-time while maintaining responsive user interface and accurate predictions.",
    solution:
      "Implemented efficient data pipelines with caching strategies and background processing to ensure smooth user experience while handling complex computations.",
  },
  {
    id: "4",
    title: "Social Media Platform",
    description:
      "A modern social networking platform with real-time messaging, content sharing, and community features.",
    longDescription:
      "A comprehensive social media platform that connects people through shared interests and real-time interactions. Features include instant messaging, content sharing, community groups, and advanced privacy controls.",
    image: "/social-media-interface.png",
    tags: ["Next.js", "GraphQL", "Redis", "AWS"],
    demoUrl: "https://social.example.com",
    githubUrl: "https://github.com/example/social-platform",
    features: [
      "Real-time messaging system",
      "Content sharing and reactions",
      "Community groups and events",
      "Advanced privacy controls",
      "Media upload and processing",
      "Push notifications",
    ],
    technologies: ["Next.js", "GraphQL", "Redis", "AWS S3", "WebRTC", "PostgreSQL"],
    challenges:
      "Scaling real-time messaging to support thousands of concurrent users while maintaining low latency and high reliability.",
    solution:
      "Implemented microservices architecture with Redis for session management and WebRTC for peer-to-peer communication to ensure optimal performance.",
  },
  {
    id: "5",
    title: "Cryptocurrency Tracker",
    description:
      "A comprehensive crypto portfolio tracker with real-time prices, advanced charts, and market analysis.",
    longDescription:
      "A sophisticated cryptocurrency tracking application that provides real-time market data, portfolio management, and advanced technical analysis tools for crypto enthusiasts and traders.",
    image: "/cryptocurrency-trading-dashboard.png",
    tags: ["Vue.js", "Node.js", "WebSocket", "Chart.js"],
    demoUrl: "https://crypto.example.com",
    githubUrl: "https://github.com/example/crypto-tracker",
    features: [
      "Real-time price tracking",
      "Portfolio management",
      "Advanced charting tools",
      "Price alerts and notifications",
      "Market analysis and trends",
      "Multi-exchange support",
    ],
    technologies: ["Vue.js", "Node.js", "WebSocket", "Chart.js", "CoinGecko API", "MongoDB"],
    challenges:
      "Handling high-frequency real-time data updates while maintaining smooth chart animations and responsive user interface.",
    solution:
      "Implemented efficient data streaming with WebSockets and optimized chart rendering using canvas-based solutions for better performance.",
  },
  {
    id: "6",
    title: "Learning Management System",
    description:
      "An educational platform with course creation, progress tracking, and interactive learning experiences.",
    longDescription:
      "A comprehensive learning management system designed for educational institutions and online course creators. Features include course authoring tools, student progress tracking, interactive assessments, and collaborative learning environments.",
    image: "/online-learning-platform.png",
    tags: ["React", "Express", "PostgreSQL", "AWS"],
    demoUrl: "https://learn.example.com",
    githubUrl: "https://github.com/example/lms",
    features: [
      "Course creation and management",
      "Interactive video lessons",
      "Progress tracking and analytics",
      "Assessment and grading system",
      "Discussion forums",
      "Certificate generation",
    ],
    technologies: ["React", "Express.js", "PostgreSQL", "AWS S3", "FFmpeg", "Stripe"],
    challenges:
      "Creating a scalable video streaming solution while ensuring content security and providing smooth playback across different devices.",
    solution:
      "Implemented adaptive bitrate streaming with AWS CloudFront and DRM protection to ensure secure, high-quality video delivery across all platforms.",
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<string>("all")

  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)))
  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.tags.includes(filter))

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Portfolio
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              A showcase of my recent work, featuring modern web applications built with cutting-edge technologies and
              best practices.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              All Projects
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={filter === tag ? "default" : "outline"}
                onClick={() => setFilter(tag)}
                className="rounded-full"
              >
                {tag}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Card className="glass-card overflow-hidden h-full">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-3">
                          <Button size="sm" variant="secondary" className="rounded-full">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {project.githubUrl && (
                            <Button
                              size="sm"
                              variant="secondary"
                              className="rounded-full"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubUrl, "_blank")
                              }}
                            >
                              <Github className="h-4 w-4" />
                            </Button>
                          )}
                          {project.demoUrl && (
                            <Button
                              size="sm"
                              variant="secondary"
                              className="rounded-full"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.demoUrl, "_blank")
                              }}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" className="group bg-transparent">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
