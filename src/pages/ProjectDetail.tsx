
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from "lucide-react";

// EDIT HERE: This should match the projects array from Projects.tsx
const projectsData = {
  "autonomous-vehicle-ever": {
    title: "Autonomous Vehicle Control for Infinity-Track Navigation",
    description: "Led the design and implementation of the autonomous control system for a real-life electric car in EVER 2024. Developed YOLOv8-based vision model and Pure Pursuit controller for complex infinity-shaped cone track navigation over three laps.",
    image: "/placeholder.svg", // REPLACE: Add your project video/image
    skills: ["Pure Pursuit Controller", "YOLOv8", "Intel RealSense", "3D LiDAR", "Python", "ROS"],
    github: "#", // REPLACE: Add your GitHub URL
    demo: "#", // REPLACE: Add your demo URL
    date: "2024",
    status: "2nd Place Egypt",
    article: `
      <h3>Project Overview</h3>
      <p>In the EVER 2024 Electric Vehicle Rally, I led the design and implementation of the autonomous control system for the real-life electric car made by Ain Shams University to complete a complex infinity-shaped cone track over three laps without collisions.</p>
      
      <h3>Technical Implementation</h3>
      <p>My role began with problem-solving: analyzing task constraints and evaluating multiple control strategies (PID, MPC, Pure Pursuit). After several experiments, I selected and tuned the Pure Pursuit algorithm for reliable real-time tracking on the real vehicle.</p>
      
      <h3>Vision System Development</h3>
      <p>I developed a YOLOv8-based vision model to classify and detect cone positions by color, integrating it with an Intel RealSense depth camera to localize cones for dynamic path planning. While this advanced vision-based path planning was functional, limited time led us to fallback on a predefined path guided by the tuned controller.</p>
      
      <h3>Results and Impact</h3>
      <p>The project was a finalist effort, earning 2nd place nationwide. I'm grateful to mentors Eng. Ebrahim Abdelghafar and Eng. Ziad Osama for their technical guidance throughout this challenging real-world autonomous vehicle project.</p>
    `
  },
  "autonomous-driving-ros": {
    title: "End-to-End Autonomous Driving Stack in ROS & CoppeliaSim",
    description: "Developed a modular autonomous driving software stack for EVER 2024 Milestone Challenge. Built complete perception, planning, and control pipeline with YOLOv7 object detection, EKF localization, and finite state machines.",
    image: "/placeholder.svg",
    skills: ["ROS Noetic", "CoppeliaSim", "YOLOv7", "Extended Kalman Filter", "Lane Detection", "State Machines"],
    github: "#",
    demo: "#",
    date: "2024",
    status: "3rd Place Egypt",
    article: `
      <h3>Project Overview</h3>
      <p>As part of the EVER 2024 Milestone Challenge, I led the development of a modular and robust autonomous driving software stack within the ROS Noetic + CoppeliaSim simulation environment. The challenge involved completing three progressive milestones that cumulatively assessed system-level autonomy.</p>
      
      <h3>Milestone 1 — Open Loop Control</h3>
      <p>Implemented an open-loop velocity and steering command publisher for fixed paths across multiple track configurations. Developed low-latency ROS nodes to interface with CoppeliaSim actuators via remote API.</p>
      
      <h3>Milestone 2 — Closed Loop Control with Perception</h3>
      <p>Designed and tuned a closed-loop feedback controller using PID and steering control logic. Developed a YOLOv7-based object detection pipeline (trained on synthetic CoppeliaSim data) to identify pedestrians, vehicles, and cones in real time. Fused odometry data using an Extended Kalman Filter (EKF) to improve localization accuracy.</p>
      
      <h3>Milestone 3 — Full Autonomy in Multi-Scenario Tracks</h3>
      <p>Architected the high-level autonomy stack to handle lane keeping, lane change maneuvers, obstacle avoidance, circular path navigation, and full traversal of a custom-designed urban city simulation with dynamic agents. Built a monocular depth estimation module using geometric scaling from bounding box and camera intrinsics.</p>
    `
  },
  "shell-eco-marathon": {
    title: "Full-Stack Autonomous Driving System - Shell Eco-marathon",
    description: "Architected energy-efficient autonomous driving stack for Shell Eco-marathon APC 2025. Implemented YOLOv11nano perception, Behavior Trees planning, and energy-aware MPC control achieving 2nd place worldwide.",
    image: "/placeholder.svg",
    skills: ["ROS 2", "CARLA", "YOLOv11nano", "Behavior Trees", "MPC", "LiDAR Fusion"],
    github: "#",
    demo: "#",
    date: "2025",
    status: "2nd Place Worldwide",
    article: `
      <h3>Project Overview</h3>
      <p>As founder and lead engineer, I architected and developed a modular, performance-optimized, and energy-aware autonomous driving stack for the Shell Eco-marathon APC 2025, deployed on the CARLA simulator. The system was evaluated in complex urban driving scenarios with strict constraints on energy efficiency, real-time decision-making, and safety. Our team secured 2nd place globally out of 24 international teams.</p>
      
      <h3>Perception Stack</h3>
      <p>Developed a hybrid multi-sensor perception system for robust scene understanding using YOLOv11nano optimized for edge inference, custom 3D object detection pipeline leveraging LiDAR-based clustering, and camera–LiDAR fusion using spatial–temporal association and projection matrices.</p>
      
      <h3>Planning Stack</h3>
      <p>Designed a two-tiered planning architecture with high-level behavior planner using Behavior Trees (BT) to handle decision branches like overtaking logic, intersection priority, and yielding behavior. Implemented and customized Frenet Optimal Trajectory Planning (FOTP) with modified cost functions to minimize energy.</p>
      
      <h3>Control Stack</h3>
      <p>Developed and benchmarked multiple control strategies including energy-aware MPC with a cost model that penalized acceleration effort and path deviation under dynamic constraints, and adaptive PID and Pure Pursuit as lightweight alternatives under tight compute budgets.</p>
    `
  },
  // Add more projects here following the same pattern
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  const handleBackToProjects = () => {
    navigate('/', { replace: true });
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Button onClick={handleBackToProjects} className="bg-blue-600 hover:bg-blue-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-slate-700 py-8">
        <div className="container mx-auto px-6">
          <Button 
            onClick={handleBackToProjects}
            variant="ghost" 
            className="text-white hover:bg-white/10 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
          
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold text-white">{project.title}</h1>
            <Badge className="bg-blue-600 text-white">{project.status}</Badge>
          </div>
          
          <p className="text-xl text-gray-300 mb-6 max-w-4xl">{project.description}</p>
          
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {project.date}
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-2" />
              {project.skills.length} Technologies
            </div>
          </div>
          
          <div className="flex gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Github className="mr-2 h-4 w-4" />
              View Source Code
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Media Section */}
            <Card className="bg-gray-800 border-gray-700 mb-8">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  {/* REPLACE: Add your project video or image here */}
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🎥</div>
                    <p>Project Video/Image Placeholder</p>
                    <p className="text-sm opacity-75">Replace with your actual media</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Article Content */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div 
                  className="prose prose-invert prose-blue max-w-none"
                  dangerouslySetInnerHTML={{ __html: project.article }}
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies Used */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-200 border-gray-600">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project Info */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <Badge className="bg-green-600 text-white">{project.status}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Year:</span>
                    <span className="text-white">{project.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Technologies:</span>
                    <span className="text-white">{project.skills.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
