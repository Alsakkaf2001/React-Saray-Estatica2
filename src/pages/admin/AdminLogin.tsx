import React, { useState } from "react";
import { supabase } from "../../lib/supabase";
import Layout from "../../components/layout/Layout";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const AdminLogin: React.FC<{ onLoggedIn?: () => void }> = ({ onLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      onLoggedIn?.();
      window.history.pushState({}, "", "/admin");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-white p-6 rounded-2xl shadow"
        >
          <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
          <div className="space-y-3">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AdminLogin;
