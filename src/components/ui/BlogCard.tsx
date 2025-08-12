import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Eye, ArrowRight } from "lucide-react";
import type { BlogPost } from "../../types";
import {
  formatDate,
  getAuthorById,
  getCategoryBySlug,
} from "../../utils/blogUtils";
import OptimizedImage from "./OptimizedImage";
import Button from "./Button";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  onReadMore?: (slug: string) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  post,
  featured = false,
  onReadMore,
}) => {
  const author = getAuthorById(post.author);
  const category = getCategoryBySlug(post.category);

  const handleReadMore = () => {
    if (onReadMore) {
      onReadMore(post.slug);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const hoverVariants = {
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <motion.div variants={hoverVariants}>
        {/* Image */}
        <div
          className={`relative overflow-hidden ${featured ? "h-80" : "h-48"}`}
        >
          <OptimizedImage
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Category Badge */}
          {category && (
            <div
              className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${category.color}`}
            >
              <span className="mr-1">{category.icon}</span>
              {category.name}
            </div>
          )}

          {/* Featured Badge */}
          {post.featured && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-3 py-1 rounded-full text-xs font-medium">
              ⭐ Featured
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className={`p-6 ${featured ? "lg:p-8" : ""}`}>
          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.publishDate)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            {author && (
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{author.name}</span>
              </div>
            )}
            {post.views && (
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{post.views.toLocaleString()}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3
            className={`font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors ${
              featured ? "text-2xl lg:text-3xl" : "text-xl"
            }`}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p
            className={`text-gray-600 mb-4 ${
              featured ? "text-lg line-clamp-3" : "line-clamp-2"
            }`}
          >
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>

          {/* Author Info and Read More */}
          <div className="flex items-center justify-between">
            {author && (
              <div className="flex items-center gap-3">
                <OptimizedImage
                  src={author.avatar}
                  alt={author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {author.name}
                  </p>
                  <p className="text-xs text-gray-500">{author.title}</p>
                </div>
              </div>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={handleReadMore}
              className="ml-auto group-hover:bg-primary-50 group-hover:text-primary-600"
            >
              Read More
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};

export default BlogCard;
