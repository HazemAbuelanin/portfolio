
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Let's collaborate on the future of autonomous vehicle technology
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl mb-4">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-400 to-emerald-400 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-blue-200">hazem.abuelanin@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-blue-200">+20 XXX XXX XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-blue-200">Cairo, Egypt</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl mb-4">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 hover:scale-105">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white col-span-2 transition-all duration-300 hover:scale-105">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl mb-4">Current Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge className="bg-green-600/20 text-green-400 border-green-400">
                    Available for Opportunities
                  </Badge>
                  <Badge className="bg-blue-600/20 text-blue-400 border-blue-400">
                    Computer Engineering Student
                  </Badge>
                  <Badge className="bg-purple-600/20 text-purple-400 border-purple-400">
                    Team Leader & Mentor
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl mb-4">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Name</label>
                  <Input className="bg-white/10 border-white/20 text-white placeholder:text-white/60" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Email</label>
                  <Input className="bg-white/10 border-white/20 text-white placeholder:text-white/60" placeholder="Your email" type="email" />
                </div>
              </div>
              
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Subject</label>
                <Input className="bg-white/10 border-white/20 text-white placeholder:text-white/60" placeholder="Message subject" />
              </div>
              
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Message</label>
                <Textarea className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[120px]" placeholder="Your message..." />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white transition-all duration-300 hover:scale-105">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
