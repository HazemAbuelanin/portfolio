
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C/C++", "Java", "Dart/Flutter", "MATLAB", "Lua"]
  },
  {
    title: "Robotics & Control",
    skills: ["Linux", "ROS1", "ROS2", "SLAM", "Sensor Fusion", "Motion Planning", "Control Systems"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["Computer Vision", "Deep Learning", "Machine Learning", "NLP"]
  },
  {
    title: "Embedded Systems",
    skills: ["Embedded Systems Programming", "Firmware Development", "Microcontroller Programming"]
  },
  {
    title: "Hardware Design",
    skills: ["PCB Design & Layout", "Circuit Analysis & Simulation", "Altium Designer", "Proteus"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "Gazebo", "CARLA", "CoppeliaSim", "Agile Development"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 transition-colors duration-300">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto transition-all duration-300"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-white mb-4 transition-colors duration-300">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-sm bg-zinc-800 text-gray-200 hover:bg-zinc-700 border border-zinc-600 transition-all duration-300 hover:scale-105 hover:border-zinc-500"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
