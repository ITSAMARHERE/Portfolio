"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, ExternalLink } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  readTime: string
  publishedAt: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications with TypeScript",
    excerpt:
      "Learn how to structure large React applications using TypeScript, best practices for component architecture, and advanced patterns for maintainable code.",
    content: "Full article content here...",
    image: "/blog-react-typescript.png",
    category: "Development",
    readTime: "8 min read",
    publishedAt: "2024-01-15",
    slug: "building-scalable-react-applications-typescript",
  },
  {
    id: "2",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping web development, from AI integration to new frameworks, and how they'll impact the industry in the coming year.",
    content: "Full article content here...",
    image: "/blog-web-trends-2024.png",
    category: "Technology",
    readTime: "6 min read",
    publishedAt: "2024-01-10",
    slug: "future-web-development-trends-2024",
  },
  {
    id: "3",
    title: "Optimizing Performance in Next.js Applications",
    excerpt:
      "Discover advanced techniques for improving your Next.js app performance, including code splitting, image optimization, and caching strategies.",
    content: "Full article content here...",
    image: "/blog-nextjs-performance.png",
    category: "Performance",
    readTime: "10 min read",
    publishedAt: "2024-01-05",
    slug: "optimizing-performance-nextjs-applications",
  },
  {
    id: "4",
    title: "Mastering CSS Grid and Flexbox for Modern Layouts",
    excerpt:
      "A comprehensive guide to creating responsive, flexible layouts using CSS Grid and Flexbox, with practical examples and best practices.",
    content: "Full article content here...",
    image: "/blog-css-grid-flexbox.png",
    category: "CSS",
    readTime: "7 min read",
    publishedAt: "2023-12-28",
    slug: "mastering-css-grid-flexbox-modern-layouts",
  },
  {
    id: "5",
    title: "Building Real-time Applications with WebSockets",
    excerpt:
      "Learn how to implement real-time features in your web applications using WebSockets, including chat systems, live updates, and collaborative tools.",
    content: "Full article content here...",
    image: "/blog-websockets-realtime.png",
    category: "Backend",
    readTime: "12 min read",
    publishedAt: "2023-12-20",
    slug: "building-realtime-applications-websockets",
  },
  {
    id: "6",
    title: "Design Systems: Creating Consistent User Experiences",
    excerpt:
      "Explore the principles of building effective design systems that scale across teams and products, ensuring consistency and efficiency.",
    content: "Full article content here...",
    image: "/blog-design-systems.png",
    category: "Design",
    readTime: "9 min read",
    publishedAt: "2023-12-15",
    slug: "design-systems-consistent-user-experiences",
  },
]

export function BlogSection() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section id="blog" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />

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
            <Badge variant="outline" className="mb-4 text-secondary border-secondary/20">
              Blog & Insights
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Latest{" "}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Sharing insights, tutorials, and thoughts on web development, technology trends, and best practices in
              modern software development.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="glass-card overflow-hidden group cursor-pointer">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <Badge variant="secondary">{blogPosts[0].category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(blogPosts[0].publishedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                  <Button variant="outline" className="self-start group/btn bg-transparent">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <Card className="glass-card overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                    <Button variant="ghost" size="sm" className="p-0 h-auto font-medium group/btn">
                      Read Article
                      <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button variant="outline" size="lg" className="group bg-transparent">
              View All Articles
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
