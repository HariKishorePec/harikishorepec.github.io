import { Mail, Linkedin, Github, Code2Icon, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">Let's Connect</h2>
          <p className="text-muted-foreground text-lg">I'm always open to discussing new opportunities and collaborations</p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border shadow-card animate-slide-up">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <p className="text-lg text-foreground/80">Feel free to reach out for collaborations, opportunities, or just a friendly chat!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="mailto:harikishore025@gmail.com" rel="noopener noreferrer" className="w-full">
                <Button size="lg" className="bg-gradient-primary border-0 shadow-glow w-full" onClick={(e) => e.preventDefault()}>
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </Button>
              </a>

              <a href="/Hari_Kishore_Resume_5Y.pdf" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button size="lg" className="bg-gradient-primary border-0 shadow-glow w-full">
                  <LinkIcon className="mr-2 h-5 w-5" />
                  View Resume
                </Button>
              </a>

              <Button size="lg" variant="outline" className="border-primary/50 w-full hover:bg-primary/10" onClick={() => window.open("https://linkedin.com", "_blank")}>
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>

              <Button size="lg" variant="outline" className="border-primary/50 w-full hover:bg-primary/10" onClick={() => window.open("https://github.com", "_blank")}>
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>

              <Button size="lg" variant="outline" className="border-primary/50 w-full hover:bg-primary/10" onClick={() => window.open("https://stackoverflow.com/users/11887348/hari-kishore?tab=profile", "_blank")}>
                <Code2Icon className="mr-2 h-5 w-5" />
                Stack Overflow
              </Button>
            </div>

            <div className="text-center pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">© 2024 Portfolio. Built with React, TypeScript, and Tailwind CSS.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
