
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-zinc-950 relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <Card className="p-2 bg-zinc-900/50 border border-zinc-700 rounded-2xl transition-all duration-300 hover:bg-zinc-800/50 hover:border-zinc-600">
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/c09872d6-9123-48e8-a401-6e587557dfcf.png`} 
                alt="Hazem Abuelanin" 
                className="w-48 h-48 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              />
            </Card>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white transition-all duration-300 hover:text-blue-300">
              Hazem Abuelanin
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-gray-400 font-light transition-colors duration-300">
              Senior Computer Engineering Student
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
              Passionate about Robotics, Physical AI and Autonomous systems. Building innovative solutions 
              that bridge theory with real-world impact.
            </p>
          </div>

          {/* Email Contact */}
          <div className="py-4">
            <a 
              href="mailto:hazem.abuelanin@gmail.com"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              hazem.abuelanin@gmail.com
            </a>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button 
              variant="outline" 
              size="lg"
              className="border-zinc-600 text-gray-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-500 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://github.com/HazemAbuelanin', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-zinc-600 text-gray-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-500 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://www.linkedin.com/in/hazem-abuelanin-751b4421b/', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-zinc-600 text-gray-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-500 transition-all duration-300 hover:scale-105"
              onClick={() => {
                const baseUrl = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
                window.open(`${baseUrl}/hazem-abuelanin-resume.pdf`, '_blank');
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
