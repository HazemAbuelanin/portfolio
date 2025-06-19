
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";

const ProjectDetail = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Project: {slug}</h1>
          <p className="text-gray-600">Project details will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
