import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Landing from './js/Landing';
import heroes from './js/heroes';
import enemies from './js/enemies';
import Player from './js/Player';
import EnemySection from './js/Enemy';

class Battleground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playphase: 0,
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
        <Player hero={this.state.hero} onClick={(this.state.playphase < 1) ? (i) => this.handleChoose(i) : () => this.handleDraw()} phase={this.state.playphase}/>
      </main>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBattle: false,
    };
  }

  handleClick() {
    this.setState({
      isBattle: !this.state.isBattle
    })
  }

  render() {
    return (
      <div id='game'>
        <header id={this.state.isBattle ? 'battle-header' : 'landing-header'}>
          {this.state.isBattle &&
            <h2 onClick={() => this.setState({isBattle: !this.state.isBattle})}>
            Home
            </h2>}
          <h1 id="header-title">{this.state.isBattle ? 'Brutal Battleground' : 'Get to Da Choppa!'}</h1>
        </header>
        {this.state.isBattle ? <Battleground /> : <Landing onClick={() => this.handleClick()} />}
        <footer id='page-footer'>Copyright &copy; 2020 AngryAustrian Enterprises</footer>
      </div>
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
