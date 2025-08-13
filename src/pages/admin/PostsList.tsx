import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import Button from "../../components/ui/Button";
import { fetchPosts } from "../../utils/blogApi";
import type { BlogPost } from "../../types";

const PostsList: React.FC<{
  onEdit?: (id: string) => void;
  onCreate?: () => void;
}> = ({ onEdit, onCreate }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchPosts("all");
        setPosts(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Posts</h2>
        <Button onClick={onCreate}>New Post</Button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {!loading && !error && (
        <div className="overflow-x-auto bg-white rounded-2xl shadow">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3">Title</th>
                <th className="p-3">Status</th>
                <th className="p-3">Published</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((p) => (
                <tr key={p.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{p.title}</td>
                  <td className="p-3 capitalize">
                    {(p as any).status ?? "published"}
                  </td>
                  <td className="p-3">
                    {(p as any).published_at ?? p.publishDate}
                  </td>
                  <td className="p-3">
                    <Button variant="ghost" onClick={() => onEdit?.(p.id)}>
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
};

export default PostsList;
