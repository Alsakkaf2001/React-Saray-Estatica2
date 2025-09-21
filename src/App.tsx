import { useState, useEffect } from "react";
import ErrorBoundary from "./components/ui/ErrorBoundary";
import usePerformanceMonitor from "./hooks/usePerformanceMonitor";
import { NavigationProvider } from "./contexts/NavigationContext";
import { initializeNavigation } from "./utils/navigation";
import SinglePage from "./pages/SinglePage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import TreatmentDetailsPage from "./pages/TreatmentDetailsPage";
import AboutPage from "./pages/AboutPage";
import AdminLogin from "./pages/admin/AdminLogin";
import PostsList from "./pages/admin/PostsList";
import PostEditor from "./pages/admin/PostEditor";
import CustomerContactsPage from "./pages/admin/CustomerContactsPage";
import AdminLayout from "./pages/admin/AdminLayout";

type AppPage =
  | "home"
  | "blog"
  | "blog-post"
  | "treatment-details"
  | "about"
  | "admin-login"
  | "admin"
  | "admin-edit"
  | "admin-contacts";

function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>("home");
  const [currentBlogSlug, setCurrentBlogSlug] = useState<string>("");
  const [currentTreatmentId, setCurrentTreatmentId] = useState<string>("");

  // Monitor performance metrics
  usePerformanceMonitor();

  // Initialize navigation system
  useEffect(() => {
    const cleanup = initializeNavigation();
    return cleanup;
  }, []);

  // Handle navigation
  useEffect(() => {
    const handlePopState = () => {
      // Support GitHub Pages base path
      const path = window.location.pathname.replace(
        import.meta.env.BASE_URL || "/",
        "/"
      );
      // Hash navigation is now handled by the navigation system

      if (path.startsWith("/admin/login")) {
        setCurrentPage("admin-login");
      } else if (path.startsWith("/admin/contacts")) {
        setCurrentPage("admin-contacts");
      } else if (path.startsWith("/admin/posts/new")) {
        setCurrentPage("admin-edit");
        setCurrentBlogSlug("");
      } else if (path.startsWith("/admin/posts/")) {
        setCurrentPage("admin-edit");
        setCurrentBlogSlug(path.split("/admin/posts/")[1]);
      } else if (path.startsWith("/admin")) {
        setCurrentPage("admin");
      } else if (path.includes("/treatments/") && path.split("/").length > 2) {
        const treatmentId = path.split("/treatments/")[1];
        setCurrentTreatmentId(treatmentId);
        setCurrentPage("treatment-details");
        // Ensure treatment details page starts from top
        setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 100);
      } else if (path.includes("/about")) {
        setCurrentPage("about");
        // Ensure about page starts from top
        setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 100);
      } else if (path.includes("/blog/") && path.split("/").length > 2) {
        const slug = path.split("/blog/")[1];
        setCurrentBlogSlug(slug);
        setCurrentPage("blog-post");
        // Ensure blog post page starts from top
        setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 100);
      } else if (path.includes("/blog")) {
        setCurrentPage("blog");
        // Ensure blog page starts from top
        setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 100);
      } else {
        setCurrentPage("home");
        // Hash navigation is now handled by the navigation system
        // No need to manually handle it here
      }
    };

    // Initial navigation
    handlePopState();

    // Listen for browser navigation
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Navigation functions
  // const navigateToHome = () => {
  //   window.history.pushState({}, "", "/");
  //   setCurrentPage("home");
  // };

  const navigateToBlog = () => {
    const base = import.meta.env.BASE_URL || "/";
    window.history.pushState({}, "", `${base}blog`);
    setCurrentPage("blog");
    // Scroll to top when navigating to blog
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const navigateToBlogPost = (slug: string) => {
    const base = import.meta.env.BASE_URL || "/";
    window.history.pushState({}, "", `${base}blog/${slug}`);
    setCurrentBlogSlug(slug);
    setCurrentPage("blog-post");
    // Scroll to top when navigating to blog post
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const navigateToTreatmentDetails = (treatmentId: string) => {
    const base = import.meta.env.BASE_URL || "/";
    window.history.pushState({}, "", `${base}treatments/${treatmentId}`);
    setCurrentTreatmentId(treatmentId);
    setCurrentPage("treatment-details");
    // Scroll to top when navigating to treatment details
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const navigateBackToHome = () => {
    const base = import.meta.env.BASE_URL || "/";
    window.history.pushState({}, "", base);
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const navigateToAbout = () => {
    const base = import.meta.env.BASE_URL || "/";
    window.history.pushState({}, "", `${base}about`);
    setCurrentPage("about");
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const navigateToHomeSection = (hash: string) => {
    const base = import.meta.env.BASE_URL || "/";
    window.history.pushState({}, "", `${base}${hash}`);
    setCurrentPage("home");
    // Navigation system will handle the scrolling automatically
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "admin-login":
        return (
          <AdminLogin
            onLoggedIn={() => {
              const base = import.meta.env.BASE_URL || "/";
              window.history.pushState({}, "", `${base}admin`);
              window.dispatchEvent(new PopStateEvent("popstate"));
            }}
          />
        );
      case "admin":
        return (
          <PostsList
            onCreate={() => {
              const base = import.meta.env.BASE_URL || "/";
              window.history.pushState({}, "", `${base}admin/posts/new`);
              window.dispatchEvent(new PopStateEvent("popstate"));
            }}
            onEdit={(id) => {
              const base = import.meta.env.BASE_URL || "/";
              window.history.pushState({}, "", `${base}admin/posts/${id}`);
              window.dispatchEvent(new PopStateEvent("popstate"));
            }}
          />
        );
      case "admin-edit":
        return (
          <PostEditor
            id={currentBlogSlug}
            onBack={() => {
              const base = import.meta.env.BASE_URL || "/";
              window.history.pushState({}, "", `${base}admin`);
              window.dispatchEvent(new PopStateEvent("popstate"));
            }}
          />
        );
      case "admin-contacts":
        return (
          <AdminLayout>
            <CustomerContactsPage />
          </AdminLayout>
        );
      case "blog":
        return (
          <BlogPage
            onPostSelect={navigateToBlogPost}
            onNavigateToHome={navigateToHomeSection}
          />
        );
      case "blog-post":
        return (
          <BlogPostPage
            slug={currentBlogSlug}
            onBack={navigateToBlog}
            onPostSelect={navigateToBlogPost}
            onNavigateToHome={navigateToHomeSection}
          />
        );
      case "treatment-details":
        return (
          <TreatmentDetailsPage
            treatmentId={currentTreatmentId}
            onBack={navigateBackToHome}
            onNavigate={navigateToHomeSection}
          />
        );
      case "about":
        return <AboutPage onNavigate={navigateToHomeSection} />;
      case "home":
      default:
        return (
          <SinglePage
            onNavigateToBlog={navigateToBlog}
            onNavigateToTreatment={navigateToTreatmentDetails}
            onNavigateToAbout={navigateToAbout}
          />
        );
    }
  };

  return (
    <ErrorBoundary>
      <NavigationProvider>{renderCurrentPage()}</NavigationProvider>
    </ErrorBoundary>
  );
}

export default App;
