import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import data from "@/data/portfolioData.json";

const Contact = () => {
  const { profile } = data;
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-800/50 border border-gray-600">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-300 text-lg">Email</p>
                  <a 
                    href={`mailto:${profile.email}`}
                    className="text-blue-400 text-xl hover:text-blue-300 transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
