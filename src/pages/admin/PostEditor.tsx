import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import {
  createPost,
  updatePost,
  fetchPostBySlug,
  uploadImage,
  fetchCategories,
} from "../../utils/blogApi";
import { generateSlug } from "../../utils/blogUtils";

const PostEditor: React.FC<{ id?: string; onBack?: () => void }> = ({
  id,
  onBack,
}) => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageMode, setImageMode] = useState<"url" | "upload">("url");
  const [categories, setCategories] = useState<
    Array<{ id?: string; name: string; slug: string }>
  >([]);
  const [categorySlug, setCategorySlug] = useState<string>("dental");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load categories
    fetchCategories()
      .then((cats) => setCategories(cats))
      .catch(() => setCategories([]));

    if (!id) return;
    // For simplicity we fetch by slug if provided as id===slug
    (async () => {
      try {
        const post = await fetchPostBySlug(id);
        if (post) {
          setTitle(post.title);
          setSlug(post.slug);
          setExcerpt(post.excerpt);
          setContent(post.content);
          setImageUrl((post as any).image_url || post.image);
          setStatus(((post as any).status as any) || "published");
          setCategorySlug((post as any).category || post.category || "dental");
        }
      } catch (e: any) {
        setError(e.message);
      }
    })();
  }, [id]);

  const handleSave = async (publish = false) => {
    setSaving(true);
    setError(null);
    try {
      const payload: any = {
        title,
        slug: slug || generateSlug(title),
        excerpt,
        content_md: content,
        image_url: imageUrl,
        status: publish ? "published" : status,
        published_at: publish ? new Date().toISOString() : null,
        category: categorySlug,
      };
      if (id) await updatePost(id, payload);
      else await createPost(payload);
      onBack?.();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  };

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    const url = await uploadImage(e.target.files[0]);
    setImageUrl(url);
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" onClick={onBack}>
          Back
        </Button>
        <div className="space-x-2">
          <Button
            variant="ghost"
            onClick={() => handleSave(false)}
            disabled={saving}
          >
            Save Draft
          </Button>
          <Button onClick={() => handleSave(true)} disabled={saving}>
            {saving ? "Saving..." : "Publish"}
          </Button>
        </div>
      </div>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <div className="grid gap-4">
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
        <Input
          placeholder="Excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
        />
        <textarea
          className="w-full border rounded-lg p-3 min-h-[240px]"
          placeholder="Markdown content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <label className="text-sm">Image input:</label>
            <select
              value={imageMode}
              onChange={(e) => setImageMode(e.target.value as any)}
              className="border rounded-lg p-2"
            >
              <option value="url">URL</option>
              <option value="upload">Upload</option>
            </select>
          </div>
          {imageMode === "url" ? (
            <Input
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          ) : (
            <Input type="file" onChange={handleImage} />
          )}
          {imageUrl && (
            <img src={imageUrl} className="h-16 rounded" alt="cover" />
          )}
        </div>
        <div>
          <label className="mr-3 font-medium">Category:</label>
          <select
            value={categorySlug}
            onChange={(e) => setCategorySlug(e.target.value)}
            className="border rounded-lg p-2"
          >
            {categories.length > 0 ? (
              categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))
            ) : (
              <>
                <option value="dental">Dental Treatments</option>
                <option value="nose-face-aesthetics">
                  Nose & Face Aesthetics
                </option>
                <option value="body-aesthetics">Body Aesthetics</option>
                <option value="hair-restoration">Hair Restoration</option>
                <option value="weight-loss">Weight-Loss Treatments</option>
              </>
            )}
          </select>
        </div>
        <div>
          <label className="mr-3 font-medium">Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as any)}
            className="border rounded-lg p-2"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PostEditor;
