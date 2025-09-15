import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Intelligent Creation",
      location: "Pune",
      period: "08/2025 – Present",
      type: "Internship",
      responsibilities: [
        "Built a block-based interface using JavaScript improving user interactivity",
        "Applied OOP principles to enhance modularity and maintainability of software",
        "Optimized system performance, reducing load time by 20% for 1,000+ users"
      ],
      skills: ["JavaScript", "OOP", "Performance Optimization"],
      current: true
    },
    {
      title: "Data Analytics Intern",
      company: "Deloitte",
      location: "Australia (Virtual)",
      period: "07/2025",
      type: "Virtual Internship",
      responsibilities: [
        "Completed Deloitte's job simulation on data analysis & forensic technology",
        "Designed an interactive data dashboard in Tableau for business insights",
        "Used Excel to classify large datasets and draw actionable conclusions"
      ],
      skills: ["Tableau", "Excel", "Data Analysis", "Business Intelligence"],
      current: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Professional journey and internships that shaped my development skills
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className={`elegant-shadow smooth-transition hover:shadow-lg border-l-4 ${
                exp.current 
                  ? 'border-l-primary bg-primary/5' 
                  : 'border-l-muted hover:border-l-primary/50'
              }`}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <Briefcase className="h-6 w-6 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant={exp.current ? "default" : "secondary"}>
                      {exp.type}
                    </Badge>
                    {exp.current && (
                      <Badge variant="outline" className="border-primary text-primary">
                        Current
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;