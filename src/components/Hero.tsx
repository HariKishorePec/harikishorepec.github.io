import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50 animate-pulse" />
              <img 
                src={profileImage} 
                alt="Hari Kishore - Software Development Engineer" 
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary shadow-glow"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Hari Kishore
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Software Development Engineer 2
            </p>
            <p className="text-lg text-foreground/70">
              Full Stack Developer | Microservices Architecture Specialist
            </p>
          </div>

          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Experienced SDE-2 with 4+ years of expertise in building scalable applications 
            using React, Node.js, Java, Python, and AWS. Passionate about creating efficient 
            solutions and delivering high-quality software.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-gradient-primary border-0 shadow-glow">
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
