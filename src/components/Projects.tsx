
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Car, Globe, Smartphone, Brain, Database, Code } from "lucide-react";

const projects = [
  {
    title: "Autonomous Racing Vehicle",
    description: "Developed autonomous navigation system for Shell Eco-marathon competition. Implemented computer vision, path planning, and sensor fusion algorithms.",
    image: "/placeholder.svg",
    skills: ["Python", "OpenCV", "ROS", "Machine Learning", "Embedded Systems"],
    icon: Car,
    color: "from-blue-500 to-cyan-500",
    status: "Competition Winner",
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack web application with user authentication, payment integration, and admin dashboard. Built with modern web technologies.",
    image: "/placeholder.svg",
    skills: ["React", "Node.js", "MongoDB", "Stripe API", "TypeScript"],
    icon: Globe,
    color: "from-emerald-500 to-teal-500",
    status: "Production Ready",
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform mobile application for workout tracking with social features and progress analytics.",
    image: "/placeholder.svg",
    skills: ["React Native", "Firebase", "Redux", "REST APIs"],
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    status: "Published",
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    title: "AI Image Recognition",
    description: "Machine learning model for real-time object detection and classification using deep learning techniques.",
    image: "/placeholder.svg",
    skills: ["Python", "TensorFlow", "Computer Vision", "Deep Learning"],
    icon: Brain,
    color: "from-orange-500 to-red-500",
    status: "Research Project",
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard for business intelligence with real-time data visualization and reporting capabilities.",
    image: "/placeholder.svg",
    skills: ["React", "D3.js", "PostgreSQL", "Python", "API Development"],
    icon: Database,
    color: "from-indigo-500 to-purple-500",
    status: "Client Project",
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    title: "Open Source Library",
    description: "JavaScript utility library for form validation with 1000+ GitHub stars and active community contributions.",
    image: "/placeholder.svg",
    skills: ["JavaScript", "TypeScript", "Jest", "npm", "Documentation"],
    icon: Code,
    color: "from-green-500 to-emerald-500",
    status: "Open Source",
    links: {
      github: "#",
      demo: "#"
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A showcase of technical projects across different domains
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
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
