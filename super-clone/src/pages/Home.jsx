import React from 'react';
import notionImg from '../assets/notationpart.avif';
import superImg from '../assets/superpart.avif';



// New logo imports
import strapiLogo from '../assets/strapi.png';
import sentientLogo from '../assets/sentinent.png';
import circleLogo from '../assets/circle.png';
import clubhouseLogo from '../assets/clubhouse.png';
import raycastLogo from '../assets/raycast.png';
import step1Img from '../assets/step1-notion.svg';
import step2Img from '../assets/step2.svg';
import step3Img from '../assets/step3.svg';
import ben from '../assets/ben.avif';
import matt from '../assets/matt.avif';
import will from '../assets/will.avif';
import james from '../assets/james.avif';
import yusuf from '../assets/yusuf.avif';
import karl from '../assets/karl.avif';
import notionIcon from '../assets/notion.svg';
import notionUI from '../assets/ui.avif';
import notionIcon2 from '../assets/notion2.svg';
import notionUI2 from '../assets/ui2.webp';


const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Create Custom Websites with Notion</h1>
          <p>
            Transform your Notion pages into fully customized, professional websites in less than a minute.
            Enjoy high performance, SEO optimization, and a compelling user experience with great-looking
            instant page loads. Focus on creating while Super handles the rest.
          </p>
          <button className="btn">Get started for free</button>
          <p className="note">No credit card required</p>
        </div>

      </section>

      {/* Comparison Section */}
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
  <img src={strapiLogo} alt="Strapi" />
  <img src={sentientLogo} alt="Sentient" />
  <img src={circleLogo} alt="Circle" />
  <img src={clubhouseLogo} alt="Clubhouse" />
  <img src={raycastLogo} alt="Raycast" />
</div>
    
      </section>
     <section className="notion-steps">
  <h2 className="steps-heading">How to use Notion as a website</h2>

  <div className="steps-container">
    {/* Step 1 */}
    <div className="step-box">
      <img src={step1Img} alt="Step 1" />
      <p className="step-title">Step 1</p>
      <h3>Choose or create a Notion page</h3>
      <br />
       <p className="step-title">Choose an existing Notion page, create a new one or start with a template. Super works with any Notion page.</p>
    </div>

    {/* Step 2 */}
    <div className="step-box">
      <img src={step2Img} alt="Step 2" />
      <p className="step-title">Step 2</p>
      <h3>Paste the Notion page’s web link in Super</h3>
       <br />
       <p className="step-title">Publish your Notion page via the Share menu and paste the Notion web link in Super when creating a site.</p>
    </div>

    {/* Step 3 */}
    <div className="step-box">
      <img src={step3Img} alt="Step 3" />
      <p className="step-title">Step 3</p>
      <h3>Share your site with the world</h3>
      <br />
       <p className="step-title">Your content is now live on a site you can call your own! Edits in Notion are automatically synced.</p>
    </div>
  </div>
</section>
 <section className="testimonials">
        <h2>Join over 100,000 creators using Super</h2>
        <p className="subtext">
          Our mission is to create the best web hosting platform you’ve ever used.
          We love building beautiful and useful software fueled by feedback from our customers.
          Here’s what some of them have to say.
        </p>
        <div className="testimonial-cards">
          <div className="card">
            <img src={ben} alt="Ben" className="avatar" />
            <h4>Ben</h4>
            <p className="handle">@mrbenjaminhoppe</p>
            <p>Super is one of the fastest ways to create a website... update your site effortlessly.</p>
          </div>
          <div className="card">
            <img src={matt} alt="Matt" className="avatar" />
            <h4>Matt</h4>
            <p className="handle">@mattdowney</p>
            <p>Super makes it dead simple to create beautiful websites with Notion powering your content.</p>
          </div>
          <div className="card">
            <img src={will} alt="Will" className="avatar" />
            <h4>Will</h4>
            <p className="handle">@notiondad</p>
            <p>I love that Super runs on Notion, where the rest of my life is.</p>
          </div>
          <div className="card">
            <img src={james} alt="James" className="avatar" />
            <h4>James</h4>
            <p className="handle">@jmckinven</p>
            <p>With Super, I can spin up quick, beautiful, effective websites in minutes!</p>
          </div>
          <div className="card">
            <img src={yusuf} alt="Yusuf" className="avatar" />
            <h4>Yusuf</h4>
            <p className="handle">@yusufgiftworks</p>
            <p>Editing content is a breeze because it's all in Notion. Security, scaling… no worries.</p>
          </div>
          <div className="card">
            <img src={karl} alt="Karl" className="avatar" />
            <h4>Karl</h4>
            <p className="handle">@ClemensWasner</p>
            <p>We needed a fast, aesthetic solution. Super gave us sub-pages, collections, and ease of use.</p>
          </div>
        </div>
      </section>
      {/* Notion Content Section */}
<section className="notion-promo">
  <div className="notion-content-box">
    <div className="notion-icon-wrapper">
      <img src={notionIcon} alt="Notion Icon" />
    </div>
    <h2>Your content lives in Notion</h2>
    <p className="notion-subtext">
      Your work stays in a place you control and love, while Super handles the technical
      parts of publishing it to your website. This means you can focus what’s actually
      important to you: creating content and building your brand without worrying about
      configurations, plugins, downtime, performance, or security.
    </p>
    <div className="notion-preview">
      <img src={notionUI} alt="Notion Workspace Preview" />
      <br />
      <br />
      <br />
       <div className="notion-icon-wrapper">
       <img src={notionIcon2} alt="Notion Icon" />
    </div>
    <h2>Customize to match your brand</h2>
    <p className="notion-subtext">
     Style the look and feel of your site with no-code themes and designer templates. Everything can be customized inside Super without code to make you proud of the unique site you share with the world. Add custom-code only if you want to.
    </p>
    <div className="notion-preview">
      <img src={notionUI2} alt="Notion Workspace Preview" />
    </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Home;

