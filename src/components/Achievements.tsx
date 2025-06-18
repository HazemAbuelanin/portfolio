
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Target, GraduationCap, Users, Star } from "lucide-react";

const achievements = [
  {
    title: "2nd Place Worldwide",
    event: "Shell Eco-marathon APC 2025",
    description: "Autonomous vehicle competition",
    icon: Trophy,
    place: "2nd",
    color: "from-yellow-400 to-orange-500",
    participants: "24 teams worldwide"
  },
  {
    title: "Dean's List",
    event: "Academic Excellence",
    description: "Top 5% academic performance",
    icon: GraduationCap,
    place: "Top 5%",
    color: "from-blue-400 to-purple-500",
    participants: "Computer Engineering"
  },
  {
    title: "3rd Place National",
    event: "EVER Egypt Autonomous Track 2024",
    description: "National autonomous vehicle competition",
    icon: Award,
    place: "3rd",
    color: "from-orange-400 to-red-500",
    participants: "15 teams nationally"
  },
  {
    title: "Open Source Contributor",
    event: "GitHub Contributions",
    description: "Active contributor to major projects",
    icon: Star,
    place: "500+",
    color: "from-green-400 to-emerald-500",
    participants: "commits this year"
  },
  {
    title: "Research Publication",
    event: "IEEE Conference Paper",
    description: "Machine learning research publication",
    icon: Target,
    place: "Published",
    color: "from-indigo-400 to-purple-500",
    participants: "Peer-reviewed"
  },
  {
    title: "Team Leadership",
    event: "Student Organization",
    description: "Founded and led technical teams",
    icon: Users,
    place: "Leader",
    color: "from-pink-400 to-red-500",
    participants: "30+ members"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Academic excellence and professional recognition
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
                    {achievement.place}
                  </div>
                  <CardTitle className="text-xl text-slate-800">
                    {achievement.title}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-slate-700">
                    {achievement.event}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 mb-4">{achievement.description}</p>
                  <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                    {achievement.participants}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
