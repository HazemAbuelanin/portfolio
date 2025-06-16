
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Car, Cpu, Zap, Play } from "lucide-react";

const projects = [
  {
    title: "Autonomous Racing Vehicle",
    description: "Developed the initial hardware design framework for the college's first autonomous vehicle, integrating sensors, control systems, and AI algorithms.",
    technologies: ["ROS", "Python", "C++", "LIDAR", "Computer Vision"],
    icon: Car,
    color: "from-blue-500 to-cyan-500",
    status: "Competition Ready",
    media: {
      type: "video",
      url: "https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      projectUrl: "https://github.com/hazemabuelanin/autonomous-racing"
    }
  },
  {
    title: "Embedded Systems Framework",
    description: "Designed comprehensive embedded systems architecture for autonomous vehicle control, including real-time processing and sensor fusion.",
    technologies: ["Embedded C", "STM32", "Real-time OS", "CAN Bus"],
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
    status: "Production",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      projectUrl: "https://github.com/hazemabuelanin/embedded-framework"
    }
  },
  {
    title: "Autonomous Navigation Stack",
    description: "Implemented complete navigation and path planning system for autonomous racing, including SLAM and trajectory optimization.",
    technologies: ["ROS2", "SLAM", "Path Planning", "Control Theory"],
    icon: Zap,
    color: "from-emerald-500 to-teal-500",
    status: "Active Development",
    media: {
      type: "video",
      url: "https://player.vimeo.com/video/159053975?autoplay=1&loop=1&muted=1",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      projectUrl: "https://github.com/hazemabuelanin/navigation-stack"
    }
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Technical Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Innovative engineering solutions in autonomous vehicle technology
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
                {/* Media Section */}
                <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => window.open(project.media.projectUrl, '_blank')}>
                  {project.media.type === "video" ? (
                    <div className="relative w-full h-full">
                      <iframe
                        src={project.media.url}
                        className="w-full h-full object-cover"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <Play className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={48} />
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={project.media.url}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                      </div>
                    </div>
                  )}
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-slate-800 mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1" onClick={() => window.open('https://github.com/hazemabuelanin', '_blank')}>
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1" onClick={() => window.open(project.media.projectUrl, '_blank')}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
