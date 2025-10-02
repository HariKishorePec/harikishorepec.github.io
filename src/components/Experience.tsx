import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    company: "Verizon",
    role: "Software Development Engineer 2",
    period: "Jul 2023 - Present",
    description: "Building robust frontend applications and backend services",
    technologies: ["React", "TypeScript", "Java", "Spring Boot", "REST APIs"],
    highlights: [
      "Developed scalable web applications using React and TypeScript",
      "Built and maintained backend services using Java Spring Boot",
      "Collaborated with cross-functional teams to deliver high-quality features",
      "Implemented responsive UI components following best practices"
    ]
  },
  {
    company: "ADP",
    role: "Associate Application Developer",
    period: "Sept 2020 - Jul 2023",
    description: "Full-stack development with focus on microservices architecture",
    technologies: ["React", "Node.js", "Python", "AWS", "PySpark", "Microservices"],
    highlights: [
      "Designed and implemented microservices architecture for scalable applications",
      "Developed frontend applications using React with modern design patterns",
      "Built RESTful APIs and backend services using Node.js",
      "Worked with AWS cloud services for deployment and infrastructure",
      "Implemented data processing pipelines using Python and PySpark",
      "Optimized application performance and database queries"
    ]
  },
  {
    company: "ADP",
    role: "Software Engineering Intern",
    period: "Jan 2020 - Aug 2020",
    description: "Full-stack development internship focusing on modern web technologies",
    technologies: ["React.js", "Node.js", "REST APIs", "JavaScript"],
    highlights: [
      "Developed interactive web applications using React.js",
      "Created RESTful APIs using Node.js and Express",
      "Collaborated with senior developers on production projects",
      "Learned industry best practices for code quality and testing"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey in software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-6 md:p-8 bg-card border-border hover:shadow-card transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <p className="text-lg text-primary font-semibold">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <p className="text-foreground/80 mb-4">{exp.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-foreground/70">
                      <span className="text-primary mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full border border-primary/20"
                  >
                    {tech}
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

export default Experience;
