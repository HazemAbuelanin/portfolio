
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "future-of-autonomous-vehicles",
    title: "The Future of Autonomous Vehicles",
    excerpt: "Exploring the latest developments in self-driving technology and their impact on transportation.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Autonomous Systems"
  },
  {
    id: 2,
    slug: "robotics-in-manufacturing",
    title: "Robotics in Modern Manufacturing",
    excerpt: "How robotics is revolutionizing manufacturing processes and improving efficiency.",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Robotics"
  },
  {
    id: 3,
    slug: "ai-computer-vision-advances",
    title: "Advances in AI Computer Vision",
    excerpt: "Recent breakthroughs in computer vision and their applications in real-world scenarios.",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "AI"
  }
];

const BlogPosts = () => {
  const navigate = useNavigate();

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sharing insights on robotics, AI, and autonomous systems
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
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 ml-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <span className="inline-block px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded mb-3">
                    {post.category}
                  </span>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
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
