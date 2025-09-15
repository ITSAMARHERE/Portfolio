import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Database, Brain, Users, Award } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "Java", "JavaScript", "Python"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      skills: ["React", "React Native", "Next.js", "Node.js", "Express.js", "Spring", "Git", "GitHub", "Tailwind CSS", "Postman", "Socket.io", "NextAuth", "Clerk", "Firebase", "JWT", "Bcrypt", "Shadcn"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Databases/Cloud",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["Python (ML Projects)", "CNN", "Pandas", "NumPy", "TensorFlow"],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "Core CS Subjects",
      icon: Award,
      skills: ["OOPS", "DSA", "OS", "DBMS", "Computer Networks"],
      color: "bg-red-500/10 text-red-600"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Problem Solving", "Critical Thinking", "Leadership", "Teamwork", "Communication"],
      color: "bg-indigo-500/10 text-indigo-600"
    }
  ];

  return (
    <section className="py-20 px-4 soft-gradient">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Technologies and skills I've mastered throughout my journey as a developer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="elegant-shadow smooth-transition hover:shadow-lg hover:scale-105 border-primary/20"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs smooth-transition hover:bg-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;