import React from 'react';
import heroes from '../cards/heroes';
import enemies from '../cards/enemies';
import playerDeck from '../cards/cards';

const battleState = {
  gamephase: 0,
  cardsPlayed: 0,
  hero: {
    name: '',
    img: '',
    hp: null,
    str: null,
    spd: null,
    wpn: '',
  },
  enemy: {
    name: '',
    img: '',
    hp: null,
    str: null,
    spd: null,
  },
  card: [0,1],
  deck: [...playerDeck],
}

class Battleground extends React.Component {
  constructor(props) {
    super(props);
    this.state = battleState;
  }
  
  revealEnemy() {
    if (this.state.gamephase < 2) {
      let rando = Math.floor(Math.random() * enemies.length);
      this.setState({
        enemy: {
          name: enemies[rando].name,
          img: enemies[rando].img,
          hp: enemies[rando].hp,
          str: enemies[rando].str,
          spd: enemies[rando].spd,
        },
        gamephase: 2
      });
    }
  }

  chooseHero(i) {
    this.setState({
      hero: {
        name: heroes[i].name,
        img: heroes[i].img,
        hp: heroes[i].hp,
        str: heroes[i].str,
        spd: heroes[i].spd,
      },
      gamephase: 1,
    })
  }
  
  playCard(c) {
    if (this.state.cardsPlayed >= 2 && c.phase !== 0) {
      alert('You already played 2 cards this round!');
    } else {
      // TODO: Sort out what happens for auto-play cards
      const affectEnemy = () => {
        this.setState({
          enemy: {
            ...this.state.enemy,
            hp: c.hp + this.state.enemy.hp,
            str: c.str + this.state.enemy.str,
            spd: c.spd + this.state.enemy.spd,
          }
        });
      }
      const affectHero = () => {
        this.setState({
          hero: {
            ...this.state.hero,
            hp: c.hp + this.state.hero.hp,
            str: c.str + this.state.hero.str,
            spd: c.spd + this.state.hero.spd,
          }
        });
      }
      if (c.type === 0) {
        this.setState({
          hero: {...this.state.hero, wpn: c.name, dmg: c.dmg}
        });
      } else if (c.type === 1) {
        affectHero();
      } else if (c.type === 2) {
        affectEnemy();
      } else if (c.type === 3 && this.state.enemy.type === 'minion') {
        affectEnemy();
      } else if (c.type === 4) {
        affectHero();
        affectEnemy();
      }
      const index = this.state.card.indexOf(c);
      if (index === 0) {
        this.setState({
          card: [0, this.state.card[1]],
        });
      } else if (index === 1) {
        this.setState({
          card: [this.state.card[0], 1],
        });
      }
      this.setState({cardsPlayed: this.state.cardsPlayed + 1});
    }
  }
  
  drawCard() {
    const deck = this.state.deck;
    const card = this.state.card;
    const rando = Math.floor(Math.random() * deck.length);
    const drawn = deck[rando];
    const remove = deck.slice(0, rando).concat(deck.slice((rando + 1), deck.length));

    if (this.state.gamephase < 2) {
      alert('You must reveal your enemy first!');
    } else {
      if (drawn.phase !== 0) {
        if (card[0] === 0) {
          this.setState({
            card: [drawn, card[1]],
            deck: remove,
          });
        } else if (card[1] === 1) {
          this.setState({
            card: [card[0], drawn],
            deck: remove,
          });
        } else {
          alert('You can\'t draw any more cards!');
        }
      } else {
        this.playCard(drawn);
      }
    }
  }
  
  
  render(props) {
    const enemy = this.state.enemy;
    const hero = this.state.hero;
    const phase = this.state.gamephase;
    
    return (
      <main id="battle">
        {/* <EnemySection enemy={this.state.enemy} onClick={() => (this.state.playphase < 2) && this.revealEnemy()} phase={this.state.playphase}/> */}
        {/* <PlayerSection hero={this.state.hero} onClick={(this.state.playphase < 1) ? (i) => this.chooseHero(i) : () => this.handleDraw()} phase={this.state.playphase}/> */}
        <section id="enemy-section">
          <div id="kill-count" className="card">
            <h3>Kill Count: </h3>
            <p>{'TODO: Create & Call killCount function'}</p>
          </div>

          <div
            id='enemy-card'
            className={phase < 2 ? 'card empty-card' : 'card'}
            onClick={() => this.revealEnemy()}
          >
            {phase < 2 ?
              <div>Reveal Enemy</div> :
              <div id='enemy-stats'>
                <img src={enemy.img} alt={enemy.name} />
                <h3>{enemy.name}</h3>
                <p>Health: {enemy.hp}</p>
                <p>Strength: {enemy.str}</p>
                <p>Speed: {enemy.spd}</p>
              </div>
            }
          </div>
          
          <div id="kill-list" className="card">
            <h3>Kill List</h3>
            <p id="emptyID">{this.state.cardsPlayed}</p>
          </div>
        </section>
        
        <section id='player-section'>
          {(phase < 1) &&
            <div id='choose-hero'>
              <h1>Choose Your Hero!</h1>
              <div id='battle-heroes'>
                {heroes.map(h =>
                  <div
                    className='hero-wrapper'
                    onClick={() => this.chooseHero(h.key)}
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
            <h3>{hero.name}</h3>
            <img src={hero.img} alt={hero.name}/>
            <p>Health: {hero.hp}</p>
            <p>Strength: {hero.str}</p>
            <p>Speed: {hero.spd}</p>
            <p id='weapon'>Weapon: {hero.wpn}</p>
          </div>
          {this.state.card.map(c =>
            <div
              className={typeof c == 'number' ? 'card empty-card' : 'card'}
              key={this.state.card.indexOf(c)}
              >
              {(typeof c == 'number')
              ? <p>{'Action Card ' + (c+1).toString()}</p>
              : <div className='action-card-stats' onClick={() => this.playCard(c)}>
                  <img src={c.img} alt={c.name} />
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                </div>
              }
            </div>
          )}
          <div id='action-deck' className='card' onClick={() => this.drawCard()}>
            <p>Action Card Deck</p>
          </div>
        </section>
      </main>
    )
  }
}

export default Battleground
