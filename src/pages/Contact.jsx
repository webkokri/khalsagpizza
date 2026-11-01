import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Faq from '../components/Faq.jsx';
import { CONTACT_TOPICS, STORE } from '../data.js';

const EMPTY = { name: '', phone: '', email: '', message: '' };

export default function Contact() {
  const [params] = useSearchParams();
  const [form, setForm] = useState(EMPTY);
  const [topic, setTopic] = useState(params.get('topic') === 'catering' ? 'Catering & events' : CONTACT_TOPICS[0]);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = 'Please enter a valid email.';
    if (!form.message.trim()) next.message = 'Please write a message.';
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(`c-${Object.keys(next)[0]}`)?.focus();
      return;
    }
    // TODO: send { ...form, topic } to your backend, Formspree, EmailJS, etc.
    setSent(true);
  };

  const reset = () => {
    setForm(EMPTY);
    setErrors({});
    setSent(false);
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE.address)}`;

  return (
    <>
      <section className="page-hero">
        <div className="container stack-32">
          <div className="stack-12 measure">
            <span className="eyebrow eyebrow--gold">CONTACT US</span>
            <h1 className="h1">Hungry? Say hello.</h1>
            <p className="lead lead--dark">Questions, feedback, big orders or catering — we're happy to help.</p>
          </div>
          <div className="contact-cards">
            <a href={`tel:${STORE.phone}`} className="contact-card">
              <Icon name="phone" size={28} color="var(--saffron)" />
              <span className="eyebrow eyebrow--gold">CALL TO ORDER</span>
              <span className="contact-card__value">{STORE.phone}</span>
            </a>
            <a href={`mailto:${STORE.email}`} className="contact-card">
              <Icon name="mail" size={28} color="var(--saffron)" />
              <span className="eyebrow eyebrow--gold">EMAIL</span>
              <span className="contact-card__value">{STORE.email}</span>
            </a>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="contact-card">
              <Icon name="pin" size={28} color="var(--saffron)" />
              <span className="eyebrow eyebrow--gold">VISIT</span>
              <span className="contact-card__value">{STORE.address}</span>
            </a>
            <a href={`tel:${STORE.phone}`} className="contact-card">
              <Icon name="gift" size={28} color="var(--saffron)" />
              <span className="eyebrow eyebrow--gold">CATERING</span>
              <span className="contact-card__value">{STORE.phone}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container sidebar-layout sidebar-layout--reverse">
          <div className="form-card sidebar-layout__main" id="contact-form">
            {sent ? (
              <div role="status" className="stack-16 success">
                <span className="success__icon">
                  <Icon name="check" size={32} color="#fff" strokeWidth={2.6} />
                </span>
                <h2 className="h2">Thanks — message received!</h2>
                <p className="body">We'll get back to you within one business day. For orders right now, give us a call.</p>
                <button type="button" className="btn btn--dark" onClick={reset}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="stack-20">
                <div className="stack-8">
                  <h2 className="h2">Send us a message</h2>
                  <p className="body">Fields marked * are required.</p>
                </div>
                <div className="field-grid">
                  <Field id="c-name" label="Full name *" value={form.name} onChange={update('name')} error={errors.name} autoComplete="name" />
                  <Field id="c-phone" label="Phone" type="tel" value={form.phone} onChange={update('phone')} autoComplete="tel" />
                </div>
                <div className="field-grid">
                  <Field id="c-email" label="Email *" type="email" value={form.email} onChange={update('email')} error={errors.email} autoComplete="email" />
                  <div className="field">
                    <label htmlFor="c-topic">Topic</label>
                    <select id="c-topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
                      {CONTACT_TOPICS.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <Field id="c-message" label="Message *" value={form.message} onChange={update('message')} error={errors.message} textarea />
                <button type="submit" className="btn btn--primary btn--lg">
                  Send message <Icon name="arrow-right" size={18} />
                </button>
              </form>
            )}
          </div>

          <aside className="stack-20 sidebar-layout__side">
            <div className="hours">
              <h2 className="h2 text-paper">Opening hours</h2>
              <dl>
                {STORE.hours.map((h) => (
                  <div key={h.days} className="hours__row">
                    <dt>{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="map-placeholder map-placeholder--sm map-placeholder--live"><iframe className="map-embed" title="Khalsa G Pizza on Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.1828140228513!2d-113.49284502272441!3d53.40227257230554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01df2a0147b41%3A0x275adc2bc62ac826!2sKhalsa%20G%20Pizza!5e1!3m2!1sen!2sca!4v1793488124962!5m2!1sen!2sca" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /></div>
          </aside>
        </div>
      </section>

      <Faq />
    </>
  );
}

function Field({ id, label, error, textarea, ...props }) {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <Tag
        id={id}
        {...props}
        rows={textarea ? 6 : undefined}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={error ? 'has-error' : undefined}
      />
      {error && (
        <span id={`${id}-err`} className="field__error">
          {error}
        </span>
      )}
    </div>
  );
}
