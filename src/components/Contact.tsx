import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg">
            I'm always open to discussing new opportunities and collaborations
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border shadow-card animate-slide-up">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <p className="text-lg text-foreground/80">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary border-0 shadow-glow w-full"
                onClick={() => window.location.href = 'mailto:your.email@example.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 w-full"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 w-full"
                onClick={() => window.open('https://github.com', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 w-full"
                disabled
              >
                <MapPin className="mr-2 h-5 w-5" />
                Available Remotely
              </Button>
            </div>

            <div className="text-center pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © 2024 Portfolio. Built with React, TypeScript, and Tailwind CSS.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
