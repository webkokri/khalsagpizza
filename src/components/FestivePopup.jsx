import React, { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import offerImg from '../assets/diwali-offer.jpg';

// The offer runs until the end of 10 Nov 2026 (local time); after that the popup stays away.
const OFFER_END = new Date(2026, 10, 11);
const COLORS = ['#FFC83D', '#FF7A1A', '#FF4D6D', '#7CF2C9', '#6FA8FF', '#C77DFF', '#FFFFFF'];

// Fireworks (atishbazi) drawn on a canvas behind the offer image.
function useFireworks(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    let w = 0;
    let h = 0;
    let raf = 0;
    let last = performance.now();
    let nextLaunch = 0;
    const rockets = [];
    const sparks = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const launch = () => {
      rockets.push({
        x: w * (0.1 + Math.random() * 0.8),
        y: h + 10,
        vx: (Math.random() - 0.5) * 60,
        vy: -(h * (0.75 + Math.random() * 0.35)),
        targetY: h * (0.12 + Math.random() * 0.4),
        color: COLORS[(Math.random() * COLORS.length) | 0],
      });
    };

    const burst = (x, y, color) => {
      const n = 70 + ((Math.random() * 50) | 0);
      const two = Math.random() < 0.4 ? COLORS[(Math.random() * COLORS.length) | 0] : color;
      const ring = Math.random() < 0.35;
      for (let i = 0; i < n; i += 1) {
        const a = (Math.PI * 2 * i) / n + Math.random() * 0.1;
        const sp = ring ? 190 : 60 + Math.random() * 200;
        sparks.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, decay: 0.45 + Math.random() * 0.45, color: i % 2 ? color : two });
      }
    };

    const frame = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      // fade the previous frame to leave short trails
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.22)';
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';

      nextLaunch -= dt;
      if (nextLaunch <= 0) {
        launch();
        if (Math.random() < 0.4) launch();
        nextLaunch = 0.35 + Math.random() * 0.6;
      }

      for (let i = rockets.length - 1; i >= 0; i -= 1) {
        const r = rockets[i];
        r.x += r.vx * dt;
        r.y += r.vy * dt;
        r.vy += 120 * dt;
        ctx.fillStyle = r.color;
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.4, 0, Math.PI * 2);
        ctx.fill();
        if (r.y <= r.targetY || r.vy >= 0) {
          burst(r.x, r.y, r.color);
          rockets.splice(i, 1);
        }
      }

      for (let i = sparks.length - 1; i >= 0; i -= 1) {
        const s = sparks[i];
        s.vx *= 0.985;
        s.vy = s.vy * 0.985 + 90 * dt;
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        s.life -= s.decay * dt;
        if (s.life <= 0) {
          sparks.splice(i, 1);
        } else {
          ctx.globalAlpha = Math.min(1, s.life * 1.4);
          ctx.fillStyle = s.color;
          ctx.beginPath();
          ctx.arc(s.x, s.y, 2 + s.life * 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    };

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [canvasRef]);
}

export default function FestivePopup() {
  const [open, setOpen] = useState(() => new Date() < OFFER_END);
  const canvasRef = useRef(null);
  const closeRef = useRef(null);

  useFireworks(canvasRef);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="festive" role="dialog" aria-modal="true" aria-label="Diwali and Bandi Chhor Divas festive special" onClick={() => setOpen(false)}>
      <canvas ref={canvasRef} className="festive__fx" aria-hidden="true" />
      <div className="festive__card">
        <button ref={closeRef} type="button" className="festive__close" aria-label="Close offer" onClick={() => setOpen(false)}>
          <Icon name="close" size={22} strokeWidth={2.6} />
        </button>
        <img
          className="festive__img"
          src={offerImg}
          alt="Diwali and Bandi Chhor Divas festive special, October 23 to November 10, 2026. Unlimited toppings: medium pizza $15.99, large $19.99, extra large $24.99."
        />
        <span className="festive__hint">Tap anywhere to close</span>
      </div>
    </div>
  );
}
