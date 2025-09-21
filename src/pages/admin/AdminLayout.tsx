import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Layout from "../../components/layout/Layout";
import Button from "../../components/ui/Button";
import { Users, FileText } from "lucide-react";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ready, setReady] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setIsLogged(Boolean(data.session));
      setReady(true);
    });

    // Listen for navigation changes
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  if (!ready) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          Loading...
        </div>
      </Layout>
    );
  }

  if (!isLogged) {
    window.history.pushState({}, "", "/admin/login");
    window.dispatchEvent(new PopStateEvent("popstate"));
    return null;
  }

  const navigationItems = [
    {
      name: "Customer Contacts",
      href: "/admin/contacts",
      icon: Users,
      current: currentPath === "/admin/contacts",
    },
    {
      name: "Blog Posts",
      href: "/admin",
      icon: FileText,
      current:
        currentPath === "/admin" || currentPath.startsWith("/admin/posts"),
    },
  ];

  const handleNavigation = (href: string) => {
    const base = import.meta.env.BASE_URL || "/";
    window.history.pushState({}, "", `${base}${href.replace(/^\//, "")}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <Button
            variant="ghost"
            onClick={async () => {
              await supabase.auth.signOut();
              window.history.pushState({}, "", "/admin/login");
              window.dispatchEvent(new PopStateEvent("popstate"));
            }}
          >
            Sign out
          </Button>
        </div>

        {/* Navigation */}
        <nav className="mb-8">
          <div className="flex space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    item.current
                      ? "bg-primary-100 text-primary-700"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </button>
              );
            })}
          </div>
        </nav>

        {children}
      </div>
    </Layout>
  );
};

export default AdminLayout;
