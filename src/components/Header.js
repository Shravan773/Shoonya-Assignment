import React from 'react';

function Header() {
  const heroImageStyle = {
    backgroundImage: 'url(/hero_image1.jpg)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '346px',
    width: '100%',
    marginBottom: '-0.6rem',
    borderRadius: '0.9rem',
  };

  return (
    <header>
      <nav>
        <h1>Wellness Retreats</h1>
      </nav>
      <div className="hero">
        <div className="hero-image" style={heroImageStyle}></div>
        <div className="hero-content">
          <h2>Discover Your Inner Peace</h2>
          <p>Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
