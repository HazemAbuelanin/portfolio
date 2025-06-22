
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Autonomous Racing Car - F1TENTH",
    description: "High-speed autonomous racing vehicle with advanced SLAM, path planning, and real-time control systems.",
    image: "/f1tenth.mp4",
    technologies: ["ROS2", "Python", "SLAM", "Computer Vision", "Control Systems"],
    slug: "f1tenth-racing",
    githubUrl: "https://github.com/HazemAbuelanin",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Mobile Robot Navigation System",
    description: "Advanced navigation system for mobile robots with obstacle avoidance and path optimization.",
    image: "/Car.jpeg",
    technologies: ["ROS", "Python", "Computer Vision", "Machine Learning"],
    slug: "mobile-robot-navigation",
    githubUrl: "https://github.com/HazemAbuelanin",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Smart PCB Design & IoT Integration",
    description: "Custom PCB design with embedded systems programming for IoT applications and sensor networks.",
    image: "/PCB.jpeg",
    technologies: ["Altium Designer", "C/C++", "IoT", "Embedded Systems"],
    slug: "smart-pcb-iot",
    githubUrl: "https://github.com/HazemAbuelanin",
    liveUrl: "#"
  }
];

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (slug: string) => {
    navigate(`/project/${slug}`);
  };

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-gray-900/80 border border-gray-800 hover:bg-gray-900 transition-all duration-300 cursor-pointer group hover:scale-[1.02]"
              onClick={() => handleProjectClick(project.slug)}
            >
              <div className="aspect-video bg-gray-800 rounded-t-lg overflow-hidden">
                {project.image.endsWith('.mp4') ? (
                  <video 
                    src={project.image} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    muted 
                    loop 
                    autoPlay
                  />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              
              <CardContent className="p-5">
                <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubUrl, '_blank');
                    }}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.slug);
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
