import React from 'react';
import '../styles/showcase.css'; // Import the CSS file

const ShowcasePage = () => {
  return (
    <div className="showcase-container">
      {/* Header/Navigation Area (if applicable, not fully visible) */}

      <header className="hero-section">
        <p className="hero-breadcrumb">Showcase</p>
        <h1 className="hero-title">Explore the best Super sites</h1>
        <div className="hero-buttons">
          <button className="cta-button primary">Create your own</button>
          <button className="cta-button secondary">Submit a site</button>
        </div>
      </header>

      <section className="customer-stories-section">
        <h2 className="section-title">Customer success stories</h2>
        <div className="stories-grid">
          {/*
            This section would map over an array of story data.
            Each story card seems to have:
            - A screenshot of the site
            - A profile picture
            - A title/case study name
            - A description/excerpt (not fully visible, but implied)
          */}
          <div className="story-card">
            <div className="card-image-placeholder pink">
              {/* Image would go here */}
            </div>
            <div className="card-content">
              <div className="profile-image-placeholder"></div>
              <p className="card-title">Case Study: Punch Drunk business website</p>
              {/* <p className="card-description">Short description...</p> */}
            </div>
          </div>

          <div className="story-card">
            <div className="card-image-placeholder yellow">
              {/* Image would go here */}
            </div>
            <div className="card-content">
              <div className="profile-image-placeholder"></div>
              <p className="card-title">Case Study: Fairness Foundation streamlines its content</p>
              {/* <p className="card-description">Short description...</p> */}
            </div>
          </div>

          <div className="story-card">
            <div className="card-image-placeholder teal">
              {/* Image would go here */}
            </div>
            <div className="card-content">
              <div className="profile-image-placeholder two-profiles">
                  {/* Two profile images */}
                  <div className="profile-img-left"></div>
                  <div className="profile-img-right"></div>
              </div>
              <p className="card-title">Roxana's Journey from UX/UI Designer to Notion Consultant with</p>
              {/* This title is truncated, implying a longer one */}
              {/* <p className="card-description">Short description...</p> */}
            </div>
          </div>
          {/* ... more story cards ... */}
        </div>
      </section>

      {/* "Made with Super" footer element (if it's a persistent component) */}
      

      {/* Right sidebar icons (if they are part of the page, not just browser extension) */}
      {/* <div className="right-sidebar-icons">...</div> */}
    </div>
  );
};

export default ShowcasePage;