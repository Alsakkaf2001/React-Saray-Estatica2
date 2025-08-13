import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import SEOHead from "../components/ui/SEOHead";
import BlogPostContent from "../components/ui/BlogPostContent";
import BlogCard from "../components/ui/BlogCard";
import Button from "../components/ui/Button";
import type { BlogPost } from "../types";
import {
  getAllBlogPostsAsync,
  incrementPostViews,
  getPostBySlugAsync,
} from "../utils/blogUtils";

interface BlogPostPageProps {
  slug: string;
  onBack?: () => void;
  onPostSelect?: (slug: string) => void;
  onNavigateToHome?: (hash: string) => void;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({
  slug,
  onBack,
  onPostSelect,
  onNavigateToHome,
}) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const foundPost = await getPostBySlugAsync(slug);
      if (foundPost) {
        setPost(foundPost);
        try {
          const all = await getAllBlogPostsAsync();
          const related = all
            .filter((p) => p.slug !== foundPost.slug)
            .filter(
              (p) =>
                p.category === foundPost.category ||
                p.tags.some((t) => foundPost.tags.includes(t))
            )
            .slice(0, 3);
          setRelatedPosts(related);
        } catch {
          setRelatedPosts([]);
        }
        incrementPostViews(foundPost.id);
      }
      setLoading(false);
    })();
  }, [slug]);

  const handleShare = () => {
    setShowShareMenu(!showShareMenu);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      window.location.href
    )}&text=${encodeURIComponent(post?.title || "")}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      window.location.href
    )}`,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  if (loading) {
    return (
      <Layout
        onNavigate={(href) => {
          if (href.startsWith("/#") && onNavigateToHome) {
            onNavigateToHome(href.substring(1));
          } else if (href === "/blog") {
            if (onBack) onBack();
          }
        }}
      >
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout
        onNavigate={(href) => {
          if (href.startsWith("/#") && onNavigateToHome) {
            onNavigateToHome(href.substring(1));
          } else if (href === "/blog") {
            if (onBack) onBack();
          }
        }}
      >
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📄</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Article Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Button onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <SEOHead
        title={`${post.title} | Saray Estetic Blog`}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
        image={post.image}
        canonical={`${(
          window.location.origin + (import.meta.env.BASE_URL || "/")
        ).replace(/\/+$/, "/")}blog/${post.slug}`}
        url={`${(
          window.location.origin + (import.meta.env.BASE_URL || "/")
        ).replace(/\/+$/, "/")}blog/${post.slug}`}
        type="article"
      />

      <Layout
        onNavigate={(href) => {
          if (href.startsWith("/#") && onNavigateToHome) {
            onNavigateToHome(href.substring(1));
          } else if (href === "/blog") {
            if (onBack) onBack();
          }
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="min-h-screen bg-gray-50 py-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Navigation */}
            <motion.div variants={itemVariants} className="mb-8">
              <Button variant="ghost" onClick={onBack} className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>

              {/* Breadcrumb */}
              <nav className="text-sm text-gray-500">
                <span>Blog</span>
                <span className="mx-2">›</span>
                <span className="text-gray-900">{post.title}</span>
              </nav>
            </motion.div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <BlogPostContent
                    post={post}
                    onShare={handleShare}
                    onLike={() => console.log("Like post")}
                    onBookmark={() => console.log("Bookmark post")}
                  />
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Share Menu */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Share2 className="w-5 h-5 text-primary-600" />
                      Share Article
                    </h3>
                    <div className="space-y-3">
                      <a
                        href={shareUrls.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                        <span className="font-medium">Facebook</span>
                      </a>
                      <a
                        href={shareUrls.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                        <span className="font-medium">Twitter</span>
                      </a>
                      <a
                        href={shareUrls.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-800 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="font-medium">LinkedIn</span>
                      </a>
                      <button
                        onClick={handleCopyLink}
                        className="w-full flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors"
                      >
                        {copied ? (
                          <Check className="w-5 h-5 text-green-600" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                        <span className="font-medium">
                          {copied ? "Copied!" : "Copy Link"}
                        </span>
                      </button>
                    </div>
                  </motion.div>

                  {/* Table of Contents */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Table of Contents
                    </h3>
                    <div className="space-y-2 text-sm">
                      {/* This would be dynamically generated from post content headings */}
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        Introduction
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-primary-600 transition-colors pl-4"
                      >
                        Understanding the Basics
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-primary-600 transition-colors pl-4"
                      >
                        Key Benefits
                      </a>
                      <a
                        href="#"
                        className="block text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        Conclusion
                      </a>
                    </div>
                  </motion.div>

                  {/* Contact CTA */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white"
                  >
                    <h3 className="text-lg font-bold mb-2">
                      Ready to Get Started?
                    </h3>
                    <p className="text-primary-100 mb-4 text-sm">
                      Schedule a free consultation with our experts to discuss
                      your treatment options.
                    </p>
                    <Button
                      variant="secondary"
                      className="w-full bg-white text-primary-600 hover:bg-gray-50"
                    >
                      Book Consultation
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <motion.section variants={itemVariants} className="mt-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Related Articles
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard
                      key={relatedPost.id}
                      post={relatedPost}
                      onReadMore={onPostSelect}
                    />
                  ))}
                </div>
              </motion.section>
            )}

            {/* Back to Blog CTA */}
            <motion.div variants={itemVariants} className="text-center mt-16">
              <Button onClick={onBack} size="lg" className="px-8">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Explore More Articles
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Layout>
    </>
  );
};

export default BlogPostPage;
