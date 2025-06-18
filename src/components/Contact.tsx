
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  // EDIT HERE: Handle form submission - connect to your preferred service (Formspree, Netlify Forms, etc.)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you!
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8"></div>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-100">Get in Touch</h3>
              <p className="text-blue-200 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Let's create something amazing together.
              </p>
            </div>

            <div className="space-y-6">
              {/* EDIT HERE: Update your contact information */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-blue-100">Email</p>
                  <p className="text-blue-200">hazem@example.com</p> {/* REPLACE: Add your email */}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-blue-100">Phone</p>
                  <p className="text-blue-200">+20 123 456 7890</p> {/* REPLACE: Add your phone */}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-blue-100">Location</p>
                  <p className="text-blue-200">Cairo, Egypt</p> {/* REPLACE: Add your location */}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold text-blue-100 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {/* EDIT HERE: Update social media links */}
                <Button variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              
              {/* EDIT HERE: Connect form to your backend/service */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      First Name
                    </label>
                    <Input 
                      className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      Last Name
                    </label>
                    <Input 
                      className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Email Address
                  </label>
                  <Input 
                    type="email"
                    className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Subject
                  </label>
                  <Input 
                    className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                    placeholder="Project Discussion"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Message
                  </label>
                  <Textarea 
                    className="bg-white/10 border-white/20 text-white placeholder-blue-200 min-h-[120px]"
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 py-3"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
