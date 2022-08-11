import React, { useState, useEffect } from "react";
import heroDeck from "../decks/heroDeck";
import enemyDeck from "../decks/enemyDeck";
import playerDeck from "../decks/playerDeck";
import ActionCard from "../components/actionCard";
import HeroCard from "../components/heroCard";
import ChooseHeroModal from "../components/chooseHeroModal";
import EnemyCard from "../components/enemyCard";

const Battleground = () => {
  // TODO: I don't like this gamePhase stuff. Use bools instead?
  const [cardsPlayed, setCardsPlayed] = useState(0);
  const [hero, setHero] = useState();
  const [enemy, setEnemy] = useState();
  const [firstCard, setFirstCard] = useState({ id: 1 });
  const [secondCard, setSecondCard] = useState({ id: 2 });
  const [actionCards, setActionCards] = useState([firstCard, secondCard]);
  const [deck, setDeck] = useState([...playerDeck]);

  const randomIndex: number = (array: []) => {
    Math.floor(Math.random() * enemyDeck.length);
  };

  const revealEnemy = () => {
    if (!enemy) {
      setEnemy(enemyDeck[randomIndex(enemyDeck)]);
    }
  };

  const chooseHero = (i) => {
    setHero(heroDeck[i]);
  };

  const playCard = (card: any) => {
    console.log("playCard():", card);
    if (cardsPlayed >= 2) {
      alert("You already played 2 cards this round!");
    } else {
      // TODO: autoPlay cards must show!
      const cardEffectsApplied = (character) => {
        return {
          ...character,
          hp: card.stats.hp + character.hp,
          str: card.stats.str + character.str,
          spd: card.stats.spd + character.spd,
        };
      };

      if (card.stats.type === 0) {
        setHero({ ...hero, wpn: card.stats.name, dmg: card.stats.dmg });
      } else if (card.stats.type === 1) {
        setHero(cardEffectsApplied(hero));
      } else if (
        card.stats.type === 2 ||
        (card.stats.type === 3 && enemy.type === "minion")
      ) {
        setEnemy(cardEffectsApplied(enemy));
      } else if (card.stats.type === 4) {
        setHero(cardEffectsApplied(hero));
        setEnemy(cardEffectsApplied(enemy));
      }
      if (card.id === 1) {
        setFirstCard({ id: 1 });
      }
      if (card.id === 2) {
        setSecondCard({ id: 2 });
      }
      setCardsPlayed(cardsPlayed + 1);
    }
  };

  const drawCard = () => {
    const rando = randomIndex(deck);
    const drawn = deck[rando];
    const deckAfterDraw = deck
      .slice(0, rando)
      .concat(deck.slice(rando + 1, deck.length));
    if (!enemy) {
      alert("You must reveal your enemy first!");
    } else {
      const availableSlot = actionCards.find((card) => !card.stats);
      if (availableSlot) {
        availableSlot.id === 1
          ? setFirstCard({ ...firstCard, stats: drawn })
          : setSecondCard({ ...secondCard, stats: drawn });
        setDeck(deckAfterDraw);
      } else {
        alert("You can't draw any more cards!");
      }
    }
  };

  // Handle autoPlay cards (ie. explosions)
  useEffect(() => {
    console.log("useEffect...");
    setActionCards([firstCard, secondCard]);
    if (firstCard.stats?.autoPlay) {
      playCard(firstCard);
    } else if (secondCard.stats?.autoPlay) {
      playCard(secondCard);
    }
  }, [firstCard, secondCard]);

  return (
    <main id="battle">
      <section id="enemy-section">
        <div id="kill-count" className="card">
          <h3>Kill Count: </h3>
          <p>{"TODO: Create & Call killCount function"}</p>
        </div>
        <EnemyCard enemy={enemy} onClick={revealEnemy} />
        <div id="kill-list" className="card">
          <h3>Kill List</h3>
          <p id="emptyID">cards played: {cardsPlayed}</p>
        </div>
      </section>

      <section id="player-section">
        {!hero && (
          <ChooseHeroModal heroDeck={heroDeck} chooseHero={chooseHero} />
        )}
        <HeroCard hero={hero} />
        <ActionCard card={firstCard} onClick={() => playCard(firstCard)} />
        <ActionCard card={secondCard} onClick={() => playCard(secondCard)} />
        <div id="action-deck" className="card" onClick={() => drawCard()}>
          <p>Action Card Deck</p>
        </div>
      </section>
    </main>
  );
};

export default Battleground;
