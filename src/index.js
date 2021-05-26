import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Landing from './pages/LandingPage';
import Battleground from './pages/BattlegroundPage';

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
