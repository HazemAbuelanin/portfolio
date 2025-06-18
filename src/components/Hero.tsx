
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  👋 Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Hazem Abuelanin
                </span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-slate-600 font-light">
                Computer Engineering Student & Full-Stack Developer
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                {/* EDIT HERE: Change your introduction text */}
                Passionate about creating innovative digital solutions. I specialize in 
                web development, AI applications, and bringing ideas to life through code.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {/* EDIT HERE: Update these links with your actual URLs */}
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-lg transition-all duration-300">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-lg transition-all duration-300">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-lg transition-all duration-300">
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl">
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
