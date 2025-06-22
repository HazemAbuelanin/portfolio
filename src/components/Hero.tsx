
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden pt-16">
      {/* Simplified background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <Card className="p-2 bg-gray-800/50 border border-gray-700 rounded-2xl">
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/f65349ee-5df9-41e8-88cb-9179a45057b5.png`} 
                alt="Hazem Abuelanin" 
                className="w-48 h-48 object-cover rounded-xl"
              />
            </Card>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white">
              Hazem Abuelanin
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-gray-400 font-light">
              Senior Computer Engineering Student
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Passionate about Robotics, Physical AI and Autonomous systems. Building innovative solutions 
              that bridge theory with real-world impact.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={() => window.open('https://github.com/HazemAbuelanin', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={() => window.open('https://www.linkedin.com/in/hazem-abuelanin-751b4421b/', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={() => {
                const baseUrl = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
                window.open(`${baseUrl}/hazem-abuelanin-resume.pdf`, '_blank');
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
