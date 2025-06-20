
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Car, Globe, Smartphone, Brain, Database, Code, Star, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

// EDIT HERE: Add, remove, or modify your projects
// Each project should have: title, description, image, skills, icon, color, status, github, demo, featured, date, slug
const projects = [
  {
    title: "Autonomous Vehicle Control for Infinity-Track Navigation",
    description: "Led the design and implementation of the autonomous control system for a real-life electric car in EVER 2024. Developed YOLOv8-based vision model and Pure Pursuit controller for complex infinity-shaped cone track navigation over three laps.",
    image: "/placeholder.svg", // REPLACE: Add your project image to public folder and update path
    skills: ["Pure Pursuit Controller", "YOLOv8", "Intel RealSense", "3D LiDAR", "Python", "ROS"],
    icon: Car,
    color: "from-blue-600 to-cyan-500",
    bgColor: "from-gray-800 to-slate-700",
    status: "2nd Place Egypt",
    github: "#", // REPLACE: Add your GitHub repository URL
    demo: "#", // REPLACE: Add your demo/live site URL
    featured: true,
    date: "2024",
    slug: "autonomous-vehicle-ever"
  },
  {
    title: "End-to-End Autonomous Driving Stack in ROS & CoppeliaSim",
    description: "Developed a modular autonomous driving software stack for EVER 2024 Milestone Challenge. Built complete perception, planning, and control pipeline with YOLOv7 object detection, EKF localization, and finite state machines.",
    image: "/placeholder.svg", // REPLACE: Add your project image
    skills: ["ROS Noetic", "CoppeliaSim", "YOLOv7", "Extended Kalman Filter", "Lane Detection", "State Machines"],
    icon: Brain,
    color: "from-emerald-600 to-teal-500",
    bgColor: "from-gray-800 to-slate-700",
    status: "3rd Place Egypt",
    github: "#", // REPLACE: Add your GitHub URL
    demo: "#", // REPLACE: Add your demo URL
    featured: true,
    date: "2024",
    slug: "autonomous-driving-ros"
  },
  {
    title: "Full-Stack Autonomous Driving System - Shell Eco-marathon",
    description: "Architected energy-efficient autonomous driving stack for Shell Eco-marathon APC 2025. Implemented YOLOv11nano perception, Behavior Trees planning, and energy-aware MPC control achieving 2nd place worldwide.",
    image: "/placeholder.svg", // REPLACE: Add your project image
    skills: ["ROS 2", "CARLA", "YOLOv11nano", "Behavior Trees", "MPC", "LiDAR Fusion"],
    icon: Globe,
    color: "from-purple-600 to-pink-500",
    bgColor: "from-gray-800 to-slate-700",
    status: "2nd Place Worldwide",
    github: "#", // REPLACE: Add your GitHub URL
    demo: "#", // REPLACE: Add your app store URL
    featured: true,
    date: "2025",
    slug: "shell-eco-marathon"
  },
  {
    title: "Autonomous Terrain Navigation & Object Disposal",
    description: "Co-developed full-stack autonomous solution for Emirates Robotics Competition 2025. Built digital twin in Gazebo, implemented 3D object detection with Intel RealSense, and deployed on TurtleBot3 with custom robotic arm.",
    image: "/placeholder.svg", // REPLACE: Add your project image
    skills: ["ROS 2", "Gazebo", "Intel RealSense", "TurtleBot3", "Point Cloud", "Arduino"],
    icon: Smartphone,
    color: "from-orange-600 to-red-500",
    bgColor: "from-gray-800 to-slate-700",
    status: "Competition Project",
    github: "#", // REPLACE: Add your GitHub URL
    demo: "#", // REPLACE: Add your demo URL
    featured: false,
    date: "2025",
    slug: "emirates-robotics"
  },
  {
    title: "Advanced Autonomous Racing Algorithms - F1TENTH",
    description: "Developed comprehensive autonomous racing software stack for F1TENTH IROS 2024. Implemented SLAM pipeline, reactive navigation algorithms, and Pure Pursuit controller achieving 4th place out of 58 teams globally.",
    image: "/placeholder.svg", // REPLACE: Add your project image
    skills: ["ROS", "SLAM", "Kalman Filters", "AMCL", "Pure Pursuit", "Wall Following"],
    icon: Database,
    color: "from-indigo-600 to-purple-500",
    bgColor: "from-gray-800 to-slate-700",
    status: "4th Place Global",
    github: "#", // REPLACE: Add your GitHub URL
    demo: "#", // REPLACE: Add your demo URL
    featured: false,
    date: "2024",
    slug: "f1tenth-racing"
  },
  {
    title: "Distance Alarm ECU Design Using Single MCU",
    description: "Designed cost and power-efficient Distance Alarm ECU for electric vehicles. Implemented innovative single ATmega328P design with diode-based multiplexing for three ultrasonic sensors, complete with PCB layout in Altium Designer.",
    image: "/placeholder.svg", // REPLACE: Add your project image
    skills: ["Embedded C", "ATmega328P", "Proteus", "Altium Designer", "Ultrasonic Sensors", "PCB Design"],
    icon: Code,
    color: "from-green-600 to-emerald-500",
    bgColor: "from-gray-800 to-slate-700",
    status: "Prototype Complete",
    github: "#", // REPLACE: Add your GitHub URL
    demo: "#", // REPLACE: Add your npm/demo URL
    featured: false,
    date: "2024",
    slug: "distance-alarm-ecu"
  }
];

const Projects = () => {
  const navigate = useNavigate();
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const handleProjectClick = (slug: string) => {
    navigate(`/project/${slug}`);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Award-winning autonomous systems and robotics projects across real-world competitions, 
            simulation environments, and embedded hardware solutions
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8"></div>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <Star className="h-6 w-6 text-yellow-400 mr-2" />
            <h3 className="text-2xl font-bold text-white">Featured Work</h3>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-700 bg-gradient-to-br ${project.bgColor} cursor-pointer`}
                      onClick={() => handleProjectClick(project.slug)}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs font-medium bg-gray-700/50 text-gray-200 border-gray-600">
                          {project.status}
                        </Badge>
                        <div className="flex items-center text-xs text-gray-400 mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          {project.date}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors leading-tight">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className="text-gray-300 leading-relaxed">
                      {project.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs bg-gray-700/50 text-gray-200 font-medium border border-gray-600">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-12">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {otherProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-700 bg-gradient-to-br ${project.bgColor} cursor-pointer`}
                      onClick={() => handleProjectClick(project.slug)}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs bg-gray-700/50 text-gray-200 border-gray-600">
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-white leading-tight">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-300 text-sm leading-relaxed">
                      {project.description.substring(0, 120)}...
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.skills.slice(0, 4).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs bg-gray-700/50 text-gray-200 border border-gray-600">
                          {skill}
                        </Badge>
                      ))}
                      {project.skills.length > 4 && (
                        <Badge variant="secondary" className="text-xs bg-gray-700/50 text-gray-400 border border-gray-600">
                          +{project.skills.length - 4}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Want to see more of my work?</p>
          <Button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            onClick={() => window.open('https://github.com/HazemAbuelanin', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
