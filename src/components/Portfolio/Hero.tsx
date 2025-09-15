import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import profile2 from "@/assets/profile-2.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 hero-gradient">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-2">
              <p className="text-white/90 text-lg font-medium">Hi There I'm</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Amar <span className="text-white/90">Pal</span>
              </h1>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-4">
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  Software Engineer
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  AI/ML Developer
                </Badge>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                I love being a <span className="text-white/90">developer!</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                Aspiring Software Engineer & AI/ML Developer with strong full-stack development expertise. 
                Skilled in React, Node.js, and Python ML projects, with experience in building scalable applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="mailto:tmsl.aiml.amarpal@gmail.com">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="glow-effect smooth-transition hover:scale-105"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Button>
              </a>
              <a href="#projects">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 smooth-transition"
                >
                  View Projects
                </Button>
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://github.com/ITSAMARHERE" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/amar-pal-a945ba250" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:tmsl.aiml.amarpal@gmail.com">
                <Button size="icon" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
              <a href="tel:9693637388">
                <Button size="icon" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                  <Phone className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Single Image Display */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group w-full md:w-3/4 lg:w-full max-w-sm sm:max-w-md">
              <div className="absolute inset-0 bg-white/20 rounded-2xl transform rotate-3 group-hover:rotate-6 smooth-transition z-0"></div>
              
              <img 
                src={profile2} 
                alt="Amar Pal - Professional photo" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover object-center smooth-transition group-hover:scale-105 z-10"
                style={{ maxHeight: '450px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;