
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <Card className="md:col-span-2 p-8 bg-gray-800/60 border border-gray-700">
              <CardContent className="pt-0">
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Founder of the first autonomous racing team at my university. I've led and contributed to award-winning projects in real-world and simulated robotics — from self-driving cars and mobile robots to full-stack autonomy in global competitions. My work bridges AI, control systems, computer vision, and embedded hardware.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    As a Senior Computer Engineering student at Benha University - Shoubra Faculty of Engineering, my expertise spans across Robotics, Autonomous Systems, Physical AI and Embedded Systems and I'm particularly fascinated by Physical AI and how intelligent systems can interact with the physical world.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Side Cards */}
            <div className="space-y-6">
              <Card className="p-6 bg-gray-800/60 border border-gray-700">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <Target className="h-5 w-5 text-blue-400 mr-2" />
                    <h4 className="font-bold text-white">Goals</h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Build intelligent, efficient, and deployable robotic systems. Lead innovation across autonomy, AI, and embedded hardware. Keep exploring — from racing robots to real-world impact.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-gray-800/60 border border-gray-700">
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
