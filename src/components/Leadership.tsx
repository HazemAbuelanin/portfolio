
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, Lightbulb, Target } from "lucide-react";

const leadership = [
  {
    title: "Founded Autonomous Shoubra Racing Team",
    description: "Established the first autonomous vehicle team at Benha University - Shoubra Faculty of Engineering, creating a foundation for autonomous vehicle research and development.",
    icon: Lightbulb,
    color: "from-blue-500 to-indigo-500",
    impact: "First of its kind"
  },
  {
    title: "Multi-Team Formation",
    description: "Initiated and led the formation of multiple autonomous racing teams, including Shell Eco-marathon, F1TENTH, and Formula Student Driverless teams.",
    icon: Target,
    color: "from-purple-500 to-pink-500",
    impact: "3 active teams"
  },
  {
    title: "Comprehensive Training Program",
    description: "Designed and conducted a comprehensive learning program covering fundamentals of autonomy, embedded systems, and software development.",
    icon: GraduationCap,
    color: "from-emerald-500 to-teal-500",
    impact: "30+ members trained"
  },
  {
    title: "Student Mentorship",
    description: "Mentored junior students by providing guidance and training in key autonomy concepts, autonomous stacks, programming, ROS, and system integration.",
    icon: Users,
    color: "from-orange-500 to-red-500",
    impact: "Ongoing mentorship"
  }
];

const Leadership = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Leadership & Impact
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Building teams, fostering innovation, and mentoring the next generation of engineers
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {leadership.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline" className="border-slate-600 text-slate-300">
                      {item.impact}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white mb-2">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
