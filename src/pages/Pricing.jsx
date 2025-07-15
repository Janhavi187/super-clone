import React, { useState } from 'react';
import '../styles/pricing.css'; // Import the CSS file

// Data for pricing plans
const pricingPlans = {
  monthly: [
    {
      id: 'free',
      title: 'Free site',
      price: '$0',
      period: '/month per site',
      features: [
        'Free hosting on super.site',
        'Customize with themes',
        'Customer support',
        'Works with any Notion page',
      ],
      buttonText: 'Start for free',
      highlight: false,
    },
    {
      id: 'personal',
      title: 'Personal site',
      price: '$16',
      period: '/month per site',
      features: [
        'Everything on free, plus:',
        'Connect your own domain',
        'Custom code',
        'Password protected pages',
        'Custom fonts',
        'SEO (coming soon)',
        'Notion forms',
        'Search',
      ],
      buttonText: 'Start for free',
      highlight: true, // This one is "MOST POPULAR"
    },
    {
      id: 'pro',
      title: 'Pro site',
      price: '$28',
      period: '/month per site',
      features: [
        'Everything on personal, plus:',
        'Manual publishing controls',
        'Advanced search',
        'File uploads',
        'Redirect and hide pages',
        'Team accounts',
        'Access to new features (alpha)',
        'Priority support',
      ],
      buttonText: 'Start for free',
      highlight: false,
    },
  ],
  yearly: [
    // You would adjust prices for yearly billing here if they are different
    // For simplicity, I'll just adjust the period text. Realistically, prices would be lower.
    {
      id: 'free',
      title: 'Free site',
      price: '$0',
      period: '/year per site', // Changed
      features: [
        'Free hosting on super.site',
        'Customize with themes',
        'Customer support',
        'Works with any Notion page',
      ],
      buttonText: 'Start for free',
      highlight: false,
    },
    {
      id: 'personal',
      title: 'Personal site',
      price: '$144', // Example yearly price (16 * 9 months effectively, for a discount)
      period: '/year per site', // Changed
      features: [
        'Everything on free, plus:',
        'Connect your own domain',
        'Custom code',
        'Password protected pages',
        'Custom fonts',
        'SEO (coming soon)',
        'Notion forms',
        'Search',
      ],
      buttonText: 'Start for free',
      highlight: true,
    },
    {
      id: 'pro',
      title: 'Pro site',
      price: '$264', // Example yearly price (28 * 9.4 months effectively)
      period: '/year per site', // Changed
      features: [
        'Everything on personal, plus:',
        'Manual publishing controls',
        'Advanced search',
        'File uploads',
        'Redirect and hide pages',
        'Team accounts',
        'Access to new features (alpha)',
        'Priority support',
      ],
      buttonText: 'Start for free',
      highlight: false,
    },
  ],
};

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'monthly' or 'yearly'

  const currentPlans = pricingPlans[billingPeriod];

  return (
    <div className="pricing-container">
      <header className="pricing-header">
        <h1 className="pricing-main-title">Simple pricing, Super features</h1>
        <div className="billing-toggle">
          <button
            className={`toggle-button ${billingPeriod === 'monthly' ? 'active' : ''}`}
            onClick={() => setBillingPeriod('monthly')}
          >
            Monthly billing
          </button>
          <button
            className={`toggle-button ${billingPeriod === 'yearly' ? 'active' : ''}`}
            onClick={() => setBillingPeriod('yearly')}
          >
            Yearly billing
          </button>
        </div>
      </header>

      <div className="pricing-cards-grid">
        {currentPlans.map(plan => (
          <div
            className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
            key={plan.id}
          >
            {plan.highlight && <span className="most-popular-tag">MOST POPULAR</span>}
            <h2 className="plan-title">{plan.title}</h2>
            <p className="plan-price">{plan.price}<span>{plan.period}</span></p>
            <button className="plan-button">
              {plan.buttonText} <span className="arrow">→</span>
            </button>
            <div className="plan-features">
              {plan.features.map((feature, index) => (
                <p className="feature-item" key={index}>
                  {/* Assuming a checkmark for all features, or specific icons based on design */}
                  <span className="checkmark">✓</span> {feature}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;