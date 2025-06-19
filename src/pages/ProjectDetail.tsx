
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Github } from "lucide-react";

const projects = {
  "autonomous-vehicle-system": {
    title: "Autonomous Vehicle System",
    description: "Advanced autonomous driving system with computer vision and machine learning capabilities.",
    fullDescription: "This project focuses on developing a comprehensive autonomous vehicle system that integrates computer vision, machine learning, and real-time control systems. The system is capable of object detection, path planning, and decision-making in complex traffic scenarios.",
    technologies: ["Python", "OpenCV", "TensorFlow", "ROS", "C++"],
    githubUrl: "https://github.com/HazemAbuelanin/autonomous-vehicle-system",
    features: [
      "Real-time object detection and tracking",
      "Advanced path planning algorithms",
      "Machine learning-based decision making",
      "Integration with ROS framework",
      "Simulation environment testing"
    ]
  },
  "robotics-control-system": {
    title: "Robotics Control System",
    description: "Real-time control system for industrial robotics applications.",
    fullDescription: "A sophisticated control system designed for industrial robotics applications, featuring real-time processing capabilities and precise motor control for manufacturing environments.",
    technologies: ["C++", "ROS", "Embedded Systems", "Linux"],
    githubUrl: "https://github.com/HazemAbuelanin/robotics-control-system",
    features: [
      "Real-time motor control",
      "Safety monitoring systems",
      "Custom embedded firmware",
      "ROS integration",
      "Industrial communication protocols"
    ]
  },
  "ai-computer-vision": {
    title: "AI Computer Vision Platform",
    description: "Deep learning platform for object detection and recognition.",
    fullDescription: "A comprehensive computer vision platform utilizing deep learning techniques for advanced object detection, recognition, and analysis in various applications.",
    technologies: ["Python", "PyTorch", "OpenCV", "FastAPI", "Docker"],
    githubUrl: "https://github.com/HazemAbuelanin/ai-computer-vision",
    features: [
      "Deep learning model training",
      "Real-time object detection",
      "Custom dataset handling",
      "REST API for integration",
      "Containerized deployment"
    ]
  }
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = slug ? projects[slug as keyof typeof projects] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Project not found</h1>
          <Button onClick={() => navigate('/')} variant="outline">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="text-gray-300 hover:text-white mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>

          <Card className="bg-gray-800/50 border-gray-700 p-8">
            <CardContent className="pt-0">
              <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
              <p className="text-xl text-gray-300 mb-8">{project.description}</p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Overview</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{project.fullDescription}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                <ul className="text-gray-300 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Source Code
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
