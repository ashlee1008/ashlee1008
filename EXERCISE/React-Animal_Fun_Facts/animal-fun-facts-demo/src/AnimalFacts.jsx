import React, { useState } from "react";

import ocean from "./image/ocean.jpg";
import dolphin from "./image/dolphin.jpg";
import lobster from "./image/lobster.jpg";
import starfish from "./image/starfish.jpg";

export default function AnimalFacts() {
  const animals = {
    dolphin: {
      image: dolphin,
      facts: [
        "Dolphins have been shown to give distinct names to each other!",
        "Dolphins are known to display their own culture!",
        "Dolphins have two stomachs!",
      ],
    },
    lobster: {
      image: lobster,
      facts: [
        "Lobsters taste with their legs!",
        "Lobsters chew with their stomachs!",
        "Lobsters can live as long as 100 years.",
      ],
    },
    starfish: {
      image: starfish,
      facts: [
        "Starfish can have up to 40 arms!",
        "Starfish have no brain and no blood!",
        "Starfish can regenerate their own arms!",
      ],
    },
  };

  const animalsJSX = [];
  const [fact, setFact] = useState("");
  for (const animal in animals) {
    animalsJSX.push(
      <img
        key={animal}
        className="animal"
        alt={animal}
        src={animals[animal].image}
        aria-label={animal}
        role="button"
        
        onClick={(e) => {
          const facts = animals[e.target.alt].facts;
          const randomIndex = Math.floor(Math.random() * facts.length);
          
          setFact(facts[randomIndex]);
        }}
      />
    );
  }

  return (
    <div>
      <h1>Click an animal for a fun fact</h1>
      <img className="background" src={ocean} alt="ocean" />
      <div className="animals">{animalsJSX}</div>
      <p id="fact">{fact}</p>
    </div>
  );
}
