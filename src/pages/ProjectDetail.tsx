import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from "lucide-react";
import data from "@/data/portfolioData.json";

function getYouTubeId(url: string): string | null {
  const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[1].length === 11) ? match[1] : null;
}

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [videoPlaying, setVideoPlaying] = useState(false);

  const project = data.projects.find(p => p.slug === slug) ?? null;

  const handleBackToProjects = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Button onClick={handleBackToProjects} className="bg-blue-600 hover:bg-blue-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-slate-700 py-8">
        <div className="container mx-auto px-6">
          <Button 
            onClick={handleBackToProjects}
            variant="ghost" 
            className="text-white hover:bg-white/10 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
          
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold text-white">{project.title}</h1>
            <Badge className="bg-blue-600 text-white">{project.status}</Badge>
          </div>
          
          <p className="text-xl text-gray-300 mb-6 max-w-4xl">{project.description}</p>
          
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {project.date}
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-2" />
              {project.skills.length} Technologies
            </div>
          </div>
          
          <div className="flex gap-4">
            {project.githubUrl && project.githubUrl !== "#" && (
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => window.open(project.githubUrl!, '_blank')}
              >
                <Github className="mr-2 h-4 w-4" />
                View Source Code
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Media Section */}
            <Card className="bg-gray-800 border-gray-700 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Project Media</h3>
                {project.youtubeUrl && project.youtubeUrl.trim() !== "" && getYouTubeId(project.youtubeUrl) && (
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-300 mb-3">Project Video</h4>
                    <div className="relative aspect-video rounded-lg overflow-hidden" style={{ maxWidth: 640, margin: "0 auto" }}>
                      {videoPlaying ? (
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${getYouTubeId(project.youtubeUrl)}?autoplay=1&rel=0`}
                          title="Project Video"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      ) : (
                        <div
                          className="relative w-full h-full cursor-pointer group"
                          onClick={() => setVideoPlaying(true)}
                        >
                          <img
                            src={`https://img.youtube.com/vi/${getYouTubeId(project.youtubeUrl)}/maxresdefault.jpg`}
                            alt="Video thumbnail"
                            className="w-full h-full object-cover"
                            onError={e => {
                              (e.target as HTMLImageElement).src =
                                `https://img.youtube.com/vi/${getYouTubeId(project.youtubeUrl)}/hqdefault.jpg`;
                            }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/55 transition-all duration-200">
                            <div className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-200 group-hover:scale-110">
                              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                            ▶ Click to play
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {project.images && project.images.length > 0 && (
                  <div>
                    <h4 className="text-lg font-medium text-gray-300 mb-3">Project Images</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.images.map((image, index) => (
                        <div key={index} className="aspect-video rounded-lg overflow-hidden">
                          <img
                            src={`${import.meta.env.BASE_URL}${image}`}
                            alt={`Project Image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Article Content */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div 
                  className="prose prose-invert prose-blue max-w-none"
                  dangerouslySetInnerHTML={{ __html: project.articleHtml }}
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies Used */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-200 border-gray-600">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  {project.competitionUrl ? (
                    <>
                      <Button 
                        className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                        onClick={() => window.open(project.competitionUrl!, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Competition
                      </Button>
                      <div className="text-center">
                        <p className="text-sm text-gray-400 mb-2">Source Code & Documentation</p>
                        <Badge variant="outline" className="bg-yellow-600/20 text-yellow-300 border-yellow-500">
                          In Progress
                        </Badge>
                      </div>
                    </>
                  ) : (
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={() => project.githubUrl && project.githubUrl !== '#' && window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Project Info */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <Badge className="bg-green-600 text-white">{project.status}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Year:</span>
                    <span className="text-white">{project.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Technologies:</span>
                    <span className="text-white">{project.skills.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
