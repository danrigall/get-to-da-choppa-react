import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import title from './images/1-main.png'
import headshot from './images/gabe2.png'
import heroes from './js/heroes'
import enemies from './js/enemies'

function Rules() {
  return (
    <section id="rules">
      <h1>Da Rülz</h1>
      <p>As one of the most unforgettable heroes of all time, you will battle the most heinous villains the world has ever known. Will you crush their throats with your bare hands? Or will you run screaming from their army of loyal minions? The choice is yours.</p>
      <div id="release">
        <h2>Release Notes</h2>
        <h3>Version 1.0</h3>
        <p>This version is modeled after the physical card game and, as such, is currently bare bones. There are many more features planned but in the meantime, please enjoy!</p>
        {/* <button>Close</button> */}
      </div>
      <div id='future'>
        <h2>Future Features</h2>
        <h3>Here are some cool features I plan to put in.</h3>
        <ul>
          <li>More Weapons!</li>
          <li>Trusty Sidekicks!</li>
          <li>Environments!</li>
        </ul>
        {/* <button>Close</button> */}
      </div>
      {/* <button>Close</button> */}
    </section>
  )
}

function Hero(props) {
  return (
    <div className='hero-wrapper' onClick={props.onClick}>
      <h2>{props.hero.name}</h2>
      <img src={props.hero.img} alt={props.hero.name} />
      <p>{props.hero.desc}</p>
    </div>
  )
}

class Heroes extends React.Component {
  renderHero(i) {
    return (
      <Hero
        hero={heroes[i]}
      />
    );
  }

  render() {
    return (
      <section id="hero-section">
        <h1>Da Heroes</h1>
        { this.renderHero(0)}
        { this.renderHero(1)}
        { this.renderHero(2)}
        { this.renderHero(3)}
      </section>
    )
  }
}

function Legal() {
  return (
    <section id="legal">
      <h1>Da Legal</h1>
      <p>This game is in no way affiliated with or sanctioned by the Honorable Arnold Schwarzenegger (may he live forever, etc.), 20th Century Fox, Paramount Pictures, or any other corporate entity I may forgotten. It is intended as an homage to my favorite action star of all time and the movies I grew up watching that still today provide some of the most memorable quotes.</p>
      {/* <button>Close</button> */}
    </section>
  )
}

function Makers() {
  return (
    <section id="makers">
      <h1>Da Maker</h1>
      <img src={headshot} alt="Gabe headshot" />
      <p>Gabe Rigall is an independent programmer/web developer/data analyst/machine learning enthusiast/evil genius who grew up watching Arnold Schwarzenegger movies and playing card, board, and videogames. The inspiration for "Get to Da Choppa" came after a particularly riveting bout of "Marrying Mr. Darcy" wherein his wife soundly beat him to the punch (pun intended).</p>
      {/* <button>Close</button> */}
    </section>
  )
}

class Landing extends React.Component {
  render(props) {
    return (
      <main id="main-landing">
        <section id="intro-section">
          <img src={title} alt='arnold with gun' />
          <div id="intro">
            <p>Welcome, men and women to the most brutal battle game of all time! If you think you are man or woman enough to face the most villainous super-villains of the 1980s and -90s, then push da button...</p>
            <button onClick={() => this.props.onClick()}>GO</button>
          </div>
        </section>
        <Rules />
        <Heroes />
        <Legal />
        <Makers />
      </main>
    )
  }
}

class Enemy extends React.Component {
  render(props) {
    return (
      <div id='enemy-card' onClick={props.onClick}>
        <h2>{props.hero.name}</h2>
        <img src={props.hero.img} alt={props.hero.name} />
        <p>{props.hero.desc}</p>
      </div>
    )
  }
}

function EnemyReveal(props) {
  return (
    <div id="enemy-card" className="card empty-card" onClick={props.onClick}>
      <div>Reveal Enemy</div>
    </div>
  )
}

class EnemySection extends React.Component {
  revealEnemy(enemy) {
    alert('the enemy is revealed!');
    this.setState({
      enemy: {
        name: enemy.name,
        img: enemy.img,
        hp: enemy.hp,
        str: enemy.str,
        spd: enemy.spd,
      },
      playphase: 2
    })
  }

  render(props) {
    return (
      <section id="enemy-section">
        <div id="kill-count" className="card">
          <h3>Kill Count: </h3>
          <p>{'TODO: Create & Call killCount function'}</p>
        </div>

        {(this.props.phase < 2) ? <EnemyReveal onClick={() => { this.revealEnemy(enemies[0])}}/> : <Enemy enemy={this.props.enemy}/>}

        <div id="kill-list" className="card empty-card">
          <h3>Kill List</h3>
          <p id="emptyID"></p>
        </div>
      </section>
    )
  }
}

class ChooseHero extends React.Component {
  renderHero(i) {
    return (
      <Hero
        hero={heroes[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div id='choose-hero'>
        <h1>Choose Your Hero!</h1>
        <div id='battle-heroes'>
          {this.renderHero(0)}
          {this.renderHero(1)}
          {this.renderHero(2)}
          {this.renderHero(3)}
        </div>
        <div className='modal-bgd'></div>
      </div>
    )
  }
}

class Player extends React.Component {
  render(props) {
    return (
      <section id="player-section">
        {(this.props.phase < 1) && <ChooseHero hero={this.props.hero} onClick={(i) => this.props.onClick(i)}/>}
        <div id="hero-card" className="card">
          <h3>{this.props.hero.name}</h3>
          <img src={this.props.hero.img} />
          <p>Health: {this.props.hero.hp}</p>
          <p>Strength: {this.props.hero.str}</p>
          <p>Speed: {this.props.hero.spd}</p>
          <p id="weapon">Weapon: {this.props.hero.wpn}</p>
        </div>

        <div id="deck-1" className="card empty-card">
          <a onClick="TODO: Refresh action card">Action Card 1</a>
        </div>

        <div id="deck-2" className="card empty-card">
          <a onClick="TODO: Refresh action card">Action Card 2</a>
        </div>
      </section>
    )
  }
}

class Battleground extends React.Component {
  render(props) {
    return (
      <main id="battle">
        <EnemySection enemy={this.props.enemy} phase={this.props.phase}/>
        <Player hero={this.props.hero} onClick={(i) => this.props.onClick(i)} phase={this.props.phase}/>
      </main>
    )
  }
}

class Header extends React.Component {
  render(props) {
    return(
      <header id={this.props.mode ? 'battle-header' : 'landing-header'}>
        {this.props.mode && <h2 onClick={() => this.props.onClick()}>Home</h2>}
        <h1 id="header-title">{this.props.mode ? 'Brutal Battleground' : 'Get to Da Choppa!'}</h1>
      </header>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBattle: false,
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
      }
    };
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

  handleClick() {
    this.setState({
      isBattle: !this.state.isBattle
    })
  }

  render() {
    return (
      <div id="game">
        <Header mode={this.state.isBattle} onClick={() => this.handleClick()}/>
        {this.state.isBattle ? <Battleground hero={this.state.hero} enemy={this.state.enemy} phase={this.state.playphase} onClick={(i) => this.handleChoose(i)}/> : <Landing onClick={() => this.handleClick()}/>}
        <footer id='page-footer'>Copyright &copy; 2020 AngryAustrian Enterprises</footer>
      </div>
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
