import React, { useState } from 'react';
import '../styles/features.css'; // Assuming your features.css is correctly styled

// This data would ideally come from a central source or API
const featuresData = [
  {
    id: 'high-performance',
    icon: '⚡',
    title: 'High Performance',
    description: 'Incredible performance and the latest web technologies.',
    detailContent: (
      <>
        <h2>High Performance for Unmatched Speed</h2>
        <p>Our platform is built on cutting-edge web technologies, ensuring your website loads at lightning speed. This means better user experience, higher search engine rankings, and reduced bounce rates. We continuously optimize our infrastructure to deliver a seamless and instant Browse experience for your visitors, regardless of their device or connection speed.</p>
        <ul>
          <li>Global CDN integration</li>
          <li>Optimized image delivery</li>
          <li>Server-side rendering (SSR)</li>
          <li>Lazy loading for faster initial page loads</li>
        </ul>
      </>
    ),
  },
  {
    id: 'powerful-integrations',
    icon: '🔌',
    title: 'Powerful Integrations',
    description: 'Extend the functionality of your site with awesome integrations.',
    detailContent: (
      <>
        <h2>Seamless Integrations for Enhanced Functionality</h2>
        <p>Connect your Super site with your favorite tools and services to supercharge its capabilities. From analytics to marketing automation, e-commerce, and CRM, our robust integration options allow you to build a comprehensive digital ecosystem around your website.</p>
        <ul>
          <li>Google Analytics & other tracking tools</li>
          <li>Email marketing platforms (Mailchimp, ConvertKit)</li>
          <li>Payment gateways (Stripe, PayPal)</li>
          <li>Customer support platforms (Intercom, Crisp)</li>
        </ul>
      </>
    ),
  },
  {
    id: 'custom-design',
    icon: '🎨',
    title: 'Custom design',
    description: 'Customize your site to match your brand without using code.',
    detailContent: (
      <>
        <h2>Express Your Brand with Custom Design</h2>
        <p>Unleash your creativity and design a website that perfectly reflects your brand identity. Our intuitive visual editor allows you to customize every aspect of your site – from fonts and colors to layouts and responsiveness – all without writing a single line of code. Create stunning, unique designs that stand out.</p>
        <ul>
          <li>Theme customization options</li>
          <li>Font and typography controls</li>
          <li>Color palette editor</li>
          <li>Responsive design preview</li>
        </ul>
      </>
    ),
  },
  {
    id: 'analytics',
    icon: '📈',
    title: 'Analytics',
    description: 'Privacy friendly, integrated analytics for Super sites.',
    detailContent: (
      <>
        <h2>Insightful and Privacy-Friendly Analytics</h2>
        <p>Understand your audience and track your site's performance with our integrated analytics. Designed with privacy in mind, you get the data you need to make informed decisions without compromising user data. Monitor traffic, popular pages, conversion rates, and more, all from your Super dashboard.</p>
        <ul>
          <li>Visitor tracking and demographics</li>
          <li>Page views and bounce rate</li>
          <li>Conversion funnels</li>
          <li>GDPR and CCPA compliant data handling</li>
        </ul>
      </>
    ),
  },
  {
    id: 'excellent-seo',
    icon: '🔍',
    title: 'Excellent SEO',
    description: 'Ascend to top ranking with powerful, user-friendly SEO.',
    detailContent: (
      <>
        <h2>Achieve Top Rankings with Powerful SEO</h2>
        <p>Ensure your website is easily discoverable by search engines and attracts organic traffic. Our platform provides built-in SEO tools and best practices to help you optimize your content, meta tags, and site structure for higher search rankings. Get found by your target audience effortlessly.</p>
        <ul>
          <li>Customizable meta titles and descriptions</li>
          <li>Clean URL structures</li>
          <li>XML sitemap generation</li>
          <li>Schema markup support</li>
        </ul>
      </>
    ),
  },
  {
    id: 'multi-language',
    icon: '🌐',
    title: 'Multi-Language',
    description: 'Make your site more accessible by providing your site content in multiple languages',
    detailContent: (
      <>
        <h2>Reach a Global Audience with Multi-Language Support</h2>
        <p>Break down language barriers and expand your reach by offering your website content in multiple languages. Our multi-language feature allows you to easily manage translations, making your site accessible and welcoming to a diverse, international audience. Enhance user experience for everyone.</p>
        <ul>
          <li>Easy content translation management</li>
          <li>Language switcher integration</li>
          <li>SEO-friendly multilingual URLs</li>
          <li>Support for right-to-left (RTL) languages</li>
        </ul>
      </>
    ),
  },
  {
    id: 'domains-ssl',
    icon: '🔗',
    title: 'Domains & SSL',
    description: 'Enhance your credibility and brand recognition with a custom domain.',
    detailContent: (
      <>
        <h2>Elevate Your Brand with Custom Domains & SSL</h2>
        <p>Your website domain isn't just an address; it's your brand's first impression. At Super, we provide a secure, free domain and enable you to connect a custom domain, boosting your brand's recognition and credibility. Plus, every Super site comes with a free SSL certificate for secure, encrypted connections, assuring your visitors of their safety.</p>
        <ul>
          <li>Free Super subdomain</li>
          <li>Easy custom domain connection</li>
          <li>Automatic SSL certificate for security</li>
          <li>Enhanced brand professionalism</li>
        </ul>
      </>
    ),
  },
  {
    id: 'file-upload',
    icon: '☁️',
    title: 'File upload',
    description: 'Securely Upload .txt Files for Verification, Compliance & AI Use',
    detailContent: (
      <>
        <h2>Secure File Uploads for Diverse Needs</h2>
        <p>Our platform supports secure file uploads, particularly useful for specific verification, compliance, or AI integration requirements. Easily manage and store necessary documents or data, knowing that your files are handled with the utmost security and privacy protocols. Streamline your workflows with reliable file management.</p>
        <ul>
          <li>Secure file storage</li>
          <li>Support for various file types (e.g., .txt)</li>
          <li>Compliance-ready upload features</li>
          <li>Integration with AI processing workflows</li>
        </ul>
      </>
    ),
  },
  {
    id: 'custom-code',
    icon: '💻',
    title: 'Custom code',
    description: 'Add code to your site for extra customizability.',
    detailContent: (
      <>
        <h2>Unlock Advanced Customization with Custom Code</h2>
        <p>For developers and advanced users, our custom code feature provides the ultimate flexibility. Embed custom HTML, CSS, or JavaScript directly into your site to add unique functionalities, integrate third-party widgets, or implement highly specific design elements that go beyond standard customization options.</p>
        <ul>
          <li>HTML, CSS, and JavaScript embedding</li>
          <li>Integration of third-party widgets</li>
          <li>Advanced styling capabilities</li>
          <li>Developer-friendly environment</li>
        </ul>
      </>
    ),
  },
];

const FeaturesSection = () => {
  // State to track which feature's detail is currently open
  const [activeFeatureId, setActiveFeatureId] = useState(null); // null means no detail is shown

  const handleFeatureClick = (featureId) => {
    setActiveFeatureId(featureId);
  };

  const handleBackToFeatures = () => {
    setActiveFeatureId(null); // Go back to showing the grid
  };

  // Find the active feature's data
  const activeFeature = featuresData.find(f => f.id === activeFeatureId);

  return (
    <div className="features-section-container">
      {/* Conditionally render header based on activeFeatureId */}
      {!activeFeatureId && (
        <header className="features-header">
          <p className="features-breadcrumb">Features</p>
          <h1 className="features-main-title">All the features your site needs</h1>
        </header>
      )}

      {/* Conditionally render grid or detail based on activeFeatureId */}
      {activeFeatureId ? (
        // Show feature detail
        <div className="feature-detail-view">
          <button className="back-button" onClick={handleBackToFeatures}>← Back to Features</button>
          <div className="detail-content">
            {activeFeature ? activeFeature.detailContent : <p>Feature not found.</p>}
          </div>
        </div>
      ) : (
        // Show features grid
        <div className="features-grid">
          {featuresData.map(feature => (
            <div
              className="feature-card"
              key={feature.id}
              onClick={() => handleFeatureClick(feature.id)}
              role="button" // Improve accessibility
              tabIndex="0" // Make it focusable
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
          {/* The "View all features" link/card - remains a link */}
          <div className="feature-card view-all">
            <a href="/features-full-list" className="view-all-link"> {/* Changed href to be distinct from internal feature details */}
              <span className="view-all-arrow">→</span> View all features
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturesSection;