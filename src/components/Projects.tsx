import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Car, Globe, Smartphone, Brain, Database, Code, Star, Calendar } from "lucide-react";

// EDIT HERE: Add, remove, or modify your projects
// Each project should have: title, description, image, skills, icon, color, status, github, demo, featured, date
const projects = [
  {
    title: "Autonomous Racing Vehicle",
    description: "Advanced autonomous navigation system for Shell Eco-marathon competition featuring computer vision, path planning, and sensor fusion algorithms for optimal racing performance.",
    image: "/placeholder.svg", // REPLACE: Add your project image to public folder and update path
    skills: ["Python", "OpenCV", "ROS", "Machine Learning", "Embedded Systems", "Computer Vision"],
    icon: Car,
    color: "from-blue-500 to-cyan-400",
    bgColor: "from-blue-50 to-cyan-50",
    status: "Competition Winner",
    github: "#", // REPLACE: Add your GitHub repository URL
    demo: "#", // REPLACE: Add your demo/live site URL
    featured: true,
    date: "2023"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack responsive e-commerce application with secure user authentication, integrated payment processing, comprehensive admin dashboard, and real-time inventory management.",
    image: "/placeholder.svg", // REPLACE: Add your project image
    skills: ["React", "Node.js", "MongoDB", "Stripe API", "TypeScript", "Tailwind CSS"],
    icon: Globe,
    color: "from-emerald-500 to-teal-400",
    bgColor: "from-emerald-50 to-teal-50",
    status: "Production Ready",
    github: "#", // REPLACE: Add your GitHub URL
    demo: "#", // REPLACE: Add your demo URL
    featured: true,
    date: "2023"
  },
  {
    title: "AI-Powered Fitness App",
    description: "Smart mobile fitness application with AI workout recommendations, social features, progress analytics, and personalized training plans based on user performance data.",
    image: "/placeholder.svg", // REPLACE: Add your project image
    skills: ["React Native", "Firebase", "TensorFlow", "Redux", "REST APIs", "Machine Learning"],
    icon: Smartphone,
    color: "from-purple-500 to-pink-400",
    bgColor: "from-purple-50 to-pink-50",
    status: "App Store",
    github: "#", // REPLACE: Add your GitHub URL
    demo: "#", // REPLACE: Add your app store URL
    featured: true,
    date: "2023"
  },
  {
    title: "Computer Vision Platform",
    description: "Real-time object detection and classification system using deep learning. Supports multiple model architectures and provides REST API for integration with other applications.",
    image: "/placeholder.svg", // REPLACE: Add your project image
    skills: ["Python", "TensorFlow", "OpenCV", "FastAPI", "Docker", "Deep Learning"],
    icon: Brain,
    color: "from-orange-500 to-red-400",
    bgColor: "from-orange-50 to-red-50",
    status: "Research Project",
    github: "#", // REPLACE: Add your GitHub URL
    demo: "#", // REPLACE: Add your demo URL
    featured: false,
    date: "2023"
  },
  {
    title: "Business Analytics Dashboard",
    description: "Interactive real-time dashboard for business intelligence with advanced data visualization, custom reporting capabilities, and automated insights generation.",
    image: "/placeholder.svg", // REPLACE: Add your project image
    skills: ["React", "D3.js", "PostgreSQL", "Python", "Express.js", "Chart.js"],
    icon: Database,
    color: "from-indigo-500 to-purple-400",
    bgColor: "from-indigo-50 to-purple-50",
    status: "Client Project",
    github: "#", // REPLACE: Add your GitHub URL
    demo: "#", // REPLACE: Add your demo URL
    featured: false,
    date: "2022"
  },
  {
    title: "Open Source Form Library",
    description: "Lightweight, accessible form validation library for React applications. Features TypeScript support, custom validators, and comprehensive documentation with 1000+ GitHub stars.",
    image: "/placeholder.svg", // REPLACE: Add your project image
    skills: ["JavaScript", "TypeScript", "React", "Jest", "npm", "Documentation"],
    icon: Code,
    color: "from-green-500 to-emerald-400",
    bgColor: "from-green-50 to-emerald-50",
    status: "Open Source",
    github: "#", // REPLACE: Add your GitHub URL
    demo: "#", // REPLACE: Add your npm/demo URL
    featured: false,
    date: "2022"
  }
];

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical projects across web development, mobile apps, 
            AI/ML, and open-source contributions
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8"></div>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <Star className="h-6 w-6 text-yellow-500 mr-2" />
            <h3 className="text-2xl font-bold text-slate-800">Featured Work</h3>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-0 bg-gradient-to-br ${project.bgColor}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs font-medium bg-white/80">
                          {project.status}
                        </Badge>
                        <div className="flex items-center text-xs text-slate-500 mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          {project.date}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {project.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs bg-white/80 text-slate-700 font-medium">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <Button size="sm" variant="outline" className="flex-1 hover:bg-slate-50">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm" className={`flex-1 bg-gradient-to-r ${project.color} hover:opacity-90 text-white border-0`}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-12">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {otherProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br ${project.bgColor}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs bg-white/80">
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-slate-800 leading-tight">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-slate-600 text-sm leading-relaxed">
                      {project.description.substring(0, 120)}...
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.skills.slice(0, 4).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs bg-white/80 text-slate-700">
                          {skill}
                        </Badge>
                      ))}
                      {project.skills.length > 4 && (
                        <Badge variant="secondary" className="text-xs bg-white/80 text-slate-500">
                          +{project.skills.length - 4}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2 pt-1">
                      <Button size="sm" variant="outline" className="flex-1 text-xs hover:bg-white">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-xs hover:bg-white">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">Want to see more of my work?</p>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
            <Github className="mr-2 h-5 w-5" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
