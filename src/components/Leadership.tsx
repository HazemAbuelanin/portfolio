
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, Lightbulb, Target, Code, BookOpen } from "lucide-react";

const leadership = [
  {
    title: "Technical Team Founder",
    description: "Founded and established multiple technical teams including autonomous vehicle racing teams, coding clubs, and research groups, creating platforms for student innovation and learning.",
    icon: Lightbulb,
    color: "from-blue-500 to-indigo-500",
    impact: "3 teams established"
  },
  {
    title: "Student Mentorship Program",
    description: "Developed and led comprehensive mentorship programs for junior students, covering programming fundamentals, career guidance, and technical skill development.",
    icon: GraduationCap,
    color: "from-emerald-500 to-teal-500",
    impact: "50+ students mentored"
  },
  {
    title: "Open Source Community",
    description: "Built and maintained open source projects, fostering collaboration among developers and contributing to the broader tech community through code and documentation.",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    impact: "Multiple repositories"
  },
  {
    title: "Workshop & Training Leader",
    description: "Organized and conducted technical workshops on web development, mobile app development, and emerging technologies for student organizations and tech communities.",
    icon: BookOpen,
    color: "from-orange-500 to-red-500",
    impact: "20+ workshops delivered"
  },
  {
    title: "Project Management",
    description: "Led cross-functional teams in various technical projects, coordinating between developers, designers, and stakeholders to deliver successful outcomes on time.",
    icon: Target,
    color: "from-green-500 to-emerald-500",
    impact: "10+ projects completed"
  },
  {
    title: "Peer Collaboration",
    description: "Facilitated knowledge sharing sessions, code reviews, and collaborative learning environments that enhanced team productivity and individual growth.",
    icon: Users,
    color: "from-indigo-500 to-purple-500",
    impact: "Team collaboration"
  }
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Leadership & Community Impact
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Building teams and empowering others through technology
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
