"use client";

import { useState } from "react";
import Icon from "./icons";

const DOORS = [
  { icon: "candy", label: "Candy Corn" },
  { icon: "candy", label: "Chocolate" },
  { icon: "ghost", label: "Ghost Hug" },
  { icon: "spider", label: "Trick!" },
  { icon: "pumpkin", label: "Mini Pumpkin" },
  { icon: "bat", label: "Midnight Trick" },
  { icon: "candy", label: "Lollipop" },
  { icon: "witch", label: "Witch Trick" },
  { icon: "bat", label: "Bat Treat" },
  { icon: "skull", label: "Spooky Trick" },
  { icon: "candy", label: "Cookie" },
  { icon: "flask", label: "Potion Treat" },
];

export default function TrickOrTreat({ onTreat }) {
  const [opened, setOpened] = useState({});

  return (
    <div>
      <div className="treat-grid">
        {DOORS.map((d, i) => {
          const isOpen = opened[i];
          return (
            <button
              key={i}
              className="treat"
              onClick={() => {
                if (!isOpen) {
                  setOpened((s) => ({ ...s, [i]: true }));
                  onTreat?.(d);
                }
              }}
            >
              <span>
                <span style={{ display: "inline-block", height: 38 }}>
                  <Icon name={isOpen ? d.icon : "door"} size={38} />
                </span>
                <small>{isOpen ? d.label : `Door ${i + 1}`}</small>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
