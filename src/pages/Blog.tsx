
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const blogPosts = {
  "future-of-autonomous-vehicles": {
    title: "The Future of Autonomous Vehicles",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Autonomous Systems",
    content: `
      <h3>Introduction</h3>
      <p>Autonomous vehicles represent one of the most exciting developments in modern transportation technology. As we stand on the brink of a transportation revolution, it's important to understand the current state and future potential of self-driving cars.</p>
      
      <h3>Current State of Technology</h3>
      <p>Today's autonomous vehicles utilize a combination of sensors, cameras, lidar, and advanced AI algorithms to navigate complex environments. Companies like Tesla, Waymo, and others have made significant strides in developing reliable autonomous driving systems.</p>
      
      <h3>Challenges and Opportunities</h3>
      <p>While the technology has advanced rapidly, several challenges remain including regulatory frameworks, public acceptance, and ensuring safety in all driving conditions. However, the potential benefits including reduced accidents, improved traffic flow, and increased accessibility make this a worthwhile pursuit.</p>
      
      <h3>Looking Ahead</h3>
      <p>The future of autonomous vehicles looks promising, with continued improvements in AI, sensor technology, and infrastructure development paving the way for widespread adoption in the coming decades.</p>
    `
  },
  "robotics-in-manufacturing": {
    title: "Robotics in Modern Manufacturing",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Robotics",
    content: `
      <h3>The Manufacturing Revolution</h3>
      <p>Robotics has fundamentally transformed modern manufacturing, bringing unprecedented levels of precision, efficiency, and scalability to production processes worldwide.</p>
      
      <h3>Key Applications</h3>
      <p>Modern manufacturing robots excel in assembly line operations, quality control, material handling, and precision machining. These applications have resulted in significant improvements in product quality and production speed.</p>
      
      <h3>Benefits and Impact</h3>
      <p>The integration of robotics in manufacturing has led to reduced human error, increased production capacity, and improved worker safety by handling dangerous tasks.</p>
      
      <h3>Future Trends</h3>
      <p>The future of manufacturing robotics includes collaborative robots (cobots), AI-driven optimization, and flexible manufacturing systems that can adapt to changing production requirements.</p>
    `
  },
  "ai-computer-vision-advances": {
    title: "Advances in AI Computer Vision",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "AI",
    content: `
      <h3>Computer Vision Evolution</h3>
      <p>AI-powered computer vision has evolved dramatically in recent years, enabling machines to interpret and understand visual information with remarkable accuracy.</p>
      
      <h3>Technical Breakthroughs</h3>
      <p>Recent advances include improved object detection algorithms, real-time processing capabilities, and enhanced accuracy in complex visual scenarios. Deep learning models have been particularly influential in driving these improvements.</p>
      
      <h3>Real-World Applications</h3>
      <p>Computer vision technology is now widely used in autonomous vehicles, medical imaging, security systems, and industrial automation, demonstrating its versatility and practical value.</p>
      
      <h3>Future Possibilities</h3>
      <p>The future of computer vision includes enhanced 3D understanding, improved real-time processing, and integration with other AI technologies for more sophisticated applications.</p>
    `
  }
};

const Blog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Blog post not found</h1>
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
            Back to Blog
          </Button>

          <Card className="bg-gray-800/50 border-gray-700 p-8">
            <CardContent className="pt-0">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded mb-4">
                  {post.category}
                </span>
                <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
