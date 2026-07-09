import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart } from "lucide-react";
import data from "@/data/portfolioData.json";

const About = () => {
  const { profile } = data;
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 transition-colors duration-300">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto transition-all duration-300"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <Card className="md:col-span-2 p-8 bg-zinc-800/50 border border-zinc-700 transition-all duration-300 hover:bg-zinc-800/70 hover:border-zinc-600">
              <CardContent className="pt-0">
                <div className="space-y-6">
                  {profile.aboutParagraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-lg text-gray-300 leading-relaxed transition-colors duration-300"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Side Cards */}
            <div className="space-y-6">
              <Card className="p-6 bg-zinc-800/50 border border-zinc-700 transition-all duration-300 hover:bg-zinc-800/70 hover:border-zinc-600 hover:-translate-y-1">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <Target className="h-5 w-5 text-blue-400 mr-2 transition-colors duration-300" />
                    <h4 className="font-bold text-white">Goals</h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                    {profile.goals}
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-zinc-800/50 border border-zinc-700 transition-all duration-300 hover:bg-zinc-800/70 hover:border-zinc-600 hover:-translate-y-1">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <Heart className="h-5 w-5 text-purple-400 mr-2 transition-colors duration-300" />
                    <h4 className="font-bold text-white">Interests</h4>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {profile.interests.map((interest, index) => (
                      <li key={index} className="transition-colors duration-300 hover:text-gray-200">
                        • {interest}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
