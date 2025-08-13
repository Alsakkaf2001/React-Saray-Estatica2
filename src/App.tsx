import { useState, useEffect } from "react";
import ErrorBoundary from "./components/ui/ErrorBoundary";
import usePerformanceMonitor from "./hooks/usePerformanceMonitor";
import SinglePage from "./pages/SinglePage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import AdminLogin from "./pages/admin/AdminLogin";
import PostsList from "./pages/admin/PostsList";
import PostEditor from "./pages/admin/PostEditor";

type AppPage =
  | "home"
  | "blog"
  | "blog-post"
  | "admin-login"
  | "admin"
  | "admin-edit";

function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>("home");
  const [currentBlogSlug, setCurrentBlogSlug] = useState<string>("");

  // Monitor performance metrics
  usePerformanceMonitor();

  // Handle navigation
  useEffect(() => {
    const handlePopState = () => {
      // Support GitHub Pages base path
      const path = window.location.pathname.replace(
        import.meta.env.BASE_URL || "/",
        "/"
      );
      const hash = window.location.hash;

      if (path.startsWith("/admin/login")) {
        setCurrentPage("admin-login");
      } else if (path.startsWith("/admin/posts/new")) {
        setCurrentPage("admin-edit");
        setCurrentBlogSlug("");
      } else if (path.startsWith("/admin/posts/")) {
        setCurrentPage("admin-edit");
        setCurrentBlogSlug(path.split("/admin/posts/")[1]);
      } else if (path.startsWith("/admin")) {
        setCurrentPage("admin");
      } else if (path.includes("/blog/") && path.split("/").length > 2) {
        const slug = path.split("/blog/")[1];
        setCurrentBlogSlug(slug);
        setCurrentPage("blog-post");
      } else if (path.includes("/blog")) {
        setCurrentPage("blog");
      } else {
        setCurrentPage("home");
        // Handle hash navigation for single page
        if (hash) {
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
  };

  const navigateToHomeSection = (hash: string) => {
    const base = import.meta.env.BASE_URL || "/";
    window.history.pushState({}, "", `${base}${hash}`);
    setCurrentPage("home");
    // Small delay to ensure the page loads before scrolling
    setTimeout(() => {
      const targetId = hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
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
      case "home":
      default:
        return <SinglePage onNavigateToBlog={navigateToBlog} />;
    }
  };

  return <ErrorBoundary>{renderCurrentPage()}</ErrorBoundary>;
}

export default App;
