
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Smartphone, Database, Brain, Wrench, Palette, Server } from "lucide-react";

// EDIT HERE: Add, remove, or modify skill categories and individual skills
const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    color: "from-blue-600 to-cyan-500",
    bgColor: "from-gray-800 to-slate-700",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js"]
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "from-emerald-600 to-teal-500",
    bgColor: "from-gray-800 to-slate-700",
    skills: ["Node.js", "Python", "Java", "Express.js", "FastAPI", "RESTful APIs", "GraphQL", "PostgreSQL"]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-purple-600 to-pink-500",
    bgColor: "from-gray-800 to-slate-700",
    skills: ["React Native", "Flutter", "iOS Development", "Android Development", "Expo"]
  },
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-orange-600 to-red-500",
    bgColor: "from-gray-800 to-slate-700",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C", "Go", "Rust"]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-indigo-600 to-purple-500",
    bgColor: "from-gray-800 to-slate-700",
    skills: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "Pandas", "NumPy", "Computer Vision", "NLP"]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "from-green-600 to-emerald-500",
    bgColor: "from-gray-800 to-slate-700",
    skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Google Cloud", "Docker", "Kubernetes"]
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    color: "from-pink-600 to-rose-500",
    bgColor: "from-gray-800 to-slate-700",
    skills: ["Figma", "Adobe XD", "Photoshop", "UI Design", "UX Research", "Prototyping"]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    color: "from-slate-600 to-gray-500",
    bgColor: "from-gray-800 to-slate-700",
    skills: ["Git", "GitHub", "VS Code", "Linux", "CI/CD", "Jest", "Webpack", "Vite"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning frontend, backend, mobile development, 
            and emerging technologies
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 bg-gradient-to-br ${category.bgColor}`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white font-bold">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs bg-gray-700/50 text-gray-200 hover:bg-gray-600/50 transition-colors font-medium px-3 py-1 border border-gray-600"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
