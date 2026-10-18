"use client";

export default function NightSky() {
  const stars = Array.from({ length: 70 }).map((_, i) => ({
    left: `${(i * 37.7) % 100}%`,
    top: `${(i * 53.3) % 60}%`,
    delay: `${(i % 10) * 0.28}s`,
    size: 2 + (i % 3),
  }));

  return (
    <div className="sky" aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
          }}
        />
      ))}
      <div className="moon" />
      <div className="cloud" style={{ top: "12%", animationDuration: "70s" }} />
      <div className="cloud" style={{ top: "24%", animationDuration: "95s", animationDelay: "-30s", opacity: 0.6 }} />
      <div className="fog" />
    </div>
  );
}
