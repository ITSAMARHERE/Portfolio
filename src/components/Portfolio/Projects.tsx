import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Github, Users, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SocialSphere",
      period: "05/2025 – 07/2025",
      description: "A modern forum platform with Supabase backend featuring authentication & real-time community features for 500+ users.",
      technologies: ["React", "TypeScript", "Vite", "Supabase", "Tailwind"],
      highlights: [
        "Real-time community features",
        "500+ active users",
        "Modern UI/UX design",
        "Secure authentication"
      ],
      metrics: {
        users: "500+",
        performance: "Real-time",
        type: "Forum Platform"
      },
      githubUrl: "https://github.com/ITSAMARHERE/SocialSphere",
      demoUrl: "https://social-sphere-smoky.vercel.app/"
    },
    {
      title: "Talka - Chat App",
      period: "01/2025 – 03/2025",
      description: "A secure chat application with real-time messaging & authentication, scaled to handle 200+ concurrent users across devices.",
      technologies: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      highlights: [
        "Real-time messaging",
        "200+ concurrent users",
        "Cross-device compatibility",
        "Secure authentication"
      ],
      metrics: {
        users: "200+",
        performance: "Real-time",
        type: "Chat Application"
      },
      githubUrl: "https://github.com/ITSAMARHERE/Talka",
      demoUrl: "https://talka.onrender.com/login"
    },
    {
      title: "ECommerce App with Admin Panel",
      period: "04/2025 – 06/2025",
      description: "A full-featured e-commerce platform with cart & admin panel, achieving 30% faster load times through optimized database queries.",
      technologies: ["React", "Redux Toolkit", "Tailwind", "MongoDB"],
      highlights: [
        "Complete admin panel",
        "Shopping cart functionality",
        "30% faster load times",
        "Optimized database queries"
      ],
      metrics: {
        performance: "30% faster",
        improvement: "Load time",
        type: "E-commerce"
      },
      githubUrl: "https://github.com/ITSAMARHERE/ECommerce-",
      demoUrl: "https://ecommerce-1-sur7.onrender.com/auth/login"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 soft-gradient">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What have I <span className="text-primary">created?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore some of the projects I've built, showcasing my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="elegant-shadow smooth-transition hover:shadow-lg hover:scale-105 border-primary/20 group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {project.period}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {project.metrics.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary smooth-transition">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <Users className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-sm font-semibold text-foreground">
                      {project.metrics.users || project.metrics.performance}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {project.metrics.users ? "Users" : "Performance"}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-secondary/10 rounded-lg">
                    <Zap className="h-5 w-5 text-secondary mx-auto mb-1" />
                    <p className="text-sm font-semibold text-foreground">
                      {project.metrics.improvement || project.metrics.performance}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {project.metrics.improvement ? "Improvement" : "Features"}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-sm">Key Features</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-sm">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="sm" variant="outline" className="w-full text-xs">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  </a>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="sm" variant="default" className="w-full text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;