
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

// EDIT HERE: Add, remove, or modify your blog posts
const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Best practices and patterns I've learned while developing large-scale React applications with TypeScript and modern tooling.",
    date: "2023-12-15",
    readTime: "8 min read",
    category: "Web Development",
    image: "/placeholder.svg", // REPLACE: Add your blog post image
    slug: "building-scalable-react-applications"
  },
  {
    title: "Machine Learning in Web Development",
    excerpt: "Exploring how to integrate machine learning models into web applications using TensorFlow.js and practical use cases.",
    date: "2023-11-28",
    readTime: "12 min read",
    category: "AI/ML",
    image: "/placeholder.svg", // REPLACE: Add your blog post image
    slug: "machine-learning-web-development"
  },
  {
    title: "The Future of Mobile Development",
    excerpt: "Comparing React Native, Flutter, and native development approaches based on real project experiences.",
    date: "2023-11-10",
    readTime: "6 min read",
    category: "Mobile",
    image: "/placeholder.svg", // REPLACE: Add your blog post image
    slug: "future-mobile-development"
  }
];

const BlogPosts = () => {
  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Latest Articles
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sharing insights about technology, development practices, and industry trends
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-0 bg-gradient-to-br from-slate-800 to-slate-700">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-white" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs bg-blue-500/20 text-blue-300 border-blue-400">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs text-gray-400">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-300 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-300 hover:text-blue-200 hover:bg-blue-500/20">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
