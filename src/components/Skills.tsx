
import { Badge } from "@/components/ui/badge";

const skills = [
  "Python", "C/C++", "Java", "Dart/Flutter", "MATLAB", "Lua", "Linux", 
  "ROS1", "ROS2", "SLAM", "Sensor Fusion", "Motion Planning", "Control Systems", 
  "Computer Vision", "Deep Learning", "Machine Learning - NLP", 
  "Embedded Systems Programming", "Firmware Development", "Microcontroller Programming", 
  "PCB Design & Layout", "Circuit Analysis & Simulation", "Git", "Docker", 
  "Altium Designer", "Proteus", "Gazebo", "CARLA", "CoppeliaSim", "Agile Development"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning frontend, backend, mobile development, 
            robotics, AI, and autonomous systems
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-sm bg-gray-800/50 text-gray-200 hover:bg-gray-700/50 transition-colors font-medium px-4 py-2 border border-gray-600 hover:border-blue-500/50"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
