
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Hazem Abuelanin
              </h1>
              <h2 className="text-2xl lg:text-3xl text-blue-300 font-light">
                Computer Engineering Student & Developer
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto lg:mx-0"></div>
            </div>
            
            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-2xl">
              Passionate computer engineering student with expertise in software development, 
              embedded systems, and emerging technologies. Building innovative solutions across 
              web development, autonomous systems, and research projects.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg transition-all duration-300">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button variant="outline" className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-6 py-3 rounded-lg transition-all duration-300">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <Card className="p-2 bg-white/10 backdrop-blur-sm border-white/20 hover:scale-105 transition-transform duration-300">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-lg flex items-center justify-center text-6xl font-bold text-white">
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
