import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// EDIT HERE: Add your actual blog post content
const blogPosts = {
  "autonomous-systems-modern-robotics": {
    title: "Autonomous Systems in Modern Robotics",
    date: "2023-12-15",
    readTime: "8 min read",
    category: "Robotics",
    image: "/placeholder.svg", // REPLACE: Add your blog post image
    content: `
      <h3>The Evolution of Autonomous Robotics</h3>
      <p>Autonomous systems are revolutionizing the field of robotics, enabling machines to make decisions and perform tasks without human intervention. This breakthrough technology is transforming industries across the board.</p>
      
      <h3>Key Applications</h3>
      <p>From manufacturing floors to healthcare facilities, autonomous robots are proving their worth in various sectors:</p>
      <ul>
        <li>Manufacturing automation and quality control</li>
        <li>Healthcare assistance and patient care</li>
        <li>Logistics and warehouse management</li>
        <li>Environmental monitoring and research</li>
      </ul>
      
      <h3>Future Implications</h3>
      <p>As we continue to advance in this field, we can expect to see even more sophisticated autonomous systems that will further enhance our capabilities and efficiency in various domains.</p>
    `
  },
  "physical-ai-digital-intelligence": {
    title: "Physical AI: Bridging Digital Intelligence and Real World",
    date: "2023-11-28",
    readTime: "12 min read",
    category: "AI/Robotics",
    image: "/placeholder.svg",
    content: `
      <h3>Understanding Physical AI</h3>
      <p>Physical AI represents the convergence of artificial intelligence with physical systems, creating intelligent machines that can interact meaningfully with the real world.</p>
      
      <h3>Core Technologies</h3>
      <p>The foundation of Physical AI relies on several key technologies working in harmony:</p>
      <ul>
        <li>Computer vision and perception systems</li>
        <li>Sensor fusion and environmental awareness</li>
        <li>Real-time decision making algorithms</li>
        <li>Robotic manipulation and control systems</li>
      </ul>
      
      <h3>Real-World Impact</h3>
      <p>Physical AI is already making significant impacts in industries like autonomous vehicles, smart manufacturing, and service robotics, paving the way for a more intelligent and automated future.</p>
    `
  },
  "future-autonomous-vehicles": {
    title: "The Future of Autonomous Vehicles",
    date: "2023-11-10",
    readTime: "6 min read",
    category: "Autonomous Systems",
    image: "/placeholder.svg",
    content: `
      <h3>Current State of Autonomous Vehicles</h3>
      <p>The autonomous vehicle industry has made tremendous strides in recent years, with various levels of automation being deployed across different vehicle types.</p>
      
      <h3>Technical Challenges</h3>
      <p>Despite the progress, several challenges remain:</p>
      <ul>
        <li>Complex urban environment navigation</li>
        <li>Weather and lighting condition adaptability</li>
        <li>Ethical decision-making in critical situations</li>
        <li>Regulatory and safety standards compliance</li>
      </ul>
      
      <h3>The Road Ahead</h3>
      <p>The future of autonomous vehicles looks promising, with continued advances in AI, sensor technology, and vehicle-to-everything (V2X) communication systems driving us toward fully autonomous transportation.</p>
    `
  }
};

const Blog = () => {
  // Always show Not Available Now
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <Navigation />
      <div className="container mx-auto px-6 pt-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Not Available Now</h1>
          <Button onClick={() => window.history.back()} className="bg-blue-600 hover:bg-blue-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
