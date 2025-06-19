
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Hazem Abuelanin
        </h1>
        <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Computer Engineering Student Specializing in Autonomous Systems, Robotics & AI
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            View Projects
          </Button>
          <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
            Contact Me
          </Button>
        </div>
        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
