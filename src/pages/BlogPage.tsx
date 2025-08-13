import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Grid, List } from "lucide-react";
import Layout from "../components/layout/Layout";
import SEOHead from "../components/ui/SEOHead";
import BlogCard from "../components/ui/BlogCard";
import BlogSidebar from "../components/ui/BlogSidebar";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import type { BlogPost } from "../types";
import { getAllBlogPostsAsync } from "../utils/blogUtils";
import { fetchCategories } from "../utils/blogApi";

interface BlogPageProps {
  onPostSelect?: (slug: string) => void;
  onNavigateToHome?: (hash: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({
  onPostSelect,
  onNavigateToHome,
}) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"newest" | "popular" | "oldest">(
    "newest"
  );

  const [categories, setCategories] = useState<
    Array<{ id?: string; name: string; slug: string; icon?: string }>
  >([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const allPosts = await getAllBlogPostsAsync();
        const cats = await fetchCategories();
        if (!cancelled) {
          setPosts(allPosts);
          setFilteredPosts(allPosts);
          setCategories(cats);
          // Ensure page starts at top on blog load
          window.scrollTo({ top: 0, behavior: "auto" });
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let filtered = [...posts];

    // Apply search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Apply tag filter
    if (selectedTag) {
      filtered = filtered.filter((post) =>
        post.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase())
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
          );
        case "oldest":
          return (
            new Date(a.publishDate).getTime() -
            new Date(b.publishDate).getTime()
          );
        case "popular":
          return (b.views || 0) - (a.views || 0);
        default:
          return 0;
      }
    });

    setFilteredPosts(filtered);
  }, [posts, searchQuery, selectedCategory, selectedTag, sortBy]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search") as string;
    setSearchQuery(query);
  };

  const handleCategorySelect = (categorySlug: string) => {
    setSelectedCategory(
      selectedCategory === categorySlug ? null : categorySlug
    );
    setSelectedTag(null);
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
    setSelectedCategory(null);
  };

  const handleSidebarSearch = (query: string) => {
    setSearchQuery(query);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedTag(null);
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
            // Already on blog page, do nothing
          }
        }}
      >
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <SEOHead
        title="Blog - Health & Wellness Articles | Saray Estetic"
        description="Discover expert insights on hair transplant, dental care, cosmetic surgery, and wellness. Read patient stories and get professional advice from our medical specialists."
        keywords="health blog, hair transplant guide, dental care tips, cosmetic surgery, wellness advice, patient stories, medical tourism"
      />

      <Layout
        onNavigate={(href) => {
          if (href.startsWith("/#") && onNavigateToHome) {
            onNavigateToHome(href.substring(1));
          } else if (href === "/blog") {
            // Already on blog page, do nothing
          }
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="min-h-screen bg-gray-50 py-12"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Health & Wellness Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert insights, patient stories, and professional advice from
                our medical specialists. Stay informed about the latest
                treatments and wellness tips.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Search and Filters */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-6 shadow-lg mb-8"
                >
                  <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
                    {/* Search */}
                    <form onSubmit={handleSearch} className="flex-1 max-w-md">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type="text"
                          name="search"
                          placeholder="Search articles..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </form>

                    {/* View Mode and Sort */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant={viewMode === "grid" ? "primary" : "ghost"}
                          size="sm"
                          onClick={() => setViewMode("grid")}
                        >
                          <Grid className="w-4 h-4" />
                        </Button>
                        <Button
                          variant={viewMode === "list" ? "primary" : "ghost"}
                          size="sm"
                          onClick={() => setViewMode("list")}
                        >
                          <List className="w-4 h-4" />
                        </Button>
                      </div>

                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="newest">Newest First</option>
                        <option value="popular">Most Popular</option>
                        <option value="oldest">Oldest First</option>
                      </select>
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Button
                      variant={!selectedCategory ? "primary" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedCategory(null)}
                    >
                      All Categories
                    </Button>
                    {categories.map((category) => (
                      <Button
                        key={category.slug}
                        variant={
                          selectedCategory === category.slug
                            ? "primary"
                            : "ghost"
                        }
                        size="sm"
                        onClick={() => handleCategorySelect(category.slug)}
                      >
                        {category.icon} {category.name}
                      </Button>
                    ))}
                  </div>

                  {/* Active Filters */}
                  {(searchQuery || selectedCategory || selectedTag) && (
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm text-gray-600">
                        Active filters:
                      </span>
                      {searchQuery && (
                        <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                          Search: "{searchQuery}"
                        </span>
                      )}
                      {selectedCategory && (
                        <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                          Category:{" "}
                          {
                            categories.find((c) => c.slug === selectedCategory)
                              ?.name
                          }
                        </span>
                      )}
                      {selectedTag && (
                        <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                          Tag: #{selectedTag}
                        </span>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearFilters}
                        className="text-xs"
                      >
                        Clear All
                      </Button>
                    </div>
                  )}
                </motion.div>

                {/* Results Count */}
                <motion.div variants={itemVariants} className="mb-6">
                  <p className="text-gray-600">
                    Showing {filteredPosts.length} of {posts.length} articles
                  </p>
                </motion.div>

                {/* Blog Posts */}
                <motion.div variants={itemVariants}>
                  {filteredPosts.length > 0 ? (
                    <div
                      className={`grid gap-8 ${
                        viewMode === "grid" ? "md:grid-cols-2" : "grid-cols-1"
                      }`}
                    >
                      {filteredPosts.map((post) => (
                        <BlogCard
                          key={post.id}
                          post={post}
                          onReadMore={onPostSelect}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">📝</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        No articles found
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Try adjusting your search criteria or browse all
                        articles.
                      </p>
                      <Button onClick={clearFilters}>Clear Filters</Button>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <BlogSidebar
                    onCategorySelect={handleCategorySelect}
                    onTagSelect={handleTagSelect}
                    onSearch={handleSidebarSearch}
                    onPostSelect={onPostSelect}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Layout>
    </>
  );
};

export default BlogPage;
