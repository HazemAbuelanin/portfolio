
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen, Code, Lightbulb, Zap } from "lucide-react";

// EDIT HERE: Add, remove, or modify your blog posts
// Each post should have: title, excerpt, date, readTime, category, tags, slug, featured
const blogPosts = [
  {
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn the best practices for architecting large-scale React applications using TypeScript. Covers component design patterns, state management, and performance optimization techniques.",
    date: "Dec 15, 2023",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "TypeScript", "Architecture"],
    slug: "scalable-react-typescript", // REPLACE: Add your actual blog post URL slug
    featured: true,
    icon: Code,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Machine Learning in Web Development: A Practical Guide",
    excerpt: "Discover how to integrate machine learning models into web applications. From TensorFlow.js to serverless ML APIs, explore the tools and techniques for intelligent web apps.",
    date: "Dec 8, 2023",
    readTime: "12 min read",
    category: "AI/ML",
    tags: ["Machine Learning", "TensorFlow.js", "Web Development"],
    slug: "ml-web-development-guide", // REPLACE: Add your actual blog post URL slug
    featured: true,
    icon: Lightbulb,
    color: "from-purple-500 to-pink-400"
  },
  {
    title: "The Future of Mobile Development: React Native vs Flutter",
    excerpt: "An in-depth comparison of React Native and Flutter for cross-platform mobile development. Performance benchmarks, developer experience, and real-world use cases.",
    date: "Nov 28, 2023",
    readTime: "10 min read",
    category: "Mobile Development",
    tags: ["React Native", "Flutter", "Mobile"],
    slug: "react-native-vs-flutter", // REPLACE: Add your actual blog post URL slug
    featured: true,
    icon: Zap,
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "Optimizing Database Performance for Modern Web Apps",
    excerpt: "Database optimization strategies for high-traffic applications. Covers indexing, query optimization, caching strategies, and scaling techniques.",
    date: "Nov 20, 2023",
    readTime: "15 min read",
    category: "Backend",
    tags: ["Database", "Performance", "Optimization"],
    slug: "database-performance-optimization", // REPLACE: Add your actual blog post URL slug
    featured: false,
    icon: BookOpen,
    color: "from-orange-500 to-red-400"
  },
  {
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt: "A comprehensive guide to choosing between CSS Grid and Flexbox for different layout scenarios. Includes practical examples and best practices.",
    date: "Nov 12, 2023",
    readTime: "6 min read",
    category: "CSS",
    tags: ["CSS", "Layout", "Grid", "Flexbox"],
    slug: "css-grid-vs-flexbox", // REPLACE: Add your actual blog post URL slug
    featured: false,
    icon: Code,
    color: "from-indigo-500 to-purple-400"
  },
  {
    title: "Debugging React Applications: Tools and Techniques",
    excerpt: "Master the art of debugging React applications with the right tools and methodologies. From React DevTools to performance profiling.",
    date: "Oct 30, 2023",
    readTime: "9 min read",
    category: "React",
    tags: ["React", "Debugging", "DevTools"],
    slug: "debugging-react-applications", // REPLACE: Add your actual blog post URL slug
    featured: false,
    icon: Zap,
    color: "from-green-500 to-emerald-400"
  }
];

const BlogPosts = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Blog & Insights
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Sharing my thoughts on web development, technology trends, and lessons learned 
            from building digital products
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8"></div>
        </div>

        {/* Featured Posts */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-2xl font-bold text-slate-800">Featured Articles</h3>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredPosts.map((post, index) => {
              const Icon = post.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${post.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center text-sm text-slate-500 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      {/* EDIT HERE: Replace with your actual blog post URLs */}
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-12">Recent Posts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {recentPosts.map((post, index) => {
              const Icon = post.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${post.color} flex items-center justify-center`}>
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs bg-slate-50">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-slate-600 text-sm leading-relaxed">
                      {post.excerpt.substring(0, 120)}...
                    </CardDescription>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center text-xs text-slate-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center text-xs text-slate-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="mb-6 opacity-90">
                Get notified when I publish new articles about web development, AI, and technology.
              </p>
              {/* EDIT HERE: Connect to your newsletter service (Mailchimp, ConvertKit, etc.) */}
              <div className="flex gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-slate-800 bg-white/90 backdrop-blur-sm"
                />
                <Button className="bg-white text-blue-600 hover:bg-white/90 px-6">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
