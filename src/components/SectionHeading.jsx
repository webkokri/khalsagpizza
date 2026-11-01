import React from 'react';

export default function SectionHeading({ eyebrow, title, center, light, as: Tag = 'h2', children }) {
  return (
    <div className={`section-heading${center ? ' section-heading--center' : ''}${light ? ' section-heading--light' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className="h2">{title}</Tag>
      {children}
    </div>
  );
}
