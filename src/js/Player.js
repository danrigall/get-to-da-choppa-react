import React from 'react';
import playerDeck from './cards';
import heroes from './heroes';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{
        name: '',
        img: '',
        hp: null,
        str: null,
        spd: null,
        die: null,
        dmg: null,
        fxPlayer: false,
        fxBoss: false,
        fxMinion: false,
        bonus: null,
        desc: '',
        isEmpty: true,
        key: 0,
      },
      {
        name: '',
        img: '',
        hp: null,
        str: null,
        spd: null,
        die: null,
        dmg: null,
        fxPlayer: false,
        fxBoss: false,
        fxMinion: false,
        bonus: null,
        desc: '',
        isEmpty: true,
        key: 1,
      }]
    }
  }
  
  drawCard(i) {
    let rando = Math.floor(Math.random() * playerDeck.length)
    // TODO: MAKE COPY OF playerDeck ARR INSTEAD OF MUTATING IT
    this.setState(this.state.cards[i] = Object.assign({},
      this.state.cards[i],
      {
        name: playerDeck[rando].name,
        img: playerDeck[rando].img,
        hp: playerDeck[rando].hp,
        str: playerDeck[rando].str,
        spd: playerDeck[rando].spd,
        die: playerDeck[rando].die,
        dmg: playerDeck[rando].dmg,
        fxPlayer: playerDeck[rando].fxPlayer,
        fxBoss: playerDeck[rando].fxBoss,
        fxMinion: playerDeck[rando].fxMinion,
        bonus: playerDeck[rando].bonus,
        desc: playerDeck[rando].desc,
        isEmpty: false,
      }));
  }
  
  render(props) {
    return (
      <section id="player-section">
        {(this.props.phase < 1) &&
          <div id='choose-hero'>
            <h1>Choose Your Hero!</h1>
            <div id='battle-heroes'>
              {heroes.map(h =>
                <div
                  className='hero-wrapper'
                  onClick={() => this.props.onClick(h.key)}
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
        <div id="hero-card" className="card">
          <h3>{this.props.hero.name}</h3>
          <img src={this.props.hero.img} alt={this.props.hero.name}/>
          <p>Health: {this.props.hero.hp}</p>
          <p>Strength: {this.props.hero.str}</p>
          <p>Speed: {this.props.hero.spd}</p>
          <p id="weapon">Weapon: {this.props.hero.wpn}</p>
        </div>
        {/* TODO: FIGURE THIS OUT! */}
        {this.state.cards.map(c =>
          <div className={c.isEmpty ? 'card empty-card' : 'card'} onClick={() => c.isEmpty && this.drawCard(c.key)} key={c.key}>
            {c.isEmpty ? 
              <p>{"Action Card " + (c.key+1)}</p> :
              <div className="action-card-stats">
                <img src={c.img} alt={c.name} />
                <h3>{c.name}</h3>
                <p>Health: {c.hp}</p>
                <p>Strength: {c.str}</p>
                <p>Speed: {c.spd}</p>
              </div>
            }
          </div>
        )}
      </section>
    )
  }
}

export default Player;
