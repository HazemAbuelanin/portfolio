
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  👋 Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Hazem Abuelanin
                </span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-gray-300 font-light">
                Computer Engineering Student & Full-Stack Developer
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                {/* EDIT HERE: Change your introduction text */}
                Passionate computer engineering student specializing in web development, AI applications, 
                and autonomous systems. I build innovative solutions that bridge theory with real-world impact.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {/* EDIT HERE: Update these links with your actual URLs */}
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
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
              {/* EDIT HERE: Replace this placeholder with your actual photo */}
              {/* To add your photo: 
                  1. Upload your image to the public folder 
                  2. Replace the div below with: <img src="/your-photo.jpg" alt="Hazem Abuelanin" className="w-80 h-80 object-cover rounded-xl" />
              */}
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-6xl font-bold shadow-inner">
                HA
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
