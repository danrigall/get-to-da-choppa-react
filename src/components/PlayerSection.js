import React, {useState} from 'react';
import playerDeck from '../cards/cards';
import heroes from '../cards/heroes';

function PlayerSection(props) {
  
  const [deck, setDeck] = useState([...playerDeck]);
  const [card, setCard] = useState([1,2]);
  
  const drawCard = () => {
    const rando = Math.floor(Math.random() * deck.length);
    const drawn = deck.slice(rando, rando + 1);
    const take = deck.slice(0, rando).concat(deck.slice((rando+1), deck.length));
    
    if (card[0] === 1) {
      setCard([drawn, card[1]].flat());
      setDeck(take);
    } else if (card[1] === 2) {
      setCard([card[0], drawn].flat());
      setDeck(take);
    } else {
      alert('You can\'t draw any more cards!');
    }
    console.log(card)
  }
  
  const playCard = () => {
    if (this.props.cardsPlayed > 2) {
      alert('You already played 2 cards this round!');
    } else {
      alert('you got this')
    }
  }
  
  return (
    <section id='player-section'>
      {(props.phase < 1) &&
        <div id='choose-hero'>
          <h1>Choose Your Hero!</h1>
          <div id='battle-heroes'>
            {heroes.map(h =>
              <div
                className='hero-wrapper'
                onClick={() => props.onClick(h.key)}
                key={h.key}
              >
                <h2>{h.name}</h2>
                <img src={h.img} alt={h.name} />
                <p>{h.desc}</p>
              </div>
            )}
          </div>
          <div className='modal-bgd'></div>
        </div>
      }
      <div id='hero-card' className='card'>
        <h3>{props.hero.name}</h3>
        <img src={props.hero.img} alt={props.hero.name}/>
        <p>Health: {props.hero.hp}</p>
        <p>Strength: {props.hero.str}</p>
        <p>Speed: {props.hero.spd}</p>
        <p id='weapon'>Weapon: {props.hero.wpn}</p>
      </div>
      {card.map(c =>
        <div
          className={!c ? 'card empty-card' : 'card'}
          onClick={() => c && alert('you clicked a card!')}
          key={card.indexOf(c)}
          >
          {(typeof c == 'number')
          ? <p>{'Action Card ' + c.toString()}</p>
          : <div className='action-card-stats'>
              <img src={c.img} alt={c.name} />
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
            </div>
          }
        </div>
      )}
      <div id='action-deck' className='card' onClick={() => drawCard()}>
        <p>Action Card Deck</p>
      </div>
    </section>
  )
}

export default PlayerSection;
