
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, Code, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {/* EDIT HERE: Update your personal description */}
            I'm a passionate computer engineering student who loves turning complex problems 
            into elegant solutions through code and creativity.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-slate-800">Education</h3>
                {/* EDIT HERE: Update your education details */}
                <p className="text-slate-600 font-medium">Computer Engineering</p>
                <p className="text-slate-500 text-sm">Cairo University</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-emerald-50 to-teal-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-slate-800">Location</h3>
                {/* EDIT HERE: Update your location */}
                <p className="text-slate-600 font-medium">Cairo, Egypt</p>
                <p className="text-slate-500 text-sm">Available Worldwide</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-slate-800">Status</h3>
                {/* EDIT HERE: Update your availability status */}
                <p className="text-slate-600 font-medium">Open to Opportunities</p>
                <p className="text-slate-500 text-sm">Full-time & Freelance</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="md:col-span-2 p-8 border-0 bg-gradient-to-br from-slate-50 to-gray-50 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-0">
                <div className="flex items-center mb-6">
                  <Code className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-slate-800">My Journey</h3>
                </div>
                {/* EDIT HERE: Update your personal story */}
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  My passion for technology started early, and I've been on an exciting journey 
                  of continuous learning and innovation. I believe in the power of technology 
                  to solve real-world problems and create meaningful impact.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Whether it's building responsive web applications, developing AI solutions, 
                  or working on complex engineering projects, I approach every challenge with 
                  curiosity, creativity, and determination.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 border-0 bg-gradient-to-br from-orange-50 to-yellow-50 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <Target className="h-5 w-5 text-orange-600 mr-2" />
                    <h4 className="font-bold text-slate-800">Goals</h4>
                  </div>
                  {/* EDIT HERE: Update your goals */}
                  <p className="text-slate-600 text-sm">
                    Building innovative solutions that make a difference in people's lives.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 border-0 bg-gradient-to-br from-pink-50 to-rose-50 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <Heart className="h-5 w-5 text-pink-600 mr-2" />
                    <h4 className="font-bold text-slate-800">Interests</h4>
                  </div>
                  {/* EDIT HERE: Update your interests */}
                  <p className="text-slate-600 text-sm">
                    AI/ML, Web Development, Mobile Apps, IoT, and Open Source.
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
