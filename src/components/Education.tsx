import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic background and qualifications
          </p>
        </div>

        <Card className="p-8 bg-card border-border hover:shadow-card transition-all duration-300 animate-slide-up">
          <div className="flex items-start gap-4">
            <div className="p-4 bg-gradient-primary rounded-lg">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Bachelor of Technology in Computer Science
                  </h3>
                  <p className="text-lg text-primary font-semibold">
                    Pondicherry Technological University (PTU)
                  </p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">2020</span>
                </div>
              </div>

              <div className="space-y-2 text-foreground/70">
                <p>
                  Graduated with a strong foundation in computer science fundamentals, 
                  including data structures, algorithms, software engineering, and database systems.
                </p>
                <p className="mt-4">
                  <span className="text-foreground font-semibold">Key Areas:</span> Software Development, 
                  Web Technologies, Database Management, System Architecture, Programming Languages
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;
