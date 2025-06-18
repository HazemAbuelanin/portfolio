
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from "lucide-react";

// EDIT HERE: This should match the projects array from Projects.tsx
const projectsData = {
  "autonomous-racing-vehicle": {
    title: "Autonomous Racing Vehicle",
    description: "Advanced autonomous navigation system for Shell Eco-marathon competition featuring computer vision, path planning, and sensor fusion algorithms for optimal racing performance.",
    image: "/placeholder.svg", // REPLACE: Add your project video/image
    skills: ["Python", "OpenCV", "ROS", "Machine Learning", "Embedded Systems", "Computer Vision"],
    github: "#", // REPLACE: Add your GitHub URL
    demo: "#", // REPLACE: Add your demo URL
    date: "2023",
    status: "Competition Winner",
    article: `
      <h3>Project Overview</h3>
      <p>The Autonomous Racing Vehicle project was developed for the Shell Eco-marathon competition, where teams compete to build the most energy-efficient vehicle. Our approach focused on creating an autonomous navigation system that could optimize racing performance while maintaining safety and efficiency.</p>
      
      <h3>Technical Implementation</h3>
      <p>The system integrates multiple technologies including computer vision for obstacle detection, path planning algorithms for optimal route calculation, and sensor fusion to combine data from various sensors including LiDAR, cameras, and IMU sensors.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Real-time object detection and classification</li>
        <li>Advanced path planning with dynamic obstacle avoidance</li>
        <li>Sensor fusion for improved accuracy and reliability</li>
        <li>Energy optimization algorithms</li>
        <li>Safety monitoring and emergency stop systems</li>
      </ul>
      
      <h3>Results and Impact</h3>
      <p>Our team successfully won the competition, achieving the highest energy efficiency rating while maintaining competitive lap times. The project demonstrated the potential of autonomous systems in racing applications and contributed to research in energy-efficient transportation.</p>
    `
  },
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    description: "Full-stack responsive e-commerce application with secure user authentication, integrated payment processing, comprehensive admin dashboard, and real-time inventory management.",
    image: "/placeholder.svg", // REPLACE: Add your project video/image
    skills: ["React", "Node.js", "MongoDB", "Stripe API", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
    date: "2023",
    status: "Production Ready",
    article: `
      <h3>Project Overview</h3>
      <p>This full-stack e-commerce platform provides a complete solution for online retail businesses, featuring modern design, secure payment processing, and comprehensive administrative tools.</p>
      
      <h3>Architecture and Design</h3>
      <p>Built using a modern tech stack with React frontend, Node.js backend, and MongoDB database. The application follows best practices for security, performance, and scalability.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Responsive design optimized for all devices</li>
        <li>Secure user authentication and authorization</li>
        <li>Integrated Stripe payment processing</li>
        <li>Real-time inventory management</li>
        <li>Comprehensive admin dashboard</li>
        <li>Order tracking and management</li>
        <li>Product search and filtering</li>
      </ul>
      
      <h3>Technical Challenges</h3>
      <p>The main challenges included implementing secure payment processing, managing complex state across the application, and ensuring optimal performance with large product catalogs. These were addressed through careful architecture planning and implementation of industry best practices.</p>
    `
  },
  // Add more projects here following the same pattern
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-blue-600 hover:bg-blue-700">
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
            onClick={() => navigate('/')}
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
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              <Github className="mr-2 h-4 w-4" />
              View Code
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
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Demo
                  </Button>
                  <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-700">
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
