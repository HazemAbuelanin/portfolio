
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Hazem Abuelanin
                </span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-gray-300 font-light">
                Senior Computer Engineering Student
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Passionate about Robotics, Physical AI and Autonomous systems. I build innovative solutions 
                that bridge theory with real-world impact, specializing in cutting-edge technologies that 
                shape the future of engineering.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                variant="outline" 
                className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
                onClick={() => window.open('https://github.com/HazemAbuelanin', '_blank')}
              >
                <Github className="mr-2 h-5 w-5 text-gray-300" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
                onClick={() => window.open('https://www.linkedin.com/in/hazem-abuelanin-751b4421b/', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5 text-gray-300" />
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5 text-gray-300" />
                Contact
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <Card className="p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl">
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/f65349ee-5df9-41e8-88cb-9179a45057b5.png`} 
                alt="Hazem Abuelanin" 
                className="w-80 h-80 object-cover rounded-xl"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
