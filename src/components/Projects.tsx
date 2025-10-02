import { ExternalLink, Github, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Enterprise Microservices Platform",
    company: "Verizon",
    description: "Designed and implemented a scalable microservices architecture handling millions of requests daily. Built with React frontend and Java Spring Boot backend services.",
    technologies: ["React", "TypeScript", "Java", "Spring Boot", "Microservices", "REST APIs"],
    highlights: [
      "Reduced API response time by 40% through optimization",
      "Implemented CI/CD pipeline for automated deployments",
      "Handled 2M+ daily active users"
    ]
  },
  {
    title: "Cloud-Based Data Processing Pipeline",
    company: "ADP",
    description: "Developed an end-to-end data processing system using AWS services and PySpark for large-scale data analytics and reporting.",
    technologies: ["Python", "PySpark", "AWS", "Lambda", "S3", "ETL"],
    highlights: [
      "Processed 10TB+ of data daily",
      "Automated data workflows reducing manual effort by 70%",
      "Integrated real-time monitoring and alerting"
    ]
  },
  {
    title: "Full Stack HR Management System",
    company: "ADP",
    description: "Built a comprehensive HR management application with React frontend and Node.js backend, featuring employee management, payroll integration, and analytics dashboards.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Material-UI"],
    highlights: [
      "Served 50,000+ employees across multiple organizations",
      "Implemented role-based access control",
      "Real-time data synchronization"
    ]
  },
  {
    title: "API Gateway & Service Mesh",
    company: "ADP",
    description: "Designed and implemented an API gateway serving as a single entry point for microservices, with features like rate limiting, authentication, and request routing.",
    technologies: ["Node.js", "Express", "Redis", "JWT", "Docker", "Kubernetes"],
    highlights: [
      "Managed 500+ API endpoints",
      "Implemented OAuth 2.0 authentication",
      "99.9% uptime SLA achievement"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Key projects and contributions throughout my career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:shadow-card transition-all duration-300 flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                  <p className="text-sm text-primary font-semibold">{project.company}</p>
                </div>
              </div>

              <p className="text-foreground/70 mb-4 flex-grow">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                      <span className="text-primary mt-0.5">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-secondary text-foreground text-xs rounded-md border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-auto pt-4 border-t border-border">
                <Button size="sm" variant="outline" className="flex-1 border-primary/50">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
                <Button size="sm" variant="outline" className="flex-1 border-primary/50">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
