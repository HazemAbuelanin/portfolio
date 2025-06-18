
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Smartphone, Database, Brain, Wrench, Palette, Server } from "lucide-react";

// EDIT HERE: Add, remove, or modify skill categories and individual skills
const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    color: "from-blue-500 to-cyan-400",
    bgColor: "from-blue-50 to-cyan-50",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js"]
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "from-emerald-500 to-teal-400",
    bgColor: "from-emerald-50 to-teal-50",
    skills: ["Node.js", "Python", "Java", "Express.js", "FastAPI", "RESTful APIs", "GraphQL", "PostgreSQL"]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-purple-500 to-pink-400",
    bgColor: "from-purple-50 to-pink-50",
    skills: ["React Native", "Flutter", "iOS Development", "Android Development", "Expo"]
  },
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-orange-500 to-red-400",
    bgColor: "from-orange-50 to-red-50",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C", "Go", "Rust"]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-indigo-500 to-purple-400",
    bgColor: "from-indigo-50 to-purple-50",
    skills: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "Pandas", "NumPy", "Computer Vision", "NLP"]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "from-green-500 to-emerald-400",
    bgColor: "from-green-50 to-emerald-50",
    skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Google Cloud", "Docker", "Kubernetes"]
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    color: "from-pink-500 to-rose-400",
    bgColor: "from-pink-50 to-rose-50",
    skills: ["Figma", "Adobe XD", "Photoshop", "UI Design", "UX Research", "Prototyping"]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    color: "from-slate-500 to-gray-400",
    bgColor: "from-slate-50 to-gray-50",
    skills: ["Git", "GitHub", "VS Code", "Linux", "CI/CD", "Jest", "Webpack", "Vite"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning frontend, backend, mobile development, 
            and emerging technologies
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br ${category.bgColor}`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-slate-800 font-bold">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs bg-white/80 text-slate-700 hover:bg-white transition-colors font-medium px-3 py-1"
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

        {/* Skill proficiency levels */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Proficiency Levels</h3>
            <p className="text-slate-600">My expertise across different technology areas</p>
          </div>
          
          {/* EDIT HERE: Update skill levels and add/remove skills */}
          <div className="space-y-6">
            {[
              { skill: "React & TypeScript", level: 90, color: "bg-blue-500" },
              { skill: "Python & Backend Development", level: 85, color: "bg-emerald-500" },
              { skill: "Machine Learning & AI", level: 80, color: "bg-purple-500" },
              { skill: "Mobile Development", level: 75, color: "bg-pink-500" },
              { skill: "Cloud & DevOps", level: 70, color: "bg-indigo-500" },
              { skill: "UI/UX Design", level: 65, color: "bg-orange-500" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-slate-800">{item.skill}</span>
                  <span className="text-sm text-slate-600 font-medium">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div 
                    className={`${item.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
