import React from "react";
import notionImg from "../assets/notionpart.avif";
import superImg from "../assets/superpart.avif";

const Compare = () => {
  return (
    <section className="compare-section">
      <div className="compare-images">
        <div className="compare-box">
          <img src={notionImg} alt="From Notion Site" className="compare-img" />
          <p>From Notion Site</p>
        </div>
        <div className="compare-box">
          <img src={superImg} alt="To Custom Super Site" className="compare-img" />
          <p>To Custom Super Site</p>
        </div>
      </div>

      <p className="trusted-text">Trusted by teams at</p>
      <div className="trusted-logos">
        <img src="/assets/strapi.png" alt="Strapi" />
        <img src="/assets/sentient.png" alt="Sentient" />
        <img src="/assets/circle.png" alt="Circle" />
        <img src="/assets/clubhouse.png" alt="Clubhouse" />
        <img src="/assets/raycast.png" alt="Raycast" />
      </div>
    </section>
  );
};

export default Compare;
