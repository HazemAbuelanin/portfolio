
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Car, Cpu, Zap } from "lucide-react";

const projects = [
  {
    title: "Autonomous Racing Vehicle",
    description: "Developed the initial hardware design framework for the college's first autonomous vehicle, integrating sensors, control systems, and AI algorithms.",
    technologies: ["ROS", "Python", "C++", "LIDAR", "Computer Vision"],
    icon: Car,
    color: "from-blue-500 to-cyan-500",
    status: "Competition Ready"
  },
  {
    title: "Embedded Systems Framework",
    description: "Designed comprehensive embedded systems architecture for autonomous vehicle control, including real-time processing and sensor fusion.",
    technologies: ["Embedded C", "STM32", "Real-time OS", "CAN Bus"],
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
    status: "Production"
  },
  {
    title: "Autonomous Navigation Stack",
    description: "Implemented complete navigation and path planning system for autonomous racing, including SLAM and trajectory optimization.",
    technologies: ["ROS2", "SLAM", "Path Planning", "Control Theory"],
    icon: Zap,
    color: "from-emerald-500 to-teal-500",
    status: "Active Development"
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
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-slate-50 to-white">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-slate-800 mb-2">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
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
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
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
