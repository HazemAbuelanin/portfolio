
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Car, Globe, Smartphone, Brain, Database, Code } from "lucide-react";

const projects = [
  {
    title: "Autonomous Racing Vehicle",
    description: "Developed the hardware design framework for autonomous vehicle systems, integrating sensors, control systems, and AI algorithms for competitive racing.",
    technologies: ["ROS", "Python", "C++", "LIDAR", "Computer Vision"],
    icon: Car,
    color: "from-blue-500 to-cyan-500",
    status: "Competition Ready",
    category: "Robotics & AI",
    media: {
      type: "video",
      url: "https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      projectUrl: "https://github.com/hazemabuelanin/autonomous-racing"
    }
  },
  {
    title: "Full-Stack Web Application",
    description: "Built a modern web application with React frontend and Node.js backend, featuring user authentication, real-time updates, and responsive design.",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    icon: Globe,
    color: "from-emerald-500 to-teal-500",
    status: "Production",
    category: "Web Development",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      projectUrl: "https://github.com/hazemabuelanin/web-app"
    }
  },
  {
    title: "Mobile App Development",
    description: "Created cross-platform mobile application using React Native with features like offline storage, push notifications, and seamless user experience.",
    technologies: ["React Native", "JavaScript", "Firebase", "Redux"],
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    status: "App Store",
    category: "Mobile Development",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      projectUrl: "https://github.com/hazemabuelanin/mobile-app"
    }
  },
  {
    title: "Machine Learning Research",
    description: "Conducted research on deep learning algorithms for image recognition, achieving improved accuracy rates and publishing findings in academic conferences.",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Jupyter"],
    icon: Brain,
    color: "from-orange-500 to-red-500",
    status: "Published",
    category: "Research & AI",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      projectUrl: "https://github.com/hazemabuelanin/ml-research"
    }
  },
  {
    title: "Database Management System",
    description: "Designed and implemented a scalable database system with optimized queries, data modeling, and backup strategies for enterprise applications.",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "SQL", "Docker"],
    icon: Database,
    color: "from-indigo-500 to-purple-500",
    status: "Enterprise",
    category: "Backend & Database",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
      projectUrl: "https://github.com/hazemabuelanin/database-system"
    }
  },
  {
    title: "Open Source Contributions",
    description: "Active contributor to various open source projects, including bug fixes, feature implementations, and documentation improvements.",
    technologies: ["JavaScript", "Python", "Go", "Git", "CI/CD"],
    icon: Code,
    color: "from-green-500 to-emerald-500",
    status: "Ongoing",
    category: "Open Source",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
      projectUrl: "https://github.com/hazemabuelanin"
    }
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my technical projects across web development, mobile apps, AI research, and more
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
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
                    <div className="text-right">
                      <Badge variant="outline" className="text-xs mb-1">
                        {project.status}
                      </Badge>
                      <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                        {project.category}
                      </Badge>
                    </div>
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
                      View
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
