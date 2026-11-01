import React, { useState } from 'react';
import Icon from './Icon.jsx';
import SectionHeading from './SectionHeading.jsx';
import { FAQS } from '../data.js';

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="section section--flush-top">
      <div className="container container--narrow stack-24">
        <SectionHeading eyebrow="FAQ" title="Good to know" center />
        <div className="stack-12">
          {FAQS.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q} className="faq">
                <h3 className="faq__q">
                  <button type="button" aria-expanded={open} aria-controls={`faq-${i}`} onClick={() => setOpenFaq(open ? -1 : i)}>
                    {f.q}
                    <span className={`faq__icon${open ? ' is-open' : ''}`}>
                      <Icon name="plus" size={18} strokeWidth={2.4} />
                    </span>
                  </button>
                </h3>
                <div id={`faq-${i}`} hidden={!open} className="faq__a">
                  {f.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
