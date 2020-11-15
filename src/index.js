import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const heroes = [
  { name: 'Dutch', file: 'dutch', hp: 19, str: 13, spd: 9, desc: 'Veteran Special Operator. Expert in jungle warfare. Not afraid of getting muddy.' },
  { name: 'Douglas Quaid', file: 'quaid', hp: 15, str: 12, spd: 12, desc: 'Mild-mannered construction worker. Likes demure women. Not a fan of parties.' },
  { name: 'Harry Tasker', file: 'tasker', hp: 18, str: 12, spd: 10, desc: 'Veteran Special Agent with an iron-clad secret identity. Sometimes has marital troubles. Not a fan of car salesmen.' },
  { name: 'John Matrix', file: 'matrix', hp: 20, str: 15, spd: 8, desc: 'Commando by trade. Lumberjack by necessity. Father of the Year.' },
];

class Header extends React.Component {
  render(props) {
    return(
      <header id="page-header">
        {props.mode.isBattle && <h2>Home</h2>}
        <h1>{props.mode.isBattle ? 'Brutal Battleground' : 'Get to Da Choppa!'}</h1>
      </header>
    )
  }
}

function Rules() {
  return (
    <section id="rules">
      <h1>Da Game</h1>
      <p>As one of the most unforgettable heroes of all time, you will battle the most heinous villains the world has ever known. Will you crush their throats with your bare hands? Or will you run screaming from their army of loyal minions? The choice is yours.</p>
      <div id="release">
        <h1>Release Notes</h1>
        <h2>Version 1.0</h2>
        <p>This version is modeled after the physical card game and, as such, is currently bare bones. There are many more features planned but in the meantime, please enjoy!</p>
        <a >Close</a>
      </div>
      <div id='future'>
        <h1>Future Features</h1>
        <h2>Here are some cool features I plan to put in.</h2>
        <ul>
          <li>More Weapons!</li>
          <li>Trusty Sidekicks!</li>
          <li>Environments!</li>
        </ul>
        <a >Close</a>
      </div>
      <a >Close</a>
    </section>
  )
}

function Hero(props) {
  return (
    <div className='hero-wrapper'>
      <h2>{this.props.value.name}</h2>
      <img src="./img/{this.props.value.file}.png" alt={this.props.value.name} />
      <p>{this.props.value.desc}</p>
    </div>
  )
}

class Heroes extends React.Component {
  renderHero(i) {
    return (
      <Hero
        value={heroes[i]}
      />
    );
  }

  render() {
    return (
      <section id="hero-section">
        { this.renderHero(0)}
        { this.renderHero(1)}
        { this.renderHero(2)}
        { this.renderHero(3)}
      </section>
    )
  }
}

function Legal() {
  <section id="legal">
    <h1>Da Legal</h1>
    <p>This game is in no way affiliated with or sanctioned by the Honorable Arnold Schwarzenegger (may he live forever, etc.), 20th Century Fox, Paramount Pictures, or any other corporate entity I may forgotten. It is intended as an homage to my favorite action star of all time and the movies I grew up watching that still today provide some of the most memorable quotes.</p>
    <a >Close</a>
  </section>
}

function Makers() {
  return (
    <section id="makers">
      <h1>Da Maker</h1>
      <img src="./img/headshot.png" alt="photo of Gabe" />
      <p>Gabe Rigall is an independent programmer/web developer/data analyst/machine learning enthusiast/evil genius who grew up watching Arnold Schwarzenegger movies and playing card, board, and videogames. The inspiration for "Get to Da Choppa" came after a particularly riveting bout of "Marrying Mr. Darcy" wherein his wife soundly beat him to the punch (pun intended).</p>
      <a >Close</a>
    </section>
  )
}

class Landing extends React.Component {
  render(props) {
    return (
      <div id="main-landing">
        <section id="introSection">
          <img src="./img/title.png" alt="arnold with gun" />
          <p>Welcome, men and women to the most brutal battle game of all time! If you think you are man or woman enough to face the most villainous super-villains of the 1980s and -90s, click one of the buttons below.</p>
        </section>
        <Rules />
        <Heroes />
        <Legal />
        <Makers />
      </div>

    )
  }
}

class Enemy extends React.Component {
  render(props) {
    return (
      <section id="enemy-section">
        <div id="tally">
          <h3>Kill Count: </h3>
          <p>{'TODO: Reference to killCount function'}</p>
          <h3>Kill Target: </h3>
          <p>{'TODO: Reference to killTarget function'}</p>
        </div>

        <div className="enemy-card">
          <a  onclick="TODO: Reveals the first enemy">Reveal Enemy</a>
        </div>

        <div className="empty-card">
          <h3>Kill List</h3>
          <p id="emptyID"></p>
        </div>
      </section>
    )
  }
}

class Player extends React.Component {
  render(props) {
    return (
      <section id="player-section">
        <div id="hero-card" onclick="TODO: Shows card description">
          <div className="hero">
            <img src="img/${player.NN}.png"/>
            <h3>{this.props.chosen.name}</h3>
            <p>Health: {this.props.chosen.hp}</p>
            <p>Strength: {this.props.chosen.str}</p>
            <p>Speed: {this.props.chosen.spd}</p>
            <p id="weapon">Weapon: </p>
          </div>
        </div>

        <div id="actionCard1">
          <a  onclick="TODO: Refresh action card">
            <div className="placeHolder">
              <h2>Draw Card</h2>
            </div>
          </a>
        </div>

        <div id="actionCard2">
          <a  onclick="TODO: Refresh action card">
            <div className="placeHolder">
              <h2>Draw Card</h2>
            </div>
          </a>
        </div>
      </section>
    )
  }
}

class Battleground extends React.Component {
  render(props) {
    return (
      <div id="battle">
        <Enemy />
        <Player chosen={heroes[1]} />
      </div>

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

  render() {
    return (
      <div id="game">
        <Header mode={this.state.isBattle} />
        {this.state.isBattle ? <Battleground /> : <Landing />}
        <footer id='page-footer'>Copyright &copy 2020 AngryAustrian Enterprises</footer>
      </div>
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
