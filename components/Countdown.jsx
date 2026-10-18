"use client";

import { useEffect, useState } from "react";

function nextHalloween() {
  const now = new Date();
  const y = now.getUTCFullYear();
  let h = new Date(Date.UTC(y, 9, 31, 0, 0, 0));
  if (now > h) h = new Date(Date.UTC(y + 1, 9, 31, 0, 0, 0));
  return h;
}

export default function Countdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const update = () => {
      const diff = nextHalloween() - new Date();
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff / 3600000) % 24);
      const m = Math.floor((diff / 60000) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setT({ d, h, m, s });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const cells = [
    [t.d, "days"],
    [t.h, "hours"],
    [t.m, "mins"],
    [t.s, "secs"],
  ];

  return (
    <div className="countdown">
      {cells.map(([v, l]) => (
        <div key={l} className="count">
          <b>{String(v).padStart(2, "0")}</b>
          <span>{l}</span>
        </div>
      ))}
    </div>
  );
}
