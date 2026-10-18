"use client";

function Svg({ size = 24, children, label }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" role="img" aria-label={label || "icon"} style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}>
      {children}
    </svg>
  );
}

export default function Icon({ name = "spark", size = 24 }) {
  switch (name) {
    case "pumpkin":
      return (
        <Svg size={size} label="pumpkin">
          <ellipse cx="12" cy="14" rx="8.5" ry="6.5" fill="#ff7518" />
          <ellipse cx="8.5" cy="14" rx="3" ry="5.2" fill="#e05e00" opacity="0.7" />
          <rect x="11" y="4.5" width="2.4" height="4" rx="1" fill="#2f9e44" />
          <path d="M8 12.5l1.6 2.6 1.6-2.6zM12.8 12.5l1.6 2.6 1.6-2.6z" fill="#2b0a00" />
        </Svg>
      );
    case "ghost":
      return (
        <Svg size={size} label="ghost">
          <path d="M12 2.5c-4 0-6.5 3-6.5 7v9.2c0 .9 1.1 1.3 1.7.6l1.5-1.7 1.7 1.9c.5.5 1.3.5 1.8 0l1.8-2 1.8 2c.5.5 1.3.5 1.8 0l1.7-1.9 1.5 1.7c.6.7 1.7.3 1.7-.6V9.5c0-4-2.5-7-6.5-7z" fill="#f4f0ff" />
          <circle cx="9.7" cy="10" r="1.3" fill="#1a1030" />
          <circle cx="14.3" cy="10" r="1.3" fill="#1a1030" />
        </Svg>
      );
    case "bat":
      return (
        <Svg size={size} label="bat">
          <path d="M12 8c-1.2-1.8-3-2.6-5-2.4.4 1.6 1.4 2.8 2.8 3.4-2.3-.3-4.3.4-5.8 2 2 .3 3.4 1.2 4.2 2.7.5 1 1.2 2.3 3.8 2.3s3.3-1.3 3.8-2.3c.8-1.5 2.2-2.4 4.2-2.7-1.5-1.6-3.5-2.3-5.8-2 1.4-.6 2.4-1.8 2.8-3.4-2-.2-3.8.6-5 2.4z" fill="#2a1845" />
          <circle cx="10.6" cy="9.4" r="0.7" fill="#ff073a" />
          <circle cx="13.4" cy="9.4" r="0.7" fill="#ff073a" />
        </Svg>
      );
    case "candy":
      return (
        <Svg size={size} label="candy">
          <path d="M2 9l4 3-4 3v-6zM22 9l-4 3 4 3v-6z" fill="#ff7518" />
          <rect x="6" y="8" width="12" height="8" rx="4" fill="#ffa733" />
        </Svg>
      );
    case "moon":
      return (
        <Svg size={size} label="moon">
          <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z" fill="#ffe9a8" />
        </Svg>
      );
    case "star":
      return (
        <Svg size={size} label="star">
          <path d="M12 2l2.6 6.2 6.7.5-5.1 4.4 1.6 6.5L12 16l-5.8 3.6 1.6-6.5L2.7 8.7l6.7-.5z" fill="#ffd166" />
        </Svg>
      );
    case "skull":
      return (
        <Svg size={size} label="skull">
          <path d="M12 2.5c-4.4 0-7.5 3-7.5 7 0 2.4 1.2 4.1 3 5.2v2.1c0 .8.7 1.5 1.5 1.5h6c.8 0 1.5-.7 1.5-1.5v-2.1c1.8-1.1 3-2.8 3-5.2 0-4-3.1-7-7.5-7z" fill="#efe9dc" />
          <circle cx="9.2" cy="10.5" r="1.8" fill="#1a1030" />
          <circle cx="14.8" cy="10.5" r="1.8" fill="#1a1030" />
        </Svg>
      );
    case "spider":
      return (
        <Svg size={size} label="spider">
          <path d="M4 8l3.5 1.5M4 16l3.5-1.5M3 12h4.5M20 8l-3.5 1.5M20 16l-3.5-1.5M21 12h-4.5" stroke="#8b5cf6" strokeWidth="1.4" strokeLinecap="round" />
          <ellipse cx="12" cy="12" rx="3.4" ry="4.2" fill="#1a1030" />
          <circle cx="10.8" cy="10.5" r="0.7" fill="#ff073a" />
          <circle cx="13.2" cy="10.5" r="0.7" fill="#ff073a" />
        </Svg>
      );
    case "witch":
      return (
        <Svg size={size} label="witch hat">
          <path d="M13.5 2L8 13.5h9L13.5 2z" fill="#4c1d95" />
          <ellipse cx="12" cy="16.5" rx="9" ry="2.4" fill="#2a1845" />
          <rect x="8.6" y="12.6" width="6.8" height="1.8" fill="#ffa733" />
        </Svg>
      );
    case "cat":
      return (
        <Svg size={size} label="black cat">
          <path d="M5 9L3.5 3.5 9 6zM19 9l1.5-5.5L15 6z" fill="#1a1030" />
          <circle cx="12" cy="13" r="7" fill="#1a1030" />
          <circle cx="9.3" cy="12" r="1.2" fill="#9dff00" />
          <circle cx="14.7" cy="12" r="1.2" fill="#9dff00" />
        </Svg>
      );
    case "door":
      return (
        <Svg size={size} label="door">
          <rect x="6" y="2.5" width="12" height="19" rx="1.5" fill="#5b3a1e" />
          <rect x="8" y="4.5" width="8" height="15" rx="1" fill="#7a4f26" />
          <circle cx="15" cy="12.5" r="1.1" fill="#ffd166" />
        </Svg>
      );
    case "house":
      return (
        <Svg size={size} label="haunted house">
          <path d="M12 2L2.5 10h2.5v10h5v-6h4v6h5V10H21.5z" fill="#2a1845" />
          <rect x="10.8" y="6" width="2.4" height="3.4" fill="#ffa733" />
        </Svg>
      );
    case "flask":
      return (
        <Svg size={size} label="potion flask">
          <path d="M10 2.5h4M11 2.5v5L5.5 18a1.5 1.5 0 0 0 1.3 2.2h10.4A1.5 1.5 0 0 0 18.5 18L13 7.5v-5" stroke="#f4f0ff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8 14.5h8l1.6 3.2a1 1 0 0 1-.9 1.5H7.3a1 1 0 0 1-.9-1.5z" fill="#39ff14" opacity="0.85" />
        </Svg>
      );
    case "lantern":
      return (
        <Svg size={size} label="lantern">
          <rect x="9" y="2.5" width="6" height="2" rx="1" fill="#5b3a1e" />
          <path d="M7 6.5h10l-1.2 13a1.5 1.5 0 0 1-1.5 1.4H9.7A1.5 1.5 0 0 1 8.2 19.5z" fill="#2a1845" />
          <ellipse cx="12" cy="13.5" rx="2.6" ry="4" fill="#ffa733" />
        </Svg>
      );
    case "spark":
    default:
      return (
        <Svg size={size} label="spark">
          <path d="M12 2c.8 5.5 4.5 9.2 10 10-5.5.8-9.2 4.5-10 10-.8-5.5-4.5-9.2-10-10 5.5-.8 9.2-4.5 10-10z" fill="#ffa733" />
        </Svg>
      );
  }
}
