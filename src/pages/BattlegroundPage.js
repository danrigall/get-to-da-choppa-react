import React, { useState } from "react";
import heroDeck from "../decks/heroDeck";
import enemyDeck from "../decks/enemyDeck";
import playerDeck from "../decks/playerDeck";

const Battleground = () => {

  const [gamePhase, setGamePhase] = useState(0);
  const [cardsPlayed, setCardsPlayed] = useState(0);
  const [hero, setHero] = useState({});
  const [enemy, setEnemy] = useState({});
  const [cards, setCards] = useState([0, 1]);
  const [deck, setDeck] = useState([...playerDeck]);

  const selectedCard = (deck, i) => {
    return {
      name: deck[i].name,
      img: deck[i].img,
      hp: deck[i].hp,
      str: deck[i].str,
      spd: deck[i].spd,
    }
  }
  const revealEnemy = () => {
    if (gamePhase < 2) {
      let rando = Math.floor(Math.random() * enemyDeck.length);
      setEnemy(selectedCard(enemyDeck, rando));
      setGamePhase(2);
    }
  };

  const chooseHero = (i) => {
    setHero(selectedCard(heroDeck, i));
    setGamePhase(1);
  };

  const playCard = (card) => {
    if (cardsPlayed >= 2 && card.gamePhase !== 0) {
      alert("You already played 2 cards this round!");
    } else {
      // TODO: Sort out what happens for auto-play cards
      const cardEffectsApplied = (character) => {
        return {
          ...character,
          hp: card.hp + character.hp,
          str: card.str + character.str,
          spd: card.spd + character.spd,
        }
      }

      if (card.type === 0) {
        setHero({ ...hero, wpn: card.name, dmg: card.dmg });
      } else if (card.type === 1) {
        setHero(cardEffectsApplied(hero))
      } else if (card.type === 2 || (card.type === 3 && enemy.type === "minion")) {
        setEnemy(cardEffectsApplied(enemy))
      } else if (card.type === 4) {
        setHero(cardEffectsApplied(hero))
        setEnemy(cardEffectsApplied(enemy))
      }
      const index = cards.indexOf(card);
      if (index === 0) {
        setCards([0, cards[1]]);
      } else if (index === 1) {
        setCards([cards[0], 1]);
      }
      setCardsPlayed(cardsPlayed + 1);
    }
  };

  const drawCard = () => {
    const rando = Math.floor(Math.random() * deck.length);
    const drawn = deck[rando];
    const deckAfterDraw = deck
      .slice(0, rando)
      .concat(deck.slice(rando + 1, deck.length));

    if (gamePhase < 2) {
      alert("You must reveal your enemy first!");
    } else {
      if (drawn.gamePhase !== 0) {
        if (cards[0] === 0) {
          setCards([drawn, cards[1]]);
          setDeck(deckAfterDraw);
        } else if (cards[1] === 1) {
          setCards([cards[0], drawn]);
          setDeck(deckAfterDraw);
        } else {
          alert("You can't draw any more cards!");
        }
      } else {
        playCard(drawn);
      }
    }
  };

  return (
    <main id="battle">
      {/* <EnemySection enemy={enemy} onClick={() => (playphase < 2) && revealEnemy()} gamePhase={playphase}/> */}
      {/* <PlayerSection hero={hero} onClick={(playphase < 1) ? (i) => chooseHero(i) : () => handleDraw()} gamePhase={playphase}/> */}
      <section id="enemy-section">
        <div id="kill-count" className="card">
          <h3>Kill Count: </h3>
          <p>{"TODO: Create & Call killCount function"}</p>
        </div>

        <div
          id="enemy-card"
          className={gamePhase < 2 ? "card empty-card" : "card"}
          onClick={() => revealEnemy()}
        >
          {gamePhase < 2 ? (
            <div>Reveal Enemy</div>
          ) : (
            <div id="enemy-stats">
              <img src={enemy.img} alt={enemy.name} />
              <h3>{enemy.name}</h3>
              <p>Health: {enemy.hp}</p>
              <p>Strength: {enemy.str}</p>
              <p>Speed: {enemy.spd}</p>
            </div>
          )}
        </div>

        <div id="kill-list" className="card">
          <h3>Kill List</h3>
          <p id="emptyID">{cardsPlayed}</p>
        </div>
      </section>

      <section id="player-section">
        {gamePhase < 1 && (
          <div id="choose-hero">
            <h1>Choose Your Hero!</h1>
            <div id="battle-heroes">
              {heroDeck.map((h) => (
                <div
                  className="hero-wrapper"
                  onClick={() => chooseHero(h.key)}
                  key={h.key}
                >
                  <h2>{h.name}</h2>
                  <img src={h.img} alt={h.name} />
                  <p>{h.desc}</p>
                </div>
              ))}
            </div>
            <div className="modal-bgd"></div>
          </div>
        )}
        <div id="hero-card" className="card">
          <h3>{hero.name}</h3>
          <img src={hero.img} alt={hero.name} />
          <p>Health: {hero.hp}</p>
          <p>Strength: {hero.str}</p>
          <p>Speed: {hero.spd}</p>
          <p id="weapon">Weapon: {hero.wpn}</p>
        </div>
        {cards.map((c) => (
          <div
            className={typeof c == "number" ? "card empty-card" : "card"}
            key={cards.indexOf(c)}
          >
            {typeof c == "number" ? (
              <p>{"Action Card " + (c + 1).toString()}</p>
            ) : (
              <div
                className="action-card-stats"
                onClick={() => playCard(c)}
              >
                <img src={c.img} alt={c.name} />
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
              </div>
            )}
          </div>
        ))}
        <div id="action-deck" className="card" onClick={() => drawCard()}>
          <p>Action Card Deck</p>
        </div>
      </section>
    </main>
  );
};

export default Battleground;
