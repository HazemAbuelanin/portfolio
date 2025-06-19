
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("Main.tsx is loading...");

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element not found!");
  document.body.innerHTML = '<div style="padding: 20px; color: red;"><h1>Error</h1><p>Root element not found in HTML</p></div>';
} else {
  console.log("Root element found, creating React app...");
  
  try {
    const root = createRoot(rootElement);
    root.render(<App />);
    console.log("React app rendered successfully");
  } catch (error) {
    console.error("Error rendering React app:", error);
    rootElement.innerHTML = `
      <div style="padding: 20px; color: red;">
        <h1>Render Error</h1>
        <p>Failed to render React application</p>
        <pre>${error instanceof Error ? error.message : String(error)}</pre>
      </div>
    `;
  }
}
