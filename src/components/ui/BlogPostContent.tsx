import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Eye, Share2, Heart, Bookmark } from "lucide-react";
import type { BlogPost } from "../../types";
import {
  formatDate,
  getAuthorById,
  getCategoryBySlug,
} from "../../utils/blogUtils";
import OptimizedImage from "./OptimizedImage";
import Button from "./Button";

interface BlogPostContentProps {
  post: BlogPost;
  onShare?: () => void;
  onLike?: () => void;
  onBookmark?: () => void;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({
  post,
  onShare,
  onLike,
  onBookmark,
}) => {
  const author = getAuthorById(post.author);
  const category = getCategoryBySlug(post.category);

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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

  // Convert markdown-like content to HTML (basic implementation)
  const formatContent = (content: string) => {
    return content
      .replace(
        /^# (.*$)/gim,
        '<h1 class="text-4xl font-bold text-gray-900 mb-6 mt-8">$1</h1>'
      )
      .replace(
        /^## (.*$)/gim,
        '<h2 class="text-3xl font-bold text-gray-900 mb-4 mt-8">$1</h2>'
      )
      .replace(
        /^### (.*$)/gim,
        '<h3 class="text-2xl font-bold text-gray-900 mb-4 mt-6">$1</h3>'
      )
      .replace(/^\- (.*$)/gim, '<li class="text-gray-700 mb-2">$1</li>')
      .replace(
        /\*\*(.*?)\*\*/g,
        '<strong class="font-semibold text-gray-900">$1</strong>'
      )
      .replace(
        /^> (.*$)/gim,
        '<blockquote class="border-l-4 border-primary-500 pl-4 py-2 bg-gray-50 rounded-r-lg my-4 italic text-gray-700">$1</blockquote>'
      )
      .split("\n\n")
      .map((paragraph) => {
        if (
          paragraph.includes("<h1>") ||
          paragraph.includes("<h2>") ||
          paragraph.includes("<h3>") ||
          paragraph.includes("<li>") ||
          paragraph.includes("<blockquote>")
        ) {
          return paragraph;
        }
        if (paragraph.trim() === "") return "";
        return `<p class="text-gray-700 leading-relaxed mb-4">${paragraph}</p>`;
      })
      .join("");
  };

  return (
    <motion.article
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto"
    >
      {/* Header */}
      <motion.header variants={itemVariants} className="mb-8">
        {/* Category and Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          {category && (
            <div
              className={`px-3 py-1 rounded-full text-xs font-medium ${category.color}`}
            >
              <span className="mr-1">{category.icon}</span>
              {category.name}
            </div>
          )}
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.publishDate)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
          {post.views && (
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{post.views.toLocaleString()} views</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Author and Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {author && (
            <div className="flex items-center gap-4">
              <OptimizedImage
                src={author.avatar}
                alt={author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">{author.name}</p>
                <p className="text-sm text-gray-500">{author.title}</p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onShare}
              className="text-gray-600 hover:text-primary-600"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onLike}
              className="text-gray-600 hover:text-red-600"
            >
              <Heart className="w-4 h-4 mr-2" />
              Like
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onBookmark}
              className="text-gray-600 hover:text-yellow-600"
            >
              <Bookmark className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Featured Image */}
      <motion.div variants={itemVariants} className="mb-8">
        <div className="relative overflow-hidden rounded-2xl">
          <OptimizedImage
            src={post.image}
            alt={post.title}
            className="w-full h-64 lg:h-96 object-cover"
          />
          {post.featured && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              ⭐ Featured Article
            </div>
          )}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div variants={itemVariants} className="prose prose-lg max-w-none">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
        />
      </motion.div>

      {/* Tags */}
      <motion.div
        variants={itemVariants}
        className="mt-8 pt-8 border-t border-gray-200"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 text-sm rounded-full cursor-pointer transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Author Bio */}
      {author && (
        <motion.div
          variants={itemVariants}
          className="mt-8 p-6 bg-gray-50 rounded-2xl"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            About the Author
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <OptimizedImage
              src={author.avatar}
              alt={author.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 mb-1">{author.name}</h4>
              <p className="text-sm text-primary-600 mb-2">{author.title}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {author.bio}
              </p>
              {author.socialLinks && (
                <div className="flex gap-2 mt-3">
                  {author.socialLinks.linkedin && (
                    <a
                      href={author.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      LinkedIn
                    </a>
                  )}
                  {author.socialLinks.twitter && (
                    <a
                      href={author.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      Twitter
                    </a>
                  )}
                  {author.socialLinks.instagram && (
                    <a
                      href={author.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-600 transition-colors"
                    >
                      Instagram
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.article>
  );
};

export default BlogPostContent;
