
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Target } from "lucide-react";

const achievements = [
  {
    title: "2nd Place Worldwide",
    event: "Shell Eco-marathon APC 2025",
    description: "Competed against 24 international teams",
    icon: Trophy,
    place: "2nd",
    color: "from-yellow-400 to-orange-500",
    participants: "24 teams"
  },
  {
    title: "3rd Place National",
    event: "EVER Egypt Autonomous Track 2024",
    description: "Ranking among 15 competing teams nationally",
    icon: Award,
    place: "3rd",
    color: "from-orange-400 to-red-500",
    participants: "15 teams"
  },
  {
    title: "4th Place Global",
    event: "F1TENTH IROS Sim League 2024",
    description: "Outperforming 58 teams worldwide",
    icon: Target,
    place: "4th",
    color: "from-blue-400 to-purple-500",
    participants: "58 teams"
  }
];

const Achievements = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Competition Achievements
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Proven excellence in international autonomous vehicle competitions
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
                  <div className={`text-6xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
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
