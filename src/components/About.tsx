
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, Code, Target, Heart, Trophy } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {/* EDIT HERE: Update your personal description */}
            Computer Engineering student with expertise in autonomous systems, web development, 
            and AI applications. Passionate about creating innovative solutions that make a real impact.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-700 bg-gradient-to-br from-gray-800 to-slate-800">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Education</h3>
                {/* EDIT HERE: Update your education details */}
                <p className="text-gray-300 font-medium">Computer Engineering</p>
                <p className="text-gray-400 text-sm">Cairo University</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-700 bg-gradient-to-br from-gray-800 to-slate-800">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Achievements</h3>
                {/* EDIT HERE: Update your achievements */}
                <p className="text-gray-300 font-medium">Shell Eco-marathon Winner</p>
                <p className="text-gray-400 text-sm">2nd Place Worldwide</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-700 bg-gradient-to-br from-gray-800 to-slate-800">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Status</h3>
                {/* EDIT HERE: Update your availability status */}
                <p className="text-gray-300 font-medium">Open to Opportunities</p>
                <p className="text-gray-400 text-sm">Full-time & Freelance</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="md:col-span-2 p-8 border border-gray-700 bg-gradient-to-br from-gray-800 to-slate-800 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-0">
                <div className="flex items-center mb-6">
                  <Code className="h-6 w-6 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">My Journey</h3>
                </div>
                {/* EDIT HERE: Update your personal story */}
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  My journey in engineering started with a fascination for autonomous systems and AI. 
                  As a computer engineering student at Cairo University, I've combined academic excellence 
                  with hands-on experience in competitions like Shell Eco-marathon.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in full-stack development, machine learning, and autonomous vehicle systems. 
                  My goal is to create technology that solves real-world problems and pushes the boundaries 
                  of what's possible in engineering and software development.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 border border-gray-700 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <Target className="h-5 w-5 text-orange-400 mr-2" />
                    <h4 className="font-bold text-white">Goals</h4>
                  </div>
                  {/* EDIT HERE: Update your goals */}
                  <p className="text-gray-300 text-sm">
                    Leading innovation in autonomous systems and AI-driven solutions that transform industries.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 border border-gray-700 bg-gradient-to-br from-pink-500/20 to-rose-500/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <Heart className="h-5 w-5 text-pink-400 mr-2" />
                    <h4 className="font-bold text-white">Interests</h4>
                  </div>
                  {/* EDIT HERE: Update your interests */}
                  <p className="text-gray-300 text-sm">
                    Autonomous Vehicles, AI/ML, Web Development, Competitive Programming, and Open Source.
                  </p>
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
