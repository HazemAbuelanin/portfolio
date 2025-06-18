
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-slate-600">Computer Engineering Student</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <MapPin className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Location</h3>
                <p className="text-slate-600">Cairo, Egypt</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Status</h3>
                <p className="text-slate-600">Available for Opportunities</p>
              </CardContent>
            </Card>
          </div>

          <Card className="p-8">
            <CardContent className="pt-0">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                I'm a passionate computer engineering student with a strong foundation in software development, 
                embedded systems, and emerging technologies. My journey spans from competitive programming 
                to leading autonomous vehicle racing teams, always driven by curiosity and innovation.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                I believe in the power of technology to solve real-world problems and am committed to 
                continuous learning and collaboration. Whether building web applications, developing 
                AI solutions, or mentoring fellow students, I approach every challenge with enthusiasm 
                and a growth mindset.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
