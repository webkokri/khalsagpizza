import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import { OFFERS } from '../data.js';

const AUTOPLAY_MS = 4000;

// Rotating offers card shown on the left of the home hero.
// Pauses while hovered or focused, and doesn't auto-rotate for reduced-motion users.
export default function OffersCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);
  const n = OFFERS.length;

  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const start = useCallback(() => {
    clearInterval(timer.current);
    if (reduceMotion) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % n), AUTOPLAY_MS);
  }, [n, reduceMotion]);

  useEffect(() => {
    if (paused) clearInterval(timer.current);
    else start();
    return () => clearInterval(timer.current);
  }, [paused, start]);

  const go = (i) => {
    setIndex(((i % n) + n) % n);
    if (!paused) start();
  };

  const offer = OFFERS[index];

  return (
    <section
      className="offers"
      aria-roledescription="carousel"
      aria-label="Hot offers"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="offers__top">
        <span className="offers__label">
          <Icon name="tag" size={16} color="var(--saffron-text)" />
          HOT OFFERS
        </span>
        <span className="offers__count">
          {index + 1} / {n}
        </span>
      </div>

      <div className="offers__slide" key={offer.id} aria-live="polite" aria-roledescription="slide">
        <span className="pill pill--red">{offer.tag}</span>
        <h2 className="offers__title">{offer.title}</h2>
        <p className="offers__sub">{offer.sub}</p>
        <div className="offers__price-row">
          <span className="offers__price">{offer.price}</span>
          <span className="offers__code">{offer.when}</span>
        </div>
      </div>

      <div className="offers__controls">
        <div className="offers__dots">
          {OFFERS.map((o, i) => (
            <button
              key={o.id}
              type="button"
              className="offers__dot-btn"
              aria-label={`Show offer ${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
            >
              <span className={`offers__dot${i === index ? ' is-active' : ''}`} />
            </button>
          ))}
        </div>
        <div className="offers__arrows">
          <button type="button" className="round-btn round-btn--outline" aria-label="Previous offer" onClick={() => go(index - 1)}>
            <Icon name="chevron-left" size={18} />
          </button>
          <button type="button" className="round-btn round-btn--dark" aria-label="Next offer" onClick={() => go(index + 1)}>
            <Icon name="chevron-right" size={18} />
          </button>
          <Link to="/deals" className="btn btn--primary">
            Grab deal
          </Link>
        </div>
      </div>
    </section>
  );
}
