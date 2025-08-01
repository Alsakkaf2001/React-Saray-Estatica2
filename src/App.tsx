import { useEffect } from "react";
import ErrorBoundary from "./components/ui/ErrorBoundary";
import usePerformanceMonitor from "./hooks/usePerformanceMonitor";
import SinglePage from "./pages/SinglePage";

function App() {
  // Monitor performance metrics
  usePerformanceMonitor();

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure the page is fully loaded
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, []);

  return (
    <ErrorBoundary>
      <SinglePage />
    </ErrorBoundary>
  );
}

export default App;
