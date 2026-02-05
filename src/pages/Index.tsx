import Navbar from "@/components/Portfolio/Navbar";
import Hero from "@/components/Portfolio/Hero";
import About from "@/components/Portfolio/About";
import Skills from "@/components/Portfolio/Skills";
import Experience from "@/components/Portfolio/Experience";
import Projects from "@/components/Portfolio/Projects";
import Certifications from "@/components/Portfolio/Certifications";
import Contact from "@/components/Portfolio/Contact";
import Footer from "@/components/Portfolio/Footer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
