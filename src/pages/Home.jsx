import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon, { SignaturePizza } from '../components/Icon.jsx';
import OffersCarousel from '../components/OffersCarousel.jsx';
import MenuItemCard from '../components/MenuItemCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Faq from '../components/Faq.jsx';
import { CATEGORIES, MENU, STORE, priceFor } from '../data.js';
import heroImg from '../assets/hero.jpeg';

const FEATURES = [
  { icon: 'dough', title: 'Dough made fresh daily', text: "Hand-stretched every morning for a crust that's crisp outside and soft inside." },
  { icon: 'fire', title: '100% vegetarian', text: 'A fully vegetarian kitchen, made with 100% pure Khalis ingredients.' },
  { icon: 'truck', title: 'Hot to your door', text: 'Order for pickup or delivery — boxed straight from the oven.' },
];

export default function Home() {
  const [cat, setCat] = useState('pizzas');
  const menuRef = useRef(null);
  const section = MENU.find((s) => s.id === cat);

  const pickCategory = (id) => {
    setCat(id);
    menuRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* HERO: offers card left, static picture right */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <div className="stack-16">
              <span className="eyebrow eyebrow--gold">100% VEGETARIAN · FRESH DOUGH DAILY</span>
              <h1 className="h1">
                Bold pizza.
                <br />
                <span className="text-saffron">Royal portions.</span>
              </h1>
              <p className="lead lead--dark">
                Fresh dough and toppings loaded with paneer, shahi sauces and desi flavours — 100% vegetarian, baked hot and
                served with a full heart.
              </p>
            </div>
            <OffersCarousel />
          </div>

          <div className="hero__media">
            <div className="hero__frame">
              <div className="hero__glow hero__glow--a" aria-hidden="true" />
              <div className="hero__glow hero__glow--b" aria-hidden="true" />
              <div className="hero__glow hero__glow--c" aria-hidden="true" />
              <img src={heroImg} alt="Painted portrait of a Sikh warrior seated on a throne holding a sword" className="hero__img" />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section section--cat">
        <div className="container stack-36">
          <SectionHeading eyebrow="BROWSE BY CATEGORY" title="What are you craving?" center />
          <div className="category-grid">
            {CATEGORIES.map((c) => (
              <button key={c.id} type="button" className={`category${c.id === cat ? ' is-active' : ''}`} onClick={() => pickCategory(c.id)}>
                <span className="category__icon" style={{ background: c.bg }}>
                  <Icon name={c.icon} size={34} color={c.tint} strokeWidth={1.8} />
                </span>
                <span className="category__label">{c.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MENU WITH NAVIGATION */}
      <section className="section section--tight" id="menu" ref={menuRef}>
        <div className="container stack-28">
          <div className="row-between">
            <SectionHeading eyebrow="OUR MENU" title={section.label} />
            <Link to="/menu" className="link-strong">
              See full menu <Icon name="arrow-right" size={16} />
            </Link>
          </div>
          <nav aria-label="Menu categories" className="tab-bar">
            {MENU.map((s) => (
              <button key={s.id} type="button" className={`tab${s.id === cat ? ' is-active' : ''}`} aria-pressed={s.id === cat} onClick={() => setCat(s.id)}>
                {s.label}
              </button>
            ))}
          </nav>
          <div className="item-grid">
            {section.items.map((item) => (
              <MenuItemCard key={item.id} item={item} sizes={section.sized ? section.prices : undefined} price={section.sized ? undefined : priceFor(section, item)} />
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="signature">
        <div className="container split">
          <div className="split__media">
            <SignaturePizza />
          </div>
          <div className="split__copy stack-20">
            <span className="eyebrow eyebrow--blush">HOUSE SIGNATURE</span>
            <h2 className="h1 h1--md">The Shahi Paneer Pizza</h2>
            <p className="lead lead--blush">
              Creamy rich Indian-inspired sauces, paneer, a blend of spices, bell peppers, ginger, onions, banana pepper,
              cilantro and cheese. The Seva Sunday favourite.
            </p>
            <div className="stat-row">
              <div>
                <span className="stat">$25</span>
                <span className="stat__label">Large Special Pizza</span>
              </div>
              <div>
                <span className="stat">From $17</span>
                <span className="stat__label">Small special pizza</span>
              </div>
            </div>
            <div className="btn-row">
              <a href={STORE.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn--light">Order Online</a>
              <Link to="/menu" className="btn btn--outline-light">See full menu</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="container stack-40">
          <SectionHeading eyebrow="WHY KHALSA G" title="Made like we're feeding family" center />
          <div className="card-grid">
            {FEATURES.map((f) => (
              <div key={f.title} className="feature">
                <span className="feature__icon">
                  <Icon name={f.icon} size={26} color="var(--saffron)" />
                </span>
                <h3 className="h3">{f.title}</h3>
                <p className="body">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEAL BANNER */}
      <section className="section section--flush-top">
        <div className="container">
          <div className="banner">
            <div className="banner__copy">
              <span className="eyebrow eyebrow--gold">FAMILY DEAL</span>
              <h2 className="h1 h1--sm">Any large regular pizza + 10 cauli bites + 2 litre pop, any day</h2>
            </div>
            <div className="banner__cta">
              <span className="banner__price">$35</span>
              <Link to="/deals" className="btn btn--primary btn--lg">See all deals</Link>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section className="section section--flush-top">
        <div className="container split split--top">
          <div className="split__copy stack-20">
            <SectionHeading eyebrow="VISIT US" title="Come hungry." />
            <ul className="info-list">
              <li><Icon name="pin" size={22} color="var(--saffron-text)" />{STORE.address}</li>
              <li>
                <Icon name="clock" size={22} color="var(--saffron-text)" />
                <span>{STORE.hours.map((h) => <span key={h.days} className="block">{h.days}: {h.time}</span>)}</span>
              </li>
              <li><Icon name="phone" size={22} color="var(--saffron-text)" /><a href={`tel:${STORE.phone}`}>{STORE.phone}</a></li>
            </ul>
            <div className="btn-row">
              <Link to="/contact" className="btn btn--dark">Get directions</Link>
              <a href={STORE.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline-dark">Order Online</a>
            </div>
          </div>
          <div className="map-placeholder map-placeholder--live"><iframe className="map-embed" title="Khalsa G Pizza on Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.1828140228513!2d-113.49284502272441!3d53.40227257230554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01df2a0147b41%3A0x275adc2bc62ac826!2sKhalsa%20G%20Pizza!5e1!3m2!1sen!2sca!4v1793488124962!5m2!1sen!2sca" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /></div>
        </div>
      </section>

      <Faq />
    </>
  );
}
