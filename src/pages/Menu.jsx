import React from 'react';
import { Link } from 'react-router-dom';
import MenuItemCard from '../components/MenuItemCard.jsx';
import Faq from '../components/Faq.jsx';
import { MENU, priceFor } from '../data.js';

export default function Menu() {
  const sections = MENU;

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__row">
          <div className="stack-12">
            <span className="eyebrow eyebrow--gold">FULL MENU</span>
            <h1 className="h1">Pick your feast</h1>
            <p className="lead lead--dark">
              Tap S, M, L or XL on any pizza to see its price. Everything we serve is 100% vegetarian.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--menu">
        <div className="container sidebar-layout">
          <nav aria-label="Menu sections" className="jump-nav">
            <span className="jump-nav__title">JUMP TO</span>
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="jump-nav__link">
                {s.label}
                <span>{s.items.length}</span>
              </a>
            ))}
          </nav>

          <div className="stack-48 sidebar-layout__main">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="menu-section">
                <div className="menu-section__head">
                  <h2 className="h2">{s.label}</h2>
                  <span className="muted">{s.note || ''}</span>
                </div>
                <div className="row-grid">
                  {s.items.map((item) => (
                    <MenuItemCard key={item.id} item={item} sizes={s.sized ? s.prices : undefined} price={s.sized ? undefined : priceFor(s, item)} layout="row" />
                  ))}
                </div>
              </section>
            ))}

            <section className="byo">
              <div className="row-between">
                <h2 className="h2 text-paper">Build your own</h2>
                <span className="byo__price-line">
                  Cheese pizza from <strong>$11.00</strong> · extra toppings from $1.00 each
                </span>
              </div>
              <div className="card-grid card-grid--narrow">
                <div className="stack-8">
                  <span className="eyebrow eyebrow--gold">CRUST</span>
                  <span className="byo__text">Fresh dough daily · Gluten free crust (medium) +$5.50</span>
                </div>
                <div className="stack-8">
                  <span className="eyebrow eyebrow--gold">EXTRAS</span>
                  <span className="byo__text">Extra topping: Large $3 · Medium $2 · Small $1. Extra cheese or vegan cheese: Large $5 · Medium $4 · Small $3.</span>
                </div>
                <div className="stack-8">
                  <span className="eyebrow eyebrow--gold">TOPPINGS</span>
                  <span className="byo__text">
                    Onion · Mushrooms · Pineapple · Bell peppers · Black olives · Tomatoes · Spinach · Garlic · Ginger · Cilantro ·
                    Paneer · Tofu · Banana pepper · Jalapeño · Corn · Cauliflower · Crushed green chilli
                  </span>
                </div>
              </div>
              <Link to="/contact" className="btn btn--primary">Start building</Link>
            </section>

            <p className="small muted">We use 100% pure Khalis ingredients. If you have any allergies, please alert the cashier or phone-op.</p>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
