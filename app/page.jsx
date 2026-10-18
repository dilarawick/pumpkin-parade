"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import NightSky from "../components/NightSky";
import EmberCanvas from "../components/EmberCanvas";
import Countdown from "../components/Countdown";
import TrickOrTreat from "../components/TrickOrTreat";
import CostumeGenerator from "../components/CostumeGenerator";
import SpellMaker from "../components/SpellMaker";
import Icon from "../components/icons";
import { HAUNTS, STORIES } from "../lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

function boom(big = false) {
  confetti({
    particleCount: big ? 220 : 90,
    spread: big ? 100 : 70,
    origin: { y: 0.6 },
    colors: ["#ff7518", "#ffa733", "#9dff00", "#8b5cf6", "#ffffff", "#ff073a"],
  });
}

export default function Home() {
  const [treats, setTreats] = useState(0);
  const [lastTreat, setLastTreat] = useState("Knock a door to begin...");

  return (
    <>
      <NightSky />
      <EmberCanvas />

      <div className="wrap">
        <nav className="nav">
          <div className="brand">
            <span className="brand-mark"><Icon name="pumpkin" size={22} /></span>
            <span>PUMPKIN PARADE</span>
          </div>
          <div className="nav-links">
            <a href="#haunts">Haunts</a>
            <a href="#treat">Trick or Treat</a>
            <a href="#costumes">Costumes</a>
            <a href="#spells">Spells</a>
            <a href="#stories">Stories</a>
          </div>
          <a className="cta" href="#treat" onClick={() => boom()}>
            Join Parade
          </a>
        </nav>

        <header className="hero">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <span className="kicker">Immersive Halloween Experience</span>
            <h1 className="title">
              Step into
              <span className="spooky">the Pumpkin Parade</span>
            </h1>
            <p className="subtitle">
              A glowing haunted world of whispering manors, candy trails, witch brew bars and
              giggling graves. Knock on doors, forge spells, pick a costume, and count down to
              the spookiest night of the year.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => boom(true)}>
                Burst Candy Magic
              </button>
              <a className="btn btn-ghost" href="#haunts" style={{ textDecoration: "none" }}>
                Explore Haunts
              </a>
            </div>
            <div className="stats">
              <div className="stat"><b>6</b><span>Haunted zones</span></div>
              <div className="stat"><b>12</b><span>Magic doors</span></div>
              <div className="stat"><b>31</b><span>Nights of October</span></div>
            </div>
            <Countdown />
          </motion.div>

          <motion.div
            className="stage"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="candle-glow" />
            <div className="bats">
              <span className="bat" style={{ top: "18px", left: "8%" }}><Icon name="bat" size={26} /></span>
              <span className="bat" style={{ top: "52px", left: "4%", animationDelay: "-3s" }}><Icon name="bat" size={22} /></span>
              <span className="bat" style={{ top: "34px", left: "12%", animationDelay: "-6s" }}><Icon name="bat" size={24} /></span>
            </div>
            <div className="pumpkin-big"><Icon name="pumpkin" size={150} /></div>
            <div className="pumpkin-row"><span><Icon name="lantern" size={44} /></span><span><Icon name="ghost" size={44} /></span><span><Icon name="candy" size={44} /></span></div>
            <div className="hill" />
          </motion.div>
        </header>

        <div className="marquee">
          <div className="marquee-inner">
            {"TRICK OR TREAT • SPOOKY SEASON • PUMPKIN PARADE • CANDY MAGIC • HAUNTED VIBES • ".repeat(4)}
          </div>
        </div>
        <section id="haunts" className="section">
          <div className="section-head">
            <div>
              <span className="tag">Haunted Zones</span>
              <h2>Pick your haunt</h2>
              <p>Six immersive pockets of Halloween magic — each with its own lights, lore and little surprises.</p>
            </div>
          </div>
          <div className="grid grid-3">
            {HAUNTS.map((h, i) => (
              <motion.div key={h.title} className="card" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}>
                <span className="tag">{h.tag}</span>
                <div className="icon"><Icon name={h.icon} size={30} /></div>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="treat" className="section">
          <div className="section-head">
            <div>
              <span className="tag">Interactive Game</span>
              <h2>Trick or Treat — knock a door</h2>
              <p>Every door hides a treat or a trick. Open them all to fill your candy meter. Score: {treats}/12 — {lastTreat}</p>
            </div>
            <button className="btn btn-primary" onClick={() => { setTreats(0); setLastTreat("Doors reset... spooky again!"); }}>Reset</button>
          </div>
          <div className="card">
            <TrickOrTreat onTreat={(d) => { setTreats((t) => Math.min(12, t + 1)); setLastTreat(`You got ${d.label}!`); boom(); }} />
          </div>
        </section>

        <section id="costumes" className="section">
          <div className="section-head">
            <div>
              <span className="tag">Costume Lab</span>
              <h2>Find your Halloween look</h2>
              <p>Pick a vibe and get instant costume ideas — scary, funny, cute, retro, witchy or cosmic.</p>
            </div>
          </div>
          <div className="card"><CostumeGenerator /></div>
        </section>

        <section id="spells" className="section">
          <div className="grid grid-2">
            <div>
              <span className="tag">Spell Forge</span>
              <h2 style={{ margin: "10px 0 8px", fontSize: "clamp(26px,4vw,40px)" }}>Brew your own spell</h2>
              <p style={{ color: "var(--mist)", lineHeight: 1.6 }}>Name your potion, choose its power, and let the parade spirits write the chant for you.</p>
              <div style={{ marginTop: 14 }}><SpellMaker /></div>
            </div>
            <div className="card">
              <span className="tag">Seance Tips</span>
              <div className="icon"><Icon name="pumpkin" size={30} /></div>
              <h3>How to get the full vibe</h3>
              <p>• Turn lights low + volume up for creaks and cackles.<br />• Try the candy burst button for confetti fireworks.<br />• Share this page at your Halloween party on a big screen — instant haunted wall.<br />• Best viewed at midnight with hot cocoa (or witch brew).</p>
              <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button className="btn btn-primary" onClick={() => boom(true)}>Summon Candy Storm</button>
                <button className="btn" onClick={() => boom()}>Little Spark</button>
              </div>
            </div>
          </div>
        </section>

        <section id="stories" className="section">
          <div className="section-head">
            <div>
              <span className="tag">Spooky Stories</span>
              <h2>Tales from the parade</h2>
              <p>Short, sweet and slightly spooky bedtime tales from pumpkins, ghosts and night wanderers.</p>
            </div>
          </div>
          <div className="poster-grid">
            {STORIES.map((s) => (
              <div key={s.title} className="poster">
                <div className="poster-art" style={{ background: s.bg }}><Icon name={s.art} size={72} /></div>
                <div className="poster-body"><b>{s.title}</b><span>{s.text}</span></div>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <p><b>Pumpkin Parade</b><br />Built for spooky season. Deploy-ready for Vercel.<br />Made with pumpkins, moonlight and a little magic.</p>
          <p style={{ textAlign: "right" }}>Happy Halloween<br />#pumpkin-parade • 2026</p>
        </footer>
      </div>

      <button className="float-btn" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); boom(); }} aria-label="Back to top"><Icon name="pumpkin" size={26} /></button>
    </>
  );
}

