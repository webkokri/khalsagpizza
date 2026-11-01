import React, { useState } from 'react';
import Icon from '../components/Icon.jsx';
import Faq from '../components/Faq.jsx';
import { DEALS, DEAL_FILTERS, STORE } from '../data.js';

const STEPS = [
  ['Pick your deal', 'Check the day above and choose a deal.'],
  ['Build your order', 'Add the items the deal covers from our menu.'],
  ['Mention it', 'Tell us the deal when you order or call in.'],
];

export default function Deals() {
  const [filter, setFilter] = useState('all');

  const list = DEALS.filter((d) => filter === 'all' || d.cats.includes(filter));

  return (
    <>
      <section className="page-hero page-hero--red">
        <div className="container page-hero__row">
          <div className="stack-12">
            <span className="eyebrow eyebrow--blush">DEALS &amp; COMBOS</span>
            <h1 className="h1">More pizza, less spend.</h1>
            <p className="lead lead--blush">A deal every day of the week. Just mention it when you order.</p>
          </div>
          <div className="dotd">
            <span className="eyebrow eyebrow--gold">DEAL OF THE DAY</span>
            <span className="dotd__title">Family Deal</span>
            <span className="dotd__price">$35</span>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container stack-28">
          <div role="group" aria-label="Filter deals" className="chip-row">
            {DEAL_FILTERS.map((f) => (
              <button key={f.id} type="button" className={`chip${f.id === filter ? ' is-active' : ''}`} aria-pressed={f.id === filter} onClick={() => setFilter(f.id)}>
                {f.label}
              </button>
            ))}
          </div>

          <div className="deal-grid">
            {list.map((d) => {
              return (
                <article key={d.id} className="deal">
                  <div className="deal__top">
                    <div className="stack-8">
                      <span className="pill pill--saffron">{d.tag}</span>
                      <h2 className="deal__title">{d.title}</h2>
                    </div>
                    <span className="deal__price">{d.price}</span>
                  </div>
                  <div className="deal__body">
                    <p className="body body--dark">{d.desc}</p>
                    <span className="deal__when">
                      <Icon name="clock" size={16} /> {d.when}
                    </span>
                    <div className="deal__code-row">
                      <a href={STORE.orderUrl} target="_blank" rel="noopener noreferrer" className="link-strong deal__order">Order Online</a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container stack-28">
          <h2 className="h2">How to redeem</h2>
          <ol className="steps">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="steps__item">
                <span className="steps__num">{i + 1}</span>
                <strong className="h3">{t}</strong>
                <span className="body">{d}</span>
              </li>
            ))}
          </ol>
          <p className="small muted">These are the only deals available. Please don't ask for more deals.</p>
        </div>
      </section>

      <Faq />
    </>
  );
}
