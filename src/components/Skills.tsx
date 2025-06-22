
import { Badge } from "@/components/ui/badge";

const skills = [
  "Python", "C/C++", "Java", "Dart/Flutter", "MATLAB", "Lua", "Linux", "ROS1", "ROS2", 
  "SLAM", "Sensor Fusion", "Motion Planning", "Control Systems", "Computer Vision", 
  "Deep Learning", "Machine Learning", "NLP", "Embedded Systems Programming", 
  "Firmware Development", "Microcontroller Programming", "PCB Design & Layout", 
  "Circuit Analysis & Simulation", "Git", "Docker", "Altium Designer", "Proteus", 
  "Gazebo", "CARLA", "CoppeliaSim", "Agile Development"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-sm bg-gray-800/60 text-gray-200 hover:bg-gray-700 border border-gray-700 transition-all duration-300 hover:scale-105"
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
