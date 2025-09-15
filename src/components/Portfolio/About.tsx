import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Get to know more about my background, education, and what drives my passion for technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <Card className="elegant-shadow smooth-transition hover:shadow-lg border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Education</h3>
              </div>
              <div className="space-y-4 text-left">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">B.Tech in CSE (AI/ML)</h4>
                  <p className="text-muted-foreground text-sm">Techno Main Salt Lake</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">2022 - Present</span>
                  </div>
                  <Badge variant="secondary" className="mt-2">CGPA: 7.36</Badge>
                </div>
                <div className="border-l-4 border-muted pl-4">
                  <h4 className="font-semibold text-foreground">Higher Secondary</h4>
                  <p className="text-muted-foreground text-sm">B.D. College</p>
                  <Badge variant="outline" className="mt-2">65.8%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location & Contact */}
          <Card className="elegant-shadow smooth-transition hover:shadow-lg border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Location</h3>
              </div>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-lg font-semibold text-foreground">Kolkata, West Bengal</p>
                  <p className="text-muted-foreground">India</p>
                </div>
                <div className="space-y-2">
                  <div className="text-sm">
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground break-all">tmsl.aiml.amarpal@gmail.com</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+91 9693637388</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bio */}
          <Card className="elegant-shadow smooth-transition hover:shadow-lg border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Profile</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Aspiring Software Engineer & AI/ML Developer with strong full-stack development expertise. 
                Skilled in React, Node.js, and Python ML projects, with experience in building scalable applications, 
                optimizing performance, and applying data-driven solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm mt-4">
                Proven adaptability, leadership, and teamwork through internships and as Management Co-Head 
                at technOTHARSH (Official Sports Society of Techno Main Salt Lake).
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;