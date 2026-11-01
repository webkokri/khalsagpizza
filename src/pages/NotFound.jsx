import React from 'react';
import { Link } from 'react-router-dom';
import { PizzaArt } from '../components/Icon.jsx';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container stack-20 center">
        <PizzaArt size={140} />
        <h1 className="h2">This slice is missing.</h1>
        <p className="body">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn--primary">Back to home</Link>
      </div>
    </section>
  );
}
