
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Achievements />
      <Projects />
      <Leadership />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
