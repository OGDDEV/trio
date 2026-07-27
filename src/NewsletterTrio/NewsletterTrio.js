import React from 'react';
import './NewsletterTrio.css';

export default function NewsletterTrio() {
  return (
    <div className="News">
      <div className="newsletter-bar">
        <div>Join Our Newsletter</div>
        <input type="text" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
      <p className="newsletter-caption">Be the first to get updates on new arrivals, offers and styling tips.</p>
    </div>
  );
}
