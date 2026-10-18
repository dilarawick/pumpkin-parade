"use client";

import { useState } from "react";

export default function SpellMaker() {
  const [name, setName] = useState("Moonlight");
  const [power, setPower] = useState("Turn candy into fireworks");

  const spell = `${name || "Nameless"} Charm\nEffect: ${power}.\nChant it 3x under the pumpkin moon while spinning with a broom. Side effects: giggles, glowing socks, sudden bat friendships.`;

  return (
    <div className="spell-box">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Potion name..." maxLength={40} />
      <select value={power} onChange={(e) => setPower(e.target.value)}>
        <option>Turn candy into fireworks</option>
        <option>Summon friendly ghosts</option>
        <option>Make pumpkins sing opera</option>
        <option>Freeze time for trick-or-treat</option>
        <option>Talk to black cats</option>
      </select>
      <div className="spell-output">{spell}</div>
    </div>
  );
}
