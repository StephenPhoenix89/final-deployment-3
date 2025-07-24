import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder images - in a real scenario, these would be imported
const heroImageUrl = '/hero-image.jpg';
const reitsImageUrl = '/articles/singapore-reits-guide.jpg';
const roboImageUrl = '/articles/robo-advisors-comparison.jpg';
const portfolioImageUrl = '/articles/build-500k-portfolio.jpg';

const HomePage = ( ) => {
  const featuredArticles = [
    {
      title: "The Complete 2025 Guide to Singapore REITs",
      description: "Dive deep into Real Estate Investment Trusts in Singapore, a cornerstone for passive income seekers.",
      link: "/articles/singapore-reits-complete-guide-2025",
      image: reitsImageUrl
    },
    {
      title: "Robo-Advisors in Singapore: The Ultimate 2025 Comparison",
      description: "Syfe vs. StashAway vs. Endowus. We break down the fees, features, and performance to find the best platform for you.",
      link: "/articles/robo-advisor-comparison-2025",
      image: roboImageUrl
    },
    {
      title: "How to Build a $500k Investment Portfolio as a Digital Nomad",
      description: "A step-by-step blueprint for growing your wealth while traveling the world, using Singapore as your financial hub.",
      link: "/articles/build-500k-portfolio-digital-nomad",
      image: portfolioImageUrl
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
            Achieve Financial Freedom from Singapore.
          </h1>
          <p className="subtitle text-lg md:text-xl text-gray-600 mb-8">
            Your expert guide to investing, passive income, and wealth management for digital nomads and expats in the Lion City.
          </p>
          <Link to="/articles" className="button text-lg">
            Start Learning
          </Link>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="featured-posts py-16 bg-white">
        <div className="page-container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Insights</h2>
          <div className="post-grid">
            {featuredArticles.map((article, index) => (
              <div key={index} className="post-card">
                <img src={article.image} alt={article.title} className="post-card-image" />
                <div className="post-card-content">
                  <h3 className="font-bold text-xl mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{article.description}</p>
                  <Link to={article.link} className="read-more">
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section bg-blue-600 text-white text-center py-16">
          <div className="page-container">
              <h2 className="text-3xl font-bold text-white">Ready to Build Your Wealth in Singapore?</h2>
              <p className="text-lg mt-4 mb-8 max-w-3xl mx-auto">
                  Explore our comprehensive guides and start making smarter financial decisions today.
              </p>
              <Link to="/articles/singapore-reits-complete-guide-2025" className="button bg-white text-blue-600 hover:bg-gray-100">
                  Learn About REITs
              </Link>
          </div>
      </section>
    </div>
  );
};

export default HomePage;
