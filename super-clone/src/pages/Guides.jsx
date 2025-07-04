import React from 'react';
import '../styles/guides.css';

// Utility function to generate a random vibrant color
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

// Sample data for guides
const guidesData = [
  {
    id: 1,
    title: 'Getting Started with Super and Notion',
    // We no longer need specific image paths, just a count for boxes
    numBoxes: 3,
  },
  {
    id: 2,
    title: 'Customizing Your Super Site',
    numBoxes: 3,
  },
  {
    id: 3,
    title: 'Connecting a Custom Domain',
    numBoxes: 3,
  },
  // Add more guide objects as needed
];

const GuidesSection = () => {
  return (
    <div className="guides-container">
      <header className="guides-hero-section">
        <p className="guides-breadcrumb">Guides</p>
        <h1 className="guides-title">Tutorials to help use & power up your Super site</h1>
        <p className="guides-description">
          A collection of Super and user-generated guides for how to get started and get the most out of you Super and Notion website.
        </p>
      </header>

      <section className="guides-content-area">
        {guidesData.map(guide => (
          <div className="guide-section" key={guide.id}>
            <h2 className="guide-number-title">
              <span className="guide-number">{guide.id}.</span> {guide.title}
            </h2>
            <div className="guide-color-boxes-grid"> {/* Changed class name */}
              {Array.from({ length: guide.numBoxes }).map((_, index) => (
                <div
                  className="guide-color-box" // Changed class name
                  key={index}
                  style={{ backgroundColor: getRandomColor() }} // Apply random color
                >
                  {/* You can add text or a step number inside the box if desired */}
                  <p>Step {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* "Made with Super" footer element (if it's a persistent component) */}
      <div className="made-with-super">
        Made with Super
      </div>
    </div>
  );
};

export default GuidesSection;