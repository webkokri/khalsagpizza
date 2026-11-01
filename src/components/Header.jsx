import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon.jsx';
import { STORE } from '../data.js';
import logoImg from '../assets/logo.png';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/menu', label: 'Menu' },
  { to: '/deals', label: 'Deals' },
  { to: '/about', label: 'About us' },
  { to: '/contact', label: 'Contact' },
];

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Khalsa G Pizza home">
      <img className="logo__mark" src={logoImg} alt="" width="48" height="48" />
      <span className="logo__name">KHALSA G PIZZA</span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <Logo />

        <nav aria-label="Main" className={`site-nav${open ? ' is-open' : ''}`} id="site-nav">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <a href={`tel:${STORE.phone}`} className="site-header__phone">
            <Icon name="phone" size={18} color="var(--gold-text)" />
            <span>{STORE.phone}</span>
          </a>
          <a href={STORE.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary site-header__order">
            Order Online
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
