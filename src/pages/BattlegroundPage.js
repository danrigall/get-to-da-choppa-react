import React from 'react';
import heroes from '../cards/heroes';
import enemies from '../cards/enemies';
import PlayerSection from '../components/PlayerSection';
import EnemySection from '../components/EnemySection';

const battleState = {
  playphase: 0,
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
}

class Battleground extends React.Component {
  constructor(props) {
    super(props);
    this.state = battleState;
  }
  
  revealEnemy() {
    let rando = Math.floor(Math.random() * enemies.length)
    console.log('enemy was clicked')
    this.setState({
      enemy: {
        name: enemies[rando].name,
        img: enemies[rando].img,
        hp: enemies[rando].hp,
        str: enemies[rando].str,
        spd: enemies[rando].spd,
      },
      playphase: 2
    });
  }

  handleChoose(i) {
    this.setState({
      hero: {
        name: heroes[i].name,
        img: heroes[i].img,
        hp: heroes[i].hp,
        str: heroes[i].str,
        spd: heroes[i].spd,
      },
      playphase: 1,
    })
  }

  render(props) {
    return (
      <main id="battle">
        <EnemySection enemy={this.state.enemy} onClick={() => (this.state.playphase < 2) && this.revealEnemy()} phase={this.state.playphase}/>
        <PlayerSection hero={this.state.hero} onClick={(this.state.playphase < 1) ? (i) => this.handleChoose(i) : () => this.handleDraw()} phase={this.state.playphase}/>
      </main>
    )
  }
}

export default Battleground
