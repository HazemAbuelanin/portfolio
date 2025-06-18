
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to collaborate on innovative projects
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-400 to-emerald-400 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-blue-200 text-sm">hazem.abuelanin@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-blue-200 text-sm">+20 XXX XXX XXXX</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-blue-200 text-sm">Cairo, Egypt</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button className="bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 hover:scale-105">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Compact Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Input className="bg-white/10 border-white/20 text-white placeholder:text-white/60 text-sm" placeholder="Name" />
                <Input className="bg-white/10 border-white/20 text-white placeholder:text-white/60 text-sm" placeholder="Email" type="email" />
              </div>
              <Input className="bg-white/10 border-white/20 text-white placeholder:text-white/60 text-sm" placeholder="Subject" />
              <Textarea className="bg-white/10 border-white/20 text-white placeholder:text-white/60 text-sm min-h-[80px]" placeholder="Message..." />
              <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white transition-all duration-300 hover:scale-105">
                <Send className="mr-2 h-4 w-4" />
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
