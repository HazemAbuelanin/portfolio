import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Founder of the first autonomous racing team at my university. I've led and contributed to award-winning projects in real-world and simulated robotics — from self-driving cars and mobile robots to full-stack autonomy in global competitions. My work bridges AI, control systems, computer vision, and embedded hardware.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="md:col-span-2 p-8 border border-gray-700 bg-gradient-to-br from-gray-800 to-slate-800 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-0">
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    As a Senior Computer Engineering student at Benha University - Shoubra Faculty of Engineering, my expertise spans across Robotics, Autonomous Systems, Physical AI and Embedded Systems and I'm particularly fascinated by Physical AI and how intelligent systems can interact with the physical world.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    My goal is to contribute to the advancement of robotics and autonomous technologies that will shape our future. Through competitive robotics and real-world deployments, I continue pushing the boundaries of what's possible in autonomous systems.
                  </p>
                  
                  {/* Social Links with Resume Download */}
                  <div className="flex gap-4 mt-6">
                    <Button 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/resume.pdf';
                        link.download = 'Hazem_Abuelanin_Resume.pdf';
                        link.click();
                      }}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Resume
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 border border-gray-700 bg-gradient-to-br from-gray-700/30 to-slate-700/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <Target className="h-5 w-5 text-blue-400 mr-2" />
                    <h4 className="font-bold text-white">Goals</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Build intelligent, efficient, and deployable robotic systems. Lead innovation across autonomy, AI, and embedded hardware. Keep exploring — from racing robots to real-world impact.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 border border-gray-700 bg-gradient-to-br from-slate-700/30 to-gray-700/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <Heart className="h-5 w-5 text-purple-400 mr-2" />
                    <h4 className="font-bold text-white">Interests</h4>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Autonomous Vehicles & Robotics</li>
                    <li>• AI for Real-World Systems</li>
                    <li>• Embedded & Energy-Efficient Systems</li>
                    <li>• Digital Twins & Simulation</li>
                    <li>• Full-Stack System Architecture</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
