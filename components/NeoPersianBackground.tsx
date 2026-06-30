import React from "react";

export default function NeoPersianBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="neo-persian-circuit"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <g
              stroke="var(--color-primary-neon)"
              strokeWidth="1"
              fill="none"
              opacity="0.04"
            >
              {/* Geometric Base (Girih Star Structure) */}
              <path d="M 50 0 L 100 50 L 50 100 L 0 50 Z" />
              <path d="M 25 25 L 75 25 L 75 75 L 25 75 Z" />

              {/* Circuit Board Connectors (Crosses & Diagonals) */}
              <line x1="50" y1="0" x2="50" y2="100" />
              <line x1="0" y1="50" x2="100" y2="50" />
              <line x1="0" y1="0" x2="100" y2="100" />
              <line x1="0" y1="100" x2="100" y2="0" />

              {/* Data Nodes (Intersecting points) */}
              <circle
                cx="50"
                cy="50"
                r="2.5"
                fill="var(--color-primary-neon)"
              />
              <circle
                cx="25"
                cy="25"
                r="1.5"
                fill="var(--color-primary-neon)"
              />
              <circle
                cx="75"
                cy="25"
                r="1.5"
                fill="var(--color-primary-neon)"
              />
              <circle
                cx="25"
                cy="75"
                r="1.5"
                fill="var(--color-primary-neon)"
              />
              <circle
                cx="75"
                cy="75"
                r="1.5"
                fill="var(--color-primary-neon)"
              />
              <circle cx="50" cy="0" r="1.5" fill="var(--color-primary-neon)" />
              <circle
                cx="100"
                cy="50"
                r="1.5"
                fill="var(--color-primary-neon)"
              />
              <circle
                cx="50"
                cy="100"
                r="1.5"
                fill="var(--color-primary-neon)"
              />
              <circle cx="0" cy="50" r="1.5" fill="var(--color-primary-neon)" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neo-persian-circuit)" />
      </svg>
    </div>
  );
}
