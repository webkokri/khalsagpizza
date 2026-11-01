import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { STORE } from '../data.js';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    // TODO: send `email` to your newsletter provider.
    setJoined(true);
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <span className="site-footer__name">
            Khalsa G <span className="text-saffron">Pizza</span>
          </span>
          <p>
            From the clay oven to the pizza box. Khalsa G Pizza brings the rich, authentic spirit of Punjabi cuisine to
            Edmonton. We blend bold Desi spices, fresh ingredients, and royal portions to bake a fusion experience you won’t
            find anywhere else.
          </p>
        </div>

        <nav aria-label="Footer" className="site-footer__col">
          <span className="site-footer__heading">EXPLORE</span>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/deals">Deals</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="site-footer__col">
          <span className="site-footer__heading">VISIT</span>
          <span>{STORE.address}</span>
          <a href={`tel:${STORE.phone}`}>{STORE.phone}</a>
          {STORE.hours.map((h) => (
            <span key={h.days}>
              {h.days}: {h.time}
            </span>
          ))}
        </div>

        <form className="site-footer__col" onSubmit={subscribe}>
          <span className="site-footer__heading">GET THE DEALS FIRST</span>
          <label htmlFor="footer-email">Email address</label>
          <div className="subscribe">
            <input
              id="footer-email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn--primary">
              Subscribe
            </button>
          </div>
          {joined && (
            <span role="status" className="text-gold">
              You're on the list!
            </span>
          )}
        </form>
      </div>
      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} Khalsa G Pizza. All rights reserved.</span>
        <span>100% vegetarian · 100% pure Khalis ingredients.</span>
      </div>
    </footer>
  );
}
