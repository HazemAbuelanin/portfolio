
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "future-of-autonomous-vehicles",
    title: "The Future of Autonomous Vehicles",
    excerpt: "Exploring the latest developments in self-driving car technology and their impact on society.",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    slug: "ai-robotics-revolution",
    title: "AI and Robotics Revolution",
    excerpt: "How artificial intelligence is transforming the robotics industry and creating new possibilities.",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    slug: "computer-vision-applications",
    title: "Computer Vision Applications",
    excerpt: "Real-world applications of computer vision technology in various industries.",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "/placeholder.svg"
  }
];

const BlogPosts = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Insights and thoughts on the latest trends in technology, robotics, and AI
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card 
                key={post.id}
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer group"
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                <CardHeader className="p-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.date).toLocaleDateString()} • {post.readTime}
                  </div>
                  <CardTitle className="text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
