
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

console.log("App component is loading...");

const queryClient = new QueryClient();

const App = () => {
  console.log("App component is rendering...");
  console.log("Current pathname:", window.location.pathname);
  console.log("Current search:", window.location.search);
  console.log("Current hash:", window.location.hash);
  
  try {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/project/:slug" element={<ProjectDetail />} />
              <Route path="/blog/:slug" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    );
  } catch (error) {
    console.error("Error rendering App:", error);
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h1>App Error</h1>
        <p>Something went wrong loading the application.</p>
        <pre>{error instanceof Error ? error.message : String(error)}</pre>
      </div>
    );
  }
};

export default App;
