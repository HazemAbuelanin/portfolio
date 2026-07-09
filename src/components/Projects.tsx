import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import data from "@/data/portfolioData.json";

const Projects = () => {
  const navigate = useNavigate();
  const { projects } = data;
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const handleProjectClick = (slug: string) => {
    navigate(`/project/${slug}`);
  };

  return (
    <section id="projects" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 transition-colors duration-300">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Award-winning autonomous systems and robotics projects across real-world competitions, 
            simulation environments, and embedded hardware solutions
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-8 transition-all duration-300"></div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-zinc-700 bg-zinc-800/50 cursor-pointer hover:bg-zinc-800/70 hover:border-zinc-600"
                    onClick={() => handleProjectClick(project.slug)}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-xs font-medium bg-blue-600/20 text-blue-300 border-blue-500 transition-all duration-300 hover:bg-blue-600/30">
                      {project.status}
                    </Badge>
                    <span className="text-xs text-gray-400 transition-colors duration-300">{project.date}</span>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                    {project.cardTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-gray-300 leading-relaxed transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.skills.slice(0, 4).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-zinc-900 text-gray-200 border border-zinc-600 transition-all duration-300 hover:bg-zinc-700 hover:border-zinc-500">
                        {skill}
                      </Badge>
                    ))}
                    {project.skills.length > 4 && (
                      <Badge variant="secondary" className="text-xs bg-zinc-900 text-gray-400 border border-zinc-600 transition-all duration-300">
                        +{project.skills.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-white text-center mb-12 transition-colors duration-300">More Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {otherProjects.map((project, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-zinc-700 bg-zinc-800/50 cursor-pointer hover:bg-zinc-800/70 hover:border-zinc-600"
                      onClick={() => handleProjectClick(project.slug)}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs bg-zinc-900/50 text-gray-300 border-zinc-600 transition-all duration-300 hover:bg-zinc-800/50">
                        {project.status}
                      </Badge>
                      <span className="text-xs text-gray-400 transition-colors duration-300">{project.date}</span>
                    </div>
                    <CardTitle className="text-lg text-white transition-colors duration-300 leading-tight">
                      {project.cardTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                      {project.description.substring(0, 120)}...
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.skills.slice(0, 3).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs bg-zinc-900 text-gray-200 border border-zinc-600 transition-all duration-300 hover:bg-zinc-700">
                          {skill}
                        </Badge>
                      ))}
                      {project.skills.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-zinc-900 text-gray-400 border border-zinc-600 transition-all duration-300">
                          +{project.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6 transition-colors duration-300">Want to see more of my work?</p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://github.com/HazemAbuelanin', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
