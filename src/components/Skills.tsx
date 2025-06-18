
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Smartphone, Database, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Next.js", "Vue.js"]
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    skills: ["Node.js", "Python", "Java", "Express.js", "FastAPI", "RESTful APIs", "GraphQL"]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    skills: ["React Native", "Flutter", "iOS Development", "Android Development", "Cross-platform"]
  },
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-orange-500 to-red-500",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C", "Go", "SQL"]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-indigo-500 to-purple-500",
    skills: ["TensorFlow", "PyTorch", "OpenCV", "Computer Vision", "NLP", "Deep Learning", "Data Science"]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    color: "from-green-500 to-emerald-500",
    skills: ["Git", "Docker", "AWS", "Linux", "PostgreSQL", "MongoDB", "Redis", "CI/CD"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive expertise across the technology stack
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-slate-800">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
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
