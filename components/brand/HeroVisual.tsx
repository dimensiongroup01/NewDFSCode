import { BadgeCheck, Landmark, LineChart } from 'lucide-react';
import type { CSSProperties } from 'react';

/**
 * Hero infographic — the Dimension "D" with its two support hands, a rising
 * Dimension Line of connected nodes, and three fact cards (all existing facts).
 * 2D SVG only; lines draw in on load via the `.draw-path` CSS animation.
 */

const growthNodes = [
  { x: 112, y: 388 },
  { x: 196, y: 330 },
  { x: 276, y: 300 },
  { x: 352, y: 228 },
  { x: 430, y: 150 }
];

const facts = [
  {
    icon: Landmark,
    title: 'Merchant Banker',
    detail: 'SEBI Registered',
    pos: 'left-0 top-[10%]',
    delay: '1.1s'
  },
  {
    icon: LineChart,
    title: 'BSE Trading Member',
    detail: 'Debt Segment & OBPP',
    pos: 'right-0 top-[44%]',
    delay: '1.3s'
  },
  {
    icon: BadgeCheck,
    title: 'Bondsadda',
    detail: 'Debt Platform · OBPPs at BSE',
    pos: 'bottom-[6%] left-[6%]',
    delay: '1.5s'
  }
];

const vars = (v: Record<string, string | number>) => v as CSSProperties;

export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      {/* Soft blue field */}
      <div aria-hidden className="absolute inset-[6%] rounded-full bg-gradient-to-br from-navy-50 via-white to-navy-50" />

      <svg
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="hv-growth" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#35A9E0" />
            <stop offset="100%" stopColor="#063B70" />
          </linearGradient>
          <linearGradient id="hv-bar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1687C9" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1687C9" stopOpacity="0.02" />
          </linearGradient>
          <pattern id="hv-dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.2" fill="#1687C9" fillOpacity="0.16" />
          </pattern>
        </defs>

        {/* Dot grid */}
        <rect x="40" y="40" width="440" height="440" rx="220" fill="url(#hv-dots)" />

        {/* Concentric D outlines */}
        <path
          d="M128 60h132a200 200 0 0 1 0 400H128z"
          stroke="#1687C9"
          strokeOpacity="0.14"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        <path
          className="draw-path"
          style={vars({ '--len': 1300, '--delay': '0.1s' })}
          d="M150 92h110a168 168 0 0 1 0 336H150z"
          stroke="#1687C9"
          strokeWidth="14"
          strokeLinejoin="round"
        />

        {/* Rising bars inside the D */}
        {[
          { x: 186, h: 70 },
          { x: 222, h: 104 },
          { x: 258, h: 92 },
          { x: 294, h: 140 },
          { x: 330, h: 176 }
        ].map((b, i) => (
          <rect
            key={b.x}
            className="fade-in-late"
            style={vars({ '--delay': `${0.6 + i * 0.08}s` })}
            x={b.x}
            y={404 - b.h}
            width="22"
            height={b.h}
            rx="4"
            fill="url(#hv-bar)"
          />
        ))}

        {/* Support hands */}
        <path
          className="draw-path"
          style={vars({ '--len': 360, '--delay': '0.5s' })}
          d="M372 168c-44 6-82 36-104 76-8 14-20 22-34 25"
          stroke="#063B70"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          className="draw-path"
          style={vars({ '--len': 360, '--delay': '0.7s' })}
          d="M176 352c44-6 82-36 104-76 8-14 20-22 34-25"
          stroke="#35A9E0"
          strokeWidth="18"
          strokeLinecap="round"
        />

        {/* Rising Dimension Line */}
        <polyline
          className="draw-path"
          style={vars({ '--len': 460, '--delay': '0.9s' })}
          points={growthNodes.map((n) => `${n.x},${n.y}`).join(' ')}
          stroke="url(#hv-growth)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {growthNodes.map((n, i) => (
          <g key={n.x} className="fade-in-late" style={vars({ '--delay': `${1.1 + i * 0.12}s` })}>
            <circle cx={n.x} cy={n.y} r="11" fill="#1687C9" fillOpacity="0.12" />
            <circle cx={n.x} cy={n.y} r="5.5" fill="#fff" stroke="#1687C9" strokeWidth="2.5" />
          </g>
        ))}
        {/* Arrow head on the last node */}
        <path
          className="fade-in-late"
          style={vars({ '--delay': '1.8s' })}
          d="M448 132l-6 26-20-18z"
          fill="#063B70"
        />
      </svg>

      {/* Fact cards — HTML so text stays crisp; hidden on the smallest screens */}
      {facts.map(({ icon: Icon, title, detail, pos, delay }) => (
        <div
          key={title}
          className={`fade-in-late absolute hidden items-center gap-3 rounded-xl border border-line bg-white/95 py-2.5 pl-2.5 pr-4 shadow-lift backdrop-blur sm:flex ${pos}`}
          style={vars({ '--delay': delay })}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 text-accent">
            <Icon aria-hidden size={18} strokeWidth={1.75} />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[0.82rem] font-bold text-navy">{title}</span>
            <span className="block text-[0.72rem] font-medium text-muted">{detail}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
