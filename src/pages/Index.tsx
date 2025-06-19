
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import BlogPosts from "@/components/BlogPosts";
import Contact from "@/components/Contact";

console.log("Index component is loading...");

const Index = () => {
  console.log("Index component is rendering...");
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <BlogPosts />
      <Contact />
    </div>
  );
};

export default Index;
