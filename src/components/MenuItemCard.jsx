import React, { useState } from 'react';
import { PizzaArt } from './Icon.jsx';
import { SIZES, STORE, money } from '../data.js';

// layout="tile": picture on top (home page grid). layout="row": compact (menu page).
// `sizes` = { S: 15, M: 19, ... } for pizzas: shows S | M | L buttons and the price follows the choice.
// Items without `sizes` use the fixed `price` string.
export default function MenuItemCard({ item, price, sizes, layout = 'tile' }) {
  const tile = layout === 'tile';
  const options = sizes ? SIZES.filter((s) => sizes[s.id] != null) : [];
  const [size, setSize] = useState(options.some((s) => s.id === 'L') ? 'L' : options[0]?.id);
  const shown = sizes ? money(sizes[size]) : price;

  return (
    <article className={`item-card item-card--${layout}`}>
      <div className="item-card__art">
        <PizzaArt size={tile ? 120 : 64} />
        {tile && item.veg && <span className="item-card__veg">VEG</span>}
      </div>
      <div className="item-card__body">
        <div className="item-card__title-row">
          <h3 className="item-card__name">{item.name}</h3>
          {!tile && item.veg && <span className="badge badge--green">VEG</span>}
          {item.spicy && <span className="badge badge--red">SPICY</span>}
        </div>
        <p className="item-card__desc">{item.desc}</p>
        {sizes && (
          <div role="group" aria-label={`${item.name} size`} className="size-picker">
            {options.map((s) => (
              <button key={s.id} type="button" className={`size-picker__btn${s.id === size ? ' is-active' : ''}`} aria-pressed={s.id === size} aria-label={s.label} onClick={() => setSize(s.id)}>
                {s.id}
              </button>
            ))}
          </div>
        )}
        <div className="item-card__footer">
          <span className="price">{shown}</span>
          <a href={STORE.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm" aria-label={`Order ${item.name} online`}>
            Order Online
          </a>
        </div>
      </div>
    </article>
  );
}
