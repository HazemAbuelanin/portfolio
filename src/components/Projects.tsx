import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Project data with correct slugs and content
const projects = [
  {
    title: "Autonomous Vehicle Control for Infinity-Track Navigation",
    description: "Led the design and implementation of the autonomous control system for a real-life electric car in EVER 2024. Developed YOLOv8-based vision model and Pure Pursuit controller for complex infinity-shaped cone track navigation over three laps.",
    skills: ["Pure Pursuit Controller", "YOLOv8", "Intel RealSense", "3D LiDAR", "Python", "ROS"],
    status: "2nd Place Egypt",
    date: "2024",
    slug: "autonomous-vehicle-ever",
    featured: true
  },
  {
    title: "End-to-End Autonomous Driving Stack in ROS & CoppeliaSim",
    description: "Developed a modular autonomous driving software stack for EVER 2024 Milestone Challenge. Built complete perception, planning, and control pipeline with YOLOv7 object detection, EKF localization, and finite state machines.",
    skills: ["ROS Noetic", "CoppeliaSim", "YOLOv7", "Extended Kalman Filter", "Lane Detection", "State Machines"],
    status: "3rd Place Egypt",
    date: "2024",
    slug: "autonomous-driving-ros",
    featured: true
  },
  {
    title: "Full-Stack Autonomous Driving System - Shell Eco-marathon",
    description: "Architected energy-efficient autonomous driving stack for Shell Eco-marathon APC 2025. Implemented YOLOv11nano perception, Behavior Trees planning, and energy-aware MPC control achieving 2nd place worldwide.",
    skills: ["ROS 2", "CARLA", "YOLOv11nano", "Behavior Trees", "MPC", "LiDAR Fusion"],
    status: "2nd Place Worldwide",
    date: "2025",
    slug: "shell-eco-marathon",
    featured: true
  },
  {
    title: "Autonomous Terrain Navigation & Object Disposal",
    description: "Co-developed full-stack autonomous solution for Emirates Robotics Competition 2025. Built digital twin in Gazebo, implemented 3D object detection with Intel RealSense, and deployed on TurtleBot3 with custom robotic arm.",
    skills: ["ROS 2", "Gazebo", "Intel RealSense", "TurtleBot3", "Point Cloud", "Arduino"],
    status: "Competition Project",
    date: "2025",
    slug: "emirates-robotics",
    featured: false
  },
  {
    title: "Advanced Autonomous Racing Algorithms - F1TENTH",
    description: "Developed comprehensive autonomous racing software stack for F1TENTH IROS 2024. Implemented SLAM pipeline, reactive navigation algorithms, and Pure Pursuit controller achieving 4th place out of 58 teams globally.",
    skills: ["ROS", "SLAM", "Kalman Filters", "AMCL", "Pure Pursuit", "Wall Following"],
    status: "4th Place Global",
    date: "2024",
    slug: "f1tenth-racing",
    featured: false
  },
  {
    title: "Distance Alarm ECU Design Using Single MCU",
    description: "Designed cost and power-efficient Distance Alarm ECU for electric vehicles. Implemented innovative single ATmega328P design with diode-based multiplexing for three ultrasonic sensors, complete with PCB layout in Altium Designer.",
    skills: ["Embedded C", "ATmega328P", "Proteus", "Altium Designer", "Ultrasonic Sensors", "PCB Design"],
    status: "Prototype Complete",
    date: "2024",
    slug: "distance-alarm-ecu",
    featured: false
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
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Award-winning autonomous systems and robotics projects across real-world competitions, 
            simulation environments, and embedded hardware solutions
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-600 bg-gray-700/50 cursor-pointer"
                    onClick={() => handleProjectClick(project.slug)}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-xs font-medium bg-blue-600/20 text-blue-300 border-blue-500">
                      {project.status}
                    </Badge>
                    <span className="text-xs text-gray-400">{project.date}</span>
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
                    {project.skills.slice(0, 4).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-gray-800 text-gray-200 border border-gray-600">
                        {skill}
                      </Badge>
                    ))}
                    {project.skills.length > 4 && (
                      <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-400 border border-gray-600">
                        +{project.skills.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-12">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {otherProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-600 bg-gray-700/50 cursor-pointer"
                    onClick={() => handleProjectClick(project.slug)}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs bg-gray-800/50 text-gray-300 border-gray-600">
                      {project.status}
                    </Badge>
                    <span className="text-xs text-gray-400">{project.date}</span>
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
                    {project.skills.slice(0, 3).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-gray-800 text-gray-200 border border-gray-600">
                        {skill}
                      </Badge>
                    ))}
                    {project.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-400 border border-gray-600">
                        +{project.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Want to see more of my work?</p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
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
