import { Code2, Database, Cloud, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["React.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Responsive Design"]
  },
  {
    icon: Layers,
    title: "Backend Development",
    skills: ["Node.js", "Java", "Spring Boot", "Python", "Express.js", "REST APIs"]
  },
  {
    icon: Database,
    title: "Data & Processing",
    skills: ["PySpark", "SQL", "Data Pipelines", "ETL", "Database Design"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS", "Microservices", "CI/CD", "Docker", "System Architecture"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:shadow-card transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <category.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-secondary text-foreground rounded-lg border border-primary/20 hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
