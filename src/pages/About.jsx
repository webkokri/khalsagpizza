import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Faq from '../components/Faq.jsx';
import { STORE } from '../data.js';
import heroImg from '../assets/hero.jpeg';

const VALUES = [
  { icon: 'leaf', title: 'Fresh, always', text: 'Dough, sauces and toppings prepped daily. Nothing sits under a heat lamp.' },
  { icon: 'pizza', title: 'Royal portions', text: "Toppings edge to edge. If it looks thin, we've done it wrong." },
  { icon: 'heart', title: 'Everyone welcome', text: 'We are 100% vegetarian, so the whole table can eat together.' },
  { icon: 'users', title: 'Community first', text: 'We support local schools, teams and events. Ask us about giving back.' },
];

const PROCESS = [
  ['01', 'Knead', 'Dough mixed each morning and rested for flavour.'],
  ['02', 'Marinate', 'Paneer soaked in house tikka masala.'],
  ['03', 'Stretch & top', 'Hand-stretched to order, loaded edge to edge.'],
  ['04', 'Bake & box', 'Baked till golden and boxed straight from the oven.'],
];

export default function About() {
  return (
    <>
      <section className="hero">
        <div className="container split">
          <div className="split__copy stack-20">
            <span className="eyebrow eyebrow--gold">ABOUT US</span>
            <h1 className="h1">
              Pizza with a <span className="text-saffron">Punjabi heart.</span>
            </h1>
            <p className="lead lead--dark">
              Khalsa G Pizza started with a simple idea: the comfort of a great pizza, cooked with the warmth, spice and
              generosity of a Punjabi kitchen. No one leaves our counter hungry.
            </p>
            <div className="btn-row">
              <Link to="/menu" className="btn btn--primary">Explore the menu</Link>
              <Link to="/contact" className="btn btn--outline-light">Visit us</Link>
            </div>
          </div>
          <figure className="about-figure">
            <img src={heroImg} alt="Painted portrait of a Sikh warrior seated on a throne holding a sword" />
            <figcaption>The spirit behind our name: courage, pride and an open door for everyone.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container split split--top">
          <div className="split__narrow">
            <SectionHeading eyebrow="OUR STORY" title="From a family kitchen to your table" />
          </div>
          <div className="story">
            <p>
              [FOUNDER NAME] opened Khalsa G Pizza in [YEAR] after years of cooking for family gatherings where the pizza and
              the paneer tikka always disappeared first. Why not put the two together?
            </p>
            <p>
              Today our kitchen still runs on the same rules: dough made by hand every morning, masalas ground in-house, and
              sauces simmered slowly — makhani, shahi and achari done the way they're made at home.
            </p>
            <p>
              We're proud to serve our neighbourhood, feed late-night study sessions and cater the celebrations that bring
              people together. [ADD YOUR OWN STORY HERE]
            </p>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container stack-40">
          <SectionHeading eyebrow="WHAT WE STAND FOR" title="Four promises, every order" center />
          <div className="card-grid card-grid--four">
            {VALUES.map((v) => (
              <div key={v.title} className="feature feature--paper">
                <span className="feature__icon">
                  <Icon name={v.icon} size={26} color="var(--saffron)" />
                </span>
                <h3 className="h3">{v.title}</h3>
                <p className="body">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack-36">
          <SectionHeading eyebrow="INSIDE OUR KITCHEN" title="How every pizza is made" />
          <ol className="process">
            {PROCESS.map(([n, t, d]) => (
              <li key={n} className="process__item">
                <span className="process__num">{n}</span>
                <strong className="h3">{t}</strong>
                <span className="body">{d}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container">
          <div className="banner banner--red">
            <div className="banner__copy">
              <h2 className="h1 h1--sm">Planning a party or event?</h2>
              <p className="lead lead--blush">We cater birthdays, office lunches, school events and celebrations of every size.</p>
            </div>
            <a href={`tel:${STORE.phone}`} className="btn btn--light btn--lg">Call {STORE.phone}</a>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
