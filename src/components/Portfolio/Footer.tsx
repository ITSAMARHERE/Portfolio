import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Amar<span className="text-primary">Pal</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Aspiring Software Engineer & AI/ML Developer passionate about building 
              innovative solutions and creating impactful technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Experience", href: "#experience" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-background/80 hover:text-primary smooth-transition text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Connect</h3>
            <div className="space-y-2">
              <p className="text-background/80 text-sm">tmsl.aiml.amarpal@gmail.com</p>
              <p className="text-background/80 text-sm">+91 9693637388</p>
              <p className="text-background/80 text-sm">Kolkata, West Bengal</p>
            </div>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="text-background/80 hover:text-primary hover:bg-background/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/80 hover:text-primary hover:bg-background/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/80 hover:text-primary hover:bg-background/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm text-center md:text-left">
            © 2025 Amar Pal. All rights reserved.
          </p>
          <p className="text-background/60 text-sm flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-primary" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;