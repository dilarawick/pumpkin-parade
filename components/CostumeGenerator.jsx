"use client";

import { useMemo, useState } from "react";
import Icon from "./icons";

const VIBES = ["Scary", "Funny", "Cute", "Retro", "Witchy", "Cosmic"];
const IDEAS = {
  Scary: [
    ["skull", "Zombie Barista", "Torn apron + coffee stains + green face paint"],
    ["bat", "Swamp Demon", "Dark cloak + red contacts + moss"],
    ["skull", "Skeleton King", "Black suit + skull mask + crown"],
  ],
  Funny: [
    ["ghost", "Taco Ghost", "White sheet + taco costume mashup"],
    ["ghost", "Mummy Fail", "Wrapped bandages + sunglasses"],
    ["pumpkin", "Pizza Slice", "Yellow triangle + pepperoni pillows"],
  ],
  Cute: [
    ["pumpkin", "Baby Pumpkin", "Orange onesie + green stem hat"],
    ["ghost", "Friendly Ghost", "White dress + pastel face stickers"],
    ["cat", "Pumpkin Fox", "Orange ears + fluffy tail"],
  ],
  Retro: [
    ["bat", "80s Vampire", "Leather jacket + slick hair + fangs"],
    ["ghost", "Arcade Ghost", "Pixel cape + neon makeup"],
    ["star", "Haunted Disco", "Sequins + cobweb bowtie"],
  ],
  Witchy: [
    ["witch", "Moon Witch", "Purple cloak + crescent staff"],
    ["cat", "Cat Familiar", "Black catsuit + whiskers"],
    ["moon", "Fortune Teller", "Velvet shawl + crystal ball"],
  ],
  Cosmic: [
    ["star", "Alien Pumpkin", "Silver suit + orange helmet"],
    ["moon", "Star Witch", "Galaxy dress + glowing staff"],
    ["spark", "Comet Rider", "Holographic cape + boots"],
  ],
};

export default function CostumeGenerator() {
  const [vibe, setVibe] = useState("Scary");
  const ideas = useMemo(() => IDEAS[vibe], [vibe]);

  return (
    <div>
      <div className="costume-pick">
        {VIBES.map((v) => (
          <button key={v} onClick={() => setVibe(v)} className={v === vibe ? "chip active" : "chip"}>
            {v}
          </button>
        ))}
      </div>
      <div className="grid grid-3">
        {ideas.map(([icon, name, desc]) => (
          <div key={name} className="card">
            <div className="icon"><Icon name={icon} size={30} /></div>
            <h3>{name}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
