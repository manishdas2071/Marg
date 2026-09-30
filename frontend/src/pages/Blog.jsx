import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Technology', 'Career Prep', 'Industry Trends', 'Success Stories'];

  const blogPosts = [
    {
      id: 1,
      title: "Mastering the MERN Stack: A Roadmap for 2026",
      excerpt: "A comprehensive guide to building scalable, full-stack applications and organizing your digital portfolio to catch a recruiter's eye.",
      category: "Technology",
      date: "May 5, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "How to Secure Summer Internships at Top Institutes",
      excerpt: "Step-by-step strategies for drafting cold emails, networking with professors, and securing research positions at tier-one universities.",
      category: "Career Prep",
      date: "May 2, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "The Rise of FinTech: What Commerce Students Need to Know",
      excerpt: "Why traditional banking is evolving and how learning basic data analytics can skyrocket your value in the finance sector.",
      category: "Industry Trends",
      date: "April 28, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Balancing DSA Prep with College Projects",
      excerpt: "Actionable time-management tips for tackling heavy coursework while maintaining a consistent LeetCode streak.",
      category: "Career Prep",
      date: "April 20, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="blog-page-container">
      
      <div className="blog-header">
        <h1>Insights & Guidance</h1>
        <p>Expert advice, industry trends, and actionable strategies to accelerate your career trajectory.</p>
      </div>

      <div className="blog-filters">
        {categories.map(category => (
          <button 
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {activeCategory === 'All' && (
        <div className="featured-post">
          <img src={blogPosts[0].image} alt={blogPosts[0].title} className="featured-image" />
          <div className="featured-content">
            <span className="post-category">{blogPosts[0].category}</span>
            <h2>{blogPosts[0].title}</h2>
            <p>{blogPosts[0].excerpt}</p>
            <div className="post-meta">
              <span>{blogPosts[0].date}</span> • <span>{blogPosts[0].readTime}</span>
            </div>
            <Link to={`/blog/${blogPosts[0].id}`} className="read-more-btn">Read Full Article →</Link>
          </div>
        </div>
      )}

      <div className="blog-grid">
        {filteredPosts.map((post, index) => {
          if (activeCategory === 'All' && index === 0) return null;

          return (
            <div key={post.id} className="blog-card">
              <img src={post.image} alt={post.title} className="card-image" />
              <div className="card-content">
                <span className="post-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="post-meta">
                  <span>{post.date}</span> • <span>{post.readTime}</span>
                </div>
                <Link to={`/blog/${post.id}`} className="read-more-link">Read More</Link>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  );
}