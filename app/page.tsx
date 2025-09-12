"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { BlogSection } from "@/components/sections/blog-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { PageLoader } from "@/components/ui/page-loader"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Slightly faster load animation
    
    return () => clearTimeout(timer)
  }, [])
  
  // Mouse tracking for subtle interactive effects, now controlling CSS variables
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  // Intersection Observer for section animations - Kept as a robust solution
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          entry.target.classList.remove('animate-out')
        } else {
          entry.target.classList.add('animate-out')
          entry.target.classList.remove('animate-in')
        }
      })
    }, observerOptions)
    
    const sections = document.querySelectorAll('section[data-section]')
    sections.forEach((section) => observer.observe(section))
    
    return () => observer.disconnect()
  }, [isLoading])

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <>
      {/* Custom cursor effect - improved and more subtle */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference transition-all duration-150 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
        }}
      >
        <div className="w-full h-full rounded-full border border-white/50 scale-0 animate-pulse" 
             style={{ animationDuration: '3s' }} />
      </div>
      
      {/* Progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-40">
        <div 
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 ease-out"
          style={{ 
            width: `${Math.min(100, (window?.scrollY / (document?.documentElement?.scrollHeight - window?.innerHeight)) * 100 || 0)}%` 
          }}
        />
      </div>

      <main className="relative min-h-screen overflow-hidden">
        {/* Enhanced Navigation with backdrop blur */}
        <div className="relative z-30">
          <Navigation />
        </div>

        {/* Main content with staggered animations */}
        <div className="relative">
          {/* Hero Section */}
          <section 
            data-section="hero" 
            className="relative transform transition-all duration-1000 ease-out animate-in"
            style={{ '--stagger': '0ms' } as React.CSSProperties}
          >
            <HeroSection />
          </section>

          {/* About Section */}
          <section 
            data-section="about" 
            className="relative transform transition-all duration-1000 ease-out opacity-0 translate-y-20"
            style={{ '--stagger': '200ms' } as React.CSSProperties}
          >
            <AboutSection />
          </section>

          {/* Skills Section */}
          <section 
            data-section="skills" 
            className="relative transform transition-all duration-1000 ease-out opacity-0 translate-y-20"
            style={{ '--stagger': '400ms' } as React.CSSProperties}
          >
            <SkillsSection />
          </section>

          {/* Projects Section */}
          <section 
            data-section="projects" 
            className="relative transform transition-all duration-1000 ease-out opacity-0 translate-y-20"
            style={{ '--stagger': '600ms' } as React.CSSProperties}
          >
            <ProjectsSection />
          </section>

          {/* Blog Section */}
          <section 
            data-section="blog" 
            className="relative transform transition-all duration-1000 ease-out opacity-0 translate-y-20"
            style={{ '--stagger': '800ms' } as React.CSSProperties}
          >
            <BlogSection />
          </section>

          {/* Contact Section */}
          <section 
            data-section="contact" 
            className="relative transform transition-all duration-1000 ease-out opacity-0 translate-y-20"
            style={{ '--stagger': '1000ms' } as React.CSSProperties}
          >
            <ContactSection />
          </section>

          {/* Footer */}
          <section 
            data-section="footer" 
            className="relative transform transition-all duration-1000 ease-out opacity-0 translate-y-20"
            style={{ '--stagger': '1200ms' } as React.CSSProperties}
          >
            <Footer />
          </section>
        </div>

        {/* Enhanced Scroll to Top */}
        <ScrollToTop />
      </main>

      <style jsx global>{`
        /* Intersection Observer Animations */
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition-delay: var(--stagger, 0ms);
        }
        
        .animate-out {
          opacity: 0.7;
          transform: translateY(10px);
        }
      `}</style>
    </>
  )
}