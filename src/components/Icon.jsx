import React from 'react';

// Stroke icons used across the site (24×24 grid).
const PATHS = {
  pizza: (
    <>
      <path d="M12 3 3 20c6 2.5 12 2.5 18 0L12 3Z" />
      <path d="M5.2 15.8c4.3 1.6 9.3 1.6 13.6 0" />
      <circle cx="11" cy="11" r="1.2" />
      <circle cx="13.5" cy="16" r="1.2" />
      <circle cx="9" cy="17" r="1" />
    </>
  ),
  fire: (
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3.2.3 1.5 1.4 2.7 2.5 2.7Z" />
  ),
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z" />
      <path d="M2 21c0-3 1.9-5.4 5.2-6.1C9.5 14.4 12 13 13 12" />
    </>
  ),
  drumstick: (
    <>
      <path d="M15.4 15.6c-2.1 2.1-5.1 2.6-6.9.8s-1.3-4.8.8-6.9c2.1-2.1 5.6-4 7.4-2.2s0 6.2-1.3 8.3Z" />
      <path d="m9.3 16.4-3 3" />
      <circle cx="5" cy="20" r="1.6" />
      <circle cx="4.2" cy="17.4" r="1.4" />
    </>
  ),
  fries: (
    <>
      <path d="M5 10h14l-1.6 10.2a1 1 0 0 1-1 .8H7.6a1 1 0 0 1-1-.8L5 10Z" />
      <path d="M8 10V3M11 10V2M14 10V3M17 10V4" />
    </>
  ),
  gift: (
    <>
      <path d="M3 8h18v4H3z" />
      <path d="M5 12v8h14v-8M12 8v12" />
      <path d="M12 8c-1.5-3-5-4-6-2s2.5 2 6 2Z" />
      <path d="M12 8c1.5-3 5-4 6-2s-2.5 2-6 2Z" />
    </>
  ),
  cupcake: (
    <>
      <path d="M4 12h16l-2 9H6l-2-9Z" />
      <path d="M5 12a7 7 0 0 1 14 0" />
      <path d="M12 5V3" />
    </>
  ),
  cup: (
    <>
      <path d="M6 7h12l-1.5 13a1 1 0 0 1-1 .9h-7a1 1 0 0 1-1-.9L6 7Z" />
      <path d="M5 7h14M6.6 12h10.8" />
      <path d="m13 7 2-5h3" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  tag: (
    <>
      <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8Z" />
      <circle cx="7" cy="7" r="1.5" />
    </>
  ),
  truck: (
    <>
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  dough: (
    <>
      <path d="M3 11c0-4 4-7 9-7s9 3 9 7v2H3v-2Z" />
      <path d="M3 13h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" />
    </>
  ),
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8Z" />,
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  check: <path d="M20 6 9 17l-5-5" />,
  'arrow-right': <path d="M5 12h14M12 5l7 7-7 7" />,
  'chevron-left': <path d="m15 18-6-6 6-6" />,
  'chevron-right': <path d="m9 18 6-6-6-6" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M18 6 6 18M6 6l12 12" />,
};

export default function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 2, label, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}

// Illustrated pizza used in place of food photography.
export function PizzaArt({ size = 120, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className} aria-hidden="true" focusable="false">
      <circle cx="60" cy="60" r="54" fill="#E2A54B" />
      <circle cx="60" cy="60" r="44" fill="#C7361E" />
      <circle cx="60" cy="60" r="40" fill="#F6D27A" />
      <circle cx="45" cy="45" r="7" fill="#B3221B" />
      <circle cx="75" cy="52" r="7" fill="#B3221B" />
      <circle cx="56" cy="76" r="7" fill="#B3221B" />
      <circle cx="64" cy="36" r="3" fill="#2F6B2A" />
      <circle cx="80" cy="74" r="3" fill="#2F6B2A" />
      <circle cx="40" cy="66" r="3" fill="#2F6B2A" />
    </svg>
  );
}

// Larger pizza illustration for the signature section.
export function SignaturePizza({ size = 360 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" role="img" aria-label="Illustration of a vegetarian pizza" style={{ maxWidth: '100%', height: 'auto' }}>
      <circle cx="100" cy="100" r="96" fill="#7E140F" />
      <circle cx="100" cy="100" r="86" fill="#E2A54B" />
      <circle cx="100" cy="100" r="74" fill="#E8792B" />
      <circle cx="100" cy="100" r="70" fill="#F6D27A" />
      <rect x="70" y="62" width="16" height="12" rx="3" fill="#C2571E" transform="rotate(-18 78 68)" />
      <rect x="112" y="70" width="16" height="12" rx="3" fill="#C2571E" transform="rotate(22 120 76)" />
      <rect x="86" y="112" width="16" height="12" rx="3" fill="#C2571E" transform="rotate(8 94 118)" />
      <rect x="124" y="114" width="14" height="11" rx="3" fill="#C2571E" transform="rotate(-30 131 120)" />
      <rect x="58" y="100" width="14" height="11" rx="3" fill="#C2571E" transform="rotate(35 65 105)" />
      <path d="M92 90c4-3 8-3 12 0M60 80c4-3 8-3 12 0M118 138c4-3 8-3 12 0" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="104" cy="66" r="3.5" fill="#2F6B2A" />
      <circle cx="80" cy="132" r="3.5" fill="#2F6B2A" />
      <circle cx="140" cy="96" r="3.5" fill="#2F6B2A" />
      <circle cx="108" cy="100" r="3.5" fill="#2F6B2A" />
      <circle cx="70" cy="90" r="3" fill="#2F6B2A" />
    </svg>
  );
}
