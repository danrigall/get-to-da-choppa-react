import React, { useState } from "react";
import heroDeck from "../decks/heroDeck";
import enemyDeck from "../decks/enemyDeck";
import playerDeck from "../decks/playerDeck";
import ActionCard from "../components/actionCard";
import HeroCard from "../components/heroCard";
import ChooseHeroModal from "../components/chooseHeroModal"
import EnemyCard from "../components/enemyCard"

const Battleground = () => {
  // TODO: I don't like this gamePhase stuff. Use bools instead?
  const [gamePhase, setGamePhase] = useState(0);
  const [cardsPlayed, setCardsPlayed] = useState(0);
  const [hero, setHero] = useState({});
  const [enemy, setEnemy] = useState({});
  const [firstCard, setFirstCard] = useState({id: 1})
  const [secondCard, setSecondCard] = useState({id: 2})
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

  const playCard = (cardId: number) => {
    const card = [firstCard, secondCard].find(card => card.id === cardId)
    if (cardsPlayed >= 2 && card.stats.gamePhase !== 0) {
      alert("You already played 2 cards this round!");
    } else {
      // TODO: Sort out what happens for auto-play cards
      const cardEffectsApplied = (character) => {
        return {
          ...character,
          hp: card.stats.hp + character.hp,
          str: card.stats.str + character.str,
          spd: card.stats.spd + character.spd,
        }
      }

      if (card.stats.type === 0) {
        setHero({ ...hero, wpn: card.stats.name, dmg: card.stats.dmg });
      } else if (card.stats.type === 1) {
        setHero(cardEffectsApplied(hero))
      } else if (card.stats.type === 2 || (card.stats.type === 3 && enemy.type === "minion")) {
        setEnemy(cardEffectsApplied(enemy))
      } else if (card.stats.type === 4) {
        setHero(cardEffectsApplied(hero))
        setEnemy(cardEffectsApplied(enemy))
      }
      if (cardId === 1) {setFirstCard({id: 1})}
      if (cardId === 2) {setSecondCard({id: 2})}
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
      const availableSlot = [firstCard, secondCard].find(card => !card.stats)
      if (availableSlot) {
        availableSlot.id === 1
          ? setFirstCard({ ...firstCard, stats: drawn })
          : setSecondCard({ ...secondCard, stats: drawn });
        setDeck(deckAfterDraw);
      } else {
        alert("You can't draw any more cards!");
      }
      // Handle auto-played cards (ie. explosions)
      // TODO: Add an "autoPlay" bool to cards.
      // TODO: Even then, set card "down" first, then playCard()
      if (drawn.gamePhase !== 0) {
        return
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
        <EnemyCard enemy={enemy} onClick={revealEnemy}/>
        <div id="kill-list" className="card">
          <h3>Kill List</h3>
          <p id="emptyID">cards played: {cardsPlayed}</p>
        </div>
      </section>

      <section id="player-section">
        {gamePhase < 1 && (
          <ChooseHeroModal heroDeck={heroDeck} chooseHero={chooseHero}/>
        )}
        <HeroCard hero={hero}/>
        <ActionCard card={firstCard} onClick={() => playCard(1)}/>
        <ActionCard card={secondCard} onClick={() => playCard(2)}/>
        <div id="action-deck" className="card" onClick={() => drawCard()}>
          <p>Action Card Deck</p>
        </div>
      </section>
    </main>
  );
};

export default Battleground;
