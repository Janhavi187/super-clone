import React from 'react';
import '../styles/blog.css';

// Utility function to generate a random vibrant color (can be shared or duplicated)
const getRandomColor = () => {
    const colors = [
        '#FFC107', // Amber
        '#03A9F4', // Light Blue
        '#4CAF50', // Green
        '#FF5722', // Deep Orange
        '#9C27B0', // Purple
        '#FFEB3B', // Yellow
        '#E91E63', // Pink
        '#673AB7', // Deep Purple
        '#00BCD4', // Cyan
        '#CDDC39', // Lime
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};

// Sample data for blog posts
const blogPostsData = [
  {
    id: 1,
    title: 'Notion Sites and Super',
    // No thumbnail needed, color will be applied dynamically
  },
  {
    id: 2,
    title: 'Super 3.1 - Technology upgrade, Improved navigation & more.',
  },
  {
    id: 3,
    title: 'Super Analytics is here!',
  },
  // Add more blog post objects as needed
];

const BlogSection = () => {
  return (
    <div className="blog-container">
      <header className="blog-hero-section">
        <p className="blog-breadcrumb">Blog</p>
        <h1 className="blog-title">Ideas on the future of website publishing</h1>
      </header>

      <section className="blog-posts-grid">
        {blogPostsData.map(post => (
          <a href={`/blog/${post.id}`} className="blog-card" key={post.id}>
            <div
              className="blog-color-box-thumbnail" // Changed class name
              style={{ backgroundColor: getRandomColor() }} // Apply random color
            >
              {/* Optional: Add some text or initial inside the box */}
              <p>{post.title.charAt(0)}</p>
            </div>
            <h2 className="blog-post-title">{post.title}</h2>
          </a>
        ))}
      </section>

      {/* "Made with Super" footer element (if it's a persistent component) */}
      <div className="made-with-super">
        Made with Super
      </div>
    </div>
  );
};

export default BlogSection;