import React, { useEffect, useState } from "react";
import './Blog.css';
import Footer from "../Home/Footer";

// Import images from the assets folder
import blog1Image from "../assets/blog1.png";
import blog2Image from "../assets/blog2.png";
import blog3Image from "../assets/blog3.png";
import blog4Image from "../assets/blog4.png";
import blog5Image from "../assets/blog5.png";
import blog6Image from "../assets/blog6.png";
import blog7Image from "../assets/blog7.png";
import blog8Image from "../assets/blog8.png";
import blog9Image from "../assets/blog13.png";
import blog10Image from "../assets/blog15.png";
import blog11Image from "../assets/blog11.png";
import blog12Image from "../assets/blog12.png";

const BlogCard = ({ image, title, admin, date, relativeDate }) => {
    return (
        <div className="blog-card">
            <img src={image} alt={title} className="blog-image" />
            <h3 className="blog-title">{title}</h3>
            <div className="blog-info">
                <span className="admin">👤 {admin}</span>
                <span className="date">🗓️ {date} ({relativeDate})</span>
            </div>
        </div>
    );
};

const Blog = () => {
    const [showScrollButton, setShowScrollButton] = useState(false); 
    const blogs = [
        { image: blog1Image, title: 'Blog Post 1', admin: 'Admin', date: 'January 1, 2025' },
        { image: blog2Image, title: 'Blog Post 2', admin: 'Admin', date: 'January 2, 2025' },
        { image: blog3Image, title: 'Blog Post 3', admin: 'Admin', date: 'January 3, 2025' },
        { image: blog4Image, title: 'Blog Post 4', admin: 'Admin', date: 'January 1, 2025' },
        { image: blog5Image, title: 'Blog Post 5', admin: 'Admin', date: 'January 2, 2025' },
        { image: blog6Image, title: 'Blog Post 6', admin: 'Admin', date: 'January 3, 2025' },
        { image: blog7Image, title: 'Blog Post 7', admin: 'Admin', date: 'January 1, 2025' },
        { image: blog8Image, title: 'Blog Post 8', admin: 'Admin', date: 'January 2, 2025' },
        { image: blog9Image, title: 'Blog Post 9', admin: 'Admin', date: 'January 3, 2025' },
        { image: blog10Image, title: 'Blog Post 10', admin: 'Admin', date: 'January 1, 2025' },
        { image: blog11Image, title: 'Blog Post 11', admin: 'Admin', date: 'January 2, 2025' },
        { image: blog12Image, title: 'Blog Post 12', admin: 'Admin', date: 'January 3, 2025' },
    ];

    const today = new Date();

    const formatDateDiff = (postDate) => {
        const postDateObj = new Date(postDate);
        const diffTime = today - postDateObj;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return '1 day ago';
        return `${diffDays} days ago`;
    };

    useEffect(() => {
        if (window.scrollY !== 0) {
            window.scrollTo(0, 0);
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.5 }
        );

        const blogCards = document.querySelectorAll(".blog-card");
        blogCards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const handleScroll = () => {
          if (window.scrollY > 0) {
            setShowScrollButton(true); // Show button if scrolled down
          } else {
            setShowScrollButton(false); // Hide button if at the top
          }
        };
      
        // Scroll to top function when footer is visible or button clicked
        const handleScrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
      
        // Add scroll event listener when the component mounts
        useEffect(() => {
          window.addEventListener('scroll', handleScroll); // Add scroll event listener
      
          // Cleanup event listener on component unmount
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);

    return (
        <>
            <div>
                <header className="blog-header">
                    <h2 style={{ textAlign: "center" }}>Our Blogs</h2>
                    <div className="btndiv"></div>
                </header>
                <div className="blog-container">
                    {blogs.map((blog, index) => {
                        const relativeDate = formatDateDiff(blog.date);
                        return (
                            <BlogCard
                                key={index}
                                image={blog.image}
                                title={blog.title}
                                admin={blog.admin}
                                date={blog.date}
                                relativeDate={relativeDate}
                            />
                        );
                    })}
                </div>
            </div>
            <Footer />
            {showScrollButton && (
        <button 
          className="scroll-to-top" 
          onClick={handleScrollToTop} 
          style={{
            position: 'fixed', 
            bottom: '20px', 
            right: '20px', 
            padding: '10px 15px',
            fontSize: "21px", 
            borderRadius: '50%', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            cursor: 'pointer'
          }}
        >
          ↑
        </button>
      )}
        </>
    );
};

export default Blog;
