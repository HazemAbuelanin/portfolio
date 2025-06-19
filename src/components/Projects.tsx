
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    slug: "autonomous-vehicle-system",
    title: "Autonomous Vehicle System",
    description: "Advanced autonomous driving system with computer vision and machine learning capabilities.",
    image: "/placeholder.svg",
    technologies: ["Python", "OpenCV", "TensorFlow", "ROS"]
  },
  {
    id: 2,
    slug: "robotics-control-system",
    title: "Robotics Control System",
    description: "Real-time control system for industrial robotics applications.",
    image: "/placeholder.svg",
    technologies: ["C++", "ROS", "Embedded Systems"]
  },
  {
    id: 3,
    slug: "ai-computer-vision",
    title: "AI Computer Vision Platform",
    description: "Deep learning platform for object detection and recognition.",
    image: "/placeholder.svg",
    technologies: ["Python", "PyTorch", "OpenCV", "FastAPI"]
  }
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions in robotics, autonomous systems, and AI
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer group"
                onClick={() => navigate(`/project/${project.slug}`)}
              >
                <CardHeader className="p-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3"
              onClick={() => window.open('https://github.com/HazemAbuelanin', '_blank')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View All on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
