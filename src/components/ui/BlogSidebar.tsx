import React from "react";
import { motion } from "framer-motion";
import { Search, TrendingUp, Calendar, Tag } from "lucide-react";
// Types are imported in the functions we use
import {
  getPopularPosts,
  getRecentPosts,
  getAllCategories,
  getAllTags,
} from "../../utils/blogUtils";
import OptimizedImage from "./OptimizedImage";
import Input from "./Input";

interface BlogSidebarProps {
  onCategorySelect?: (categorySlug: string) => void;
  onTagSelect?: (tag: string) => void;
  onSearch?: (query: string) => void;
  onPostSelect?: (postSlug: string) => void;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({
  onCategorySelect,
  onTagSelect,
  onSearch,
  onPostSelect,
}) => {
  const popularPosts = getPopularPosts(5);
  const recentPosts = getRecentPosts(5);
  const categories = getAllCategories();
  const tags = getAllTags().slice(0, 15); // Show top 15 tags

  const sidebarVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
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

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search") as string;
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Search */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-2xl p-6 shadow-lg"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Search className="w-5 h-5 text-primary-600" />
          Search Articles
        </h3>
        <form onSubmit={handleSearch}>
          <Input
            type="text"
            name="search"
            placeholder="Search blog posts..."
            className="w-full"
          />
        </form>
      </motion.div>

      {/* Categories */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-2xl p-6 shadow-lg"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Tag className="w-5 h-5 text-primary-600" />
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect?.(category.slug)}
              className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium text-gray-700 group-hover:text-primary-700">
                  {category.name}
                </span>
              </div>
              <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded-full">
                {category.postCount || 0}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Popular Posts */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-2xl p-6 shadow-lg"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary-600" />
          Popular Posts
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <button
              key={post.id}
              onClick={() => onPostSelect?.(post.slug)}
              className="w-full flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left group"
            >
              <div className="flex-shrink-0">
                <OptimizedImage
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-primary-600">
                  {post.title}
                </p>
                <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                  <span>{post.views?.toLocaleString()} views</span>
                  <span>•</span>
                  <span>#{index + 1}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Recent Posts */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-2xl p-6 shadow-lg"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary-600" />
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <button
              key={post.id}
              onClick={() => onPostSelect?.(post.slug)}
              className="w-full flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left group"
            >
              <div className="flex-shrink-0">
                <OptimizedImage
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-primary-600">
                  {post.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(post.publishDate).toLocaleDateString()}
                </p>
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Tags */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-2xl p-6 shadow-lg"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagSelect?.(tag)}
              className="px-3 py-1 bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 text-sm rounded-full transition-colors"
            >
              #{tag}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white"
      >
        <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
        <p className="text-primary-100 mb-4 text-sm">
          Subscribe to our newsletter for the latest health and wellness tips.
        </p>
        <form className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-white text-gray-900"
          />
          <button
            type="submit"
            className="w-full bg-white text-primary-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </motion.aside>
  );
};

export default BlogSidebar;
