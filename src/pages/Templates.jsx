import React from 'react';
import '../styles/template.css';

const TemplatePage = () => {
  return (
    <div className="template-container">
      {/* Header/Navigation Area (if applicable, not fully visible) */}

      <header className="hero-section">
        <p className="hero-breadcrumb">Templates</p>
        <h1 className="hero-title">Beautiful Notion templates to kickstart your website idea</h1>
        <p className="hero-description">
          Super templates come as two parts, first a Notion template (for your website content and layout) and a Super theme (custom code and styles to change the appearance). You can apply and preview in the Super dashboard for free—once you're happy with your design, upgrade the site to a paid plan to apply to your live site.
        </p>
        <p className="hero-disclaimer">
          (Free templates are provided by Super and the paid ones are provided by third party designers)
        </p>
        <button className="submit-button">Submit a template</button>
      </header>

      <section className="filter-section">
        <div className="filter-tags">
          <button className="tag-button active">All</button>
          <button className="tag-button">Free</button>
          <button className="tag-button">Personal Notion site</button>
          <button className="tag-button">Notion Portfolio website</button>
          <button className="tag-button">Notion Landing page</button>
          <button className="tag-button">Notion Blog</button>
          <button className="tag-button">Documentation</button>
          <button className="tag-button">Directory</button>
          <button className="tag-button">Notion Business websites</button>
        </div>
      </section>

      <section className="template-grid">
        {/*
          This section would map over an array of template data to render individual template cards.
          For example:
          {templates.map(template => (
            <div className="template-card" key={template.id}>
              <img src={template.image} alt={template.name} />
              <div className="template-card-overlay">
                <span className="template-price">{template.price === 0 ? 'Free' : `$${template.price}`}</span>
              </div>
            </div>
          ))}
          I'm just showing placeholders based on the visible parts of the cards.
        */}
        <div className="template-card placeholder">
            <span className="template-card-price-tag">Free</span>
        </div>
        <div className="template-card placeholder">
            <span className="template-card-price-tag">Free</span>
        </div>
        <div className="template-card placeholder">
            <span className="template-card-price-tag">Free</span>
        </div>
        {/* ... more template cards ... */}
      </section>

    </div>
  );
};

export default TemplatePage;
     

