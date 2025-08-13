import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Layout from "../../components/layout/Layout";
import Button from "../../components/ui/Button";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ready, setReady] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setIsLogged(Boolean(data.session));
      setReady(true);
    });
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
        {children}
      </div>
    </Layout>
  );
};

export default AdminLayout;
