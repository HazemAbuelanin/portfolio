import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from "lucide-react";

// Updated project data matching the new content
const projectsData = {
  "autonomous-vehicle-ever": {
    title: "Autonomous Vehicle Control for Infinity-Track Navigation — EVER 2024",
    description: "Led the design and implementation of the autonomous control system for a real-life electric car in EVER 2024. Developed YOLOv8-based vision model and Pure Pursuit controller for complex infinity-shaped cone track navigation over three laps.",
    skills: ["Pure Pursuit Controller", "YOLOv8", "Intel RealSense", "3D LiDAR", "Python", "ROS"],
    github: "#",
    demo: "#",
    date: "2024",
    status: "2nd Place Egypt",
    video: "",
    youtubeUrl: "",
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
    title: "End-to-End Autonomous Driving Stack in ROS & CoppeliaSim — EVER 2024 Milestones",
    description: "Developed a modular autonomous driving software stack for EVER 2024 Milestone Challenge. Built complete perception, planning, and control pipeline with YOLOv7 object detection, EKF localization, and finite state machines.",
    skills: ["ROS Noetic", "CoppeliaSim", "YOLOv7", "Extended Kalman Filter", "Lane Detection", "State Machines"],
    github: "#",
    demo: "#",
    date: "2024",
    status: "3rd Place Egypt",
    video: "",
    youtubeUrl: "",
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
    title: "Full-Stack Autonomous Driving System for Energy-Efficient Urban Navigation — Shell Eco-marathon APC 2025",
    description: "Architected energy-efficient autonomous driving stack for Shell Eco-marathon APC 2025. Implemented YOLOv11nano perception, Behavior Trees planning, and energy-aware MPC control achieving 2nd place worldwide.",
    skills: ["ROS 2", "CARLA", "YOLOv11nano", "Behavior Trees", "MPC", "LiDAR Fusion"],
    github: "#",
    demo: "#",
    date: "2025",
    status: "2nd Place Worldwide",
    video: "",
    youtubeUrl: "",
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
  "emirates-robotics": {
    title: "Autonomous Terrain Navigation & Object Disposal with Digital Twin — Emirates Robotics Competition 2025",
    description: "Co-developed full-stack autonomous solution for Emirates Robotics Competition 2025. Built digital twin in Gazebo, implemented 3D object detection with Intel RealSense, and deployed on TurtleBot3 with custom robotic arm.",
    skills: ["ROS 2", "Gazebo", "Intel RealSense", "TurtleBot3", "Point Cloud", "Arduino"],
    github: "#",
    demo: "#",
    date: "2025",
    status: "Competition Project",
    video: "",
    youtubeUrl: "",
    article: `
      <h3>Project Overview</h3>
      <p>Collaborating remotely with Mohamed Ebrahim from Heriot-Watt University (UAE), I joined Team RADIANT to co-develop a full-stack autonomous solution for the Emirates Robotics Competition 2024. The mission: enable a mobile robot to navigate an unstructured, debris-filled terrain, classify and collect waste objects, and dispose of them into category-specific trash bins.</p>
      
      <h3>Simulation & Digital Twin</h3>
      <p>Led the development of the robot's digital twin in Gazebo to simulate real-world dynamics for system verification prior to deployment. Modeled the full robot system (TurtleBot3 + arm) for testing autonomy in a physics-based environment.</p>
      
      <h3>Perception Stack</h3>
      <p>Integrated an Intel RealSense depth camera; converted depth images into 3D point clouds for object localization and rough shape estimation. Explored 3D object detection approaches to classify debris items using combined geometric features and CNN outputs.</p>
      
      <h3>Hardware Integration & Deployment</h3>
      <p>Assisted in deploying the software stack to physical hardware using Raspberry Pi 4 as the ROS 2 compute platform. Worked alongside teammate Mahmoud El Rouby, who designed a custom servo-controlled robotic arm and gripper, which I helped control using Arduino PWM commands via ROS serial nodes.</p>
    `
  },
  "f1tenth-racing": {
    title: "Advanced Autonomous Racing Algorithms — F1TENTH IROS 2024",
    description: "Developed comprehensive autonomous racing software stack for F1TENTH IROS 2024. Implemented SLAM pipeline, reactive navigation algorithms, and Pure Pursuit controller achieving 4th place out of 58 teams globally.",
    skills: ["ROS", "SLAM", "Kalman Filters", "AMCL", "Pure Pursuit", "Wall Following"],
    github: "#",
    demo: "#",
    date: "2024",
    status: "4th Place Global",
    video: "/f1tenth.mp4",
    youtubeUrl: "https://youtu.be/Vf_XOZvBjdA",
    article: `
      <h3>Project Overview</h3>
      <p>Competing against 58 teams globally, I developed a comprehensive autonomous racing software stack for the F1TENTH IROS 2024 challenge, achieving 4th place.</p>
      
      <h3>Reactive Navigation Algorithms</h3>
      <p>Designed and tuned wall-following and "follow-the-gap" behaviors for dynamic obstacle avoidance and rapid close-quarters maneuvering using robust PID controllers.</p>
      
      <h3>Map-Based Autonomy</h3>
      <p>Implemented a full SLAM pipeline integrating odometry generation via sensor fusion, Kalman and Extended Kalman Filters for state estimation, and AMCL for precise localization within the race environment.</p>
      
      <h3>Trajectory Planning and Control</h3>
      <p>Created racing lines optimized for speed and safety, combined with a Pure Pursuit controller for smooth and accurate path tracking. This project demonstrated proficiency in combining reactive and deliberative autonomy layers to maximize racing performance on a scaled autonomous vehicle platform.</p>
    `
  },
  "distance-alarm-ecu": {
    title: "Cost- and Power-Efficient Distance Alarm ECU Design Using a Single MCU",
    description: "Designed cost and power-efficient Distance Alarm ECU for electric vehicles. Implemented innovative single ATmega328P design with diode-based multiplexing for three ultrasonic sensors, complete with PCB layout in Altium Designer.",
    skills: ["Embedded C", "ATmega328P", "Proteus", "Altium Designer", "Ultrasonic Sensors", "PCB Design"],
    github: "#",
    demo: "#",
    date: "2024",
    status: "Prototype Complete",
    video: "",
    youtubeUrl: "",
    article: `
      <h3>Project Overview</h3>
      <p>I designed and developed a Distance Alarm Electronic Control Unit (ECU) prototype optimized for cost, power, and resource efficiency, targeting an electric vehicle application.</p>
      
      <h3>Single MCU Multi-Sensor Interface</h3>
      <p>Employed one ATmega328P microcontroller to interface with three ultrasonic distance sensors by leveraging the Input Capture Unit (ICU) pin and diode-based multiplexing. This approach enables sequential triggering and echo reading of multiple sensors through one ICU pin instead of dedicating separate MCUs or input pins per sensor.</p>
      
      <h3>Embedded Software Development</h3>
      <p>Wrote robust Embedded C code in Atmel Studio for accurate time-of-flight measurement, sensor switching, and distance computation while maintaining real-time responsiveness.</p>
      
      <h3>Hardware Design & PCB Layout</h3>
      <p>Created the full schematic and conducted functional testing of sensor multiplexing and MCU interfacing in Proteus simulation environment before hardware implementation. Used Altium Designer to produce a compact and manufacturable PCB layout for the ECU, emphasizing signal integrity, power efficiency, and ease of integration.</p>
    `
  }
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  const handleBackToProjects = () => {
    navigate('/', { replace: true });
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
            {/* Media Section - Space for videos and images */}
            <Card className="bg-gray-800 border-gray-700 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Project Media</h3>
                {project.youtubeUrl && project.youtubeUrl.trim() !== "" && (
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-300 mb-3">Project Video</h4>
                    <div className="aspect-video rounded-lg overflow-hidden flex items-center justify-center bg-black">
                      <iframe
                        width="100%"
                        height="100%"
                        src={project.youtubeUrl.replace("watch?v=", "embed/")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
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
