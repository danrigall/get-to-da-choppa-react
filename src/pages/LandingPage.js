import title from '../images/1-main.png'
import headshot from '../images/gabe2.png'
import heroes from '../cards/heroes'

function Landing(props) {
  return (
    <main id="main-landing">
      <section id="intro-section">
        <img src={title} alt='arnold with gun' />
        <div id="intro">
          <p>Welcome, men and women to the most brutal battle game of all time! If you think you are man or woman enough to face the most villainous super-villains of the 1980s and -90s, then push da button...</p>
          <button onClick={props.onClick}>GO</button>
        </div>
      </section>
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
      <section id="hero-section">
        <h1>Da Heroes</h1>
        {heroes.map(h =>
          <div className='hero-wrapper' onClick={props.onClick} key={heroes.indexOf(h)}>
            <h2>{h.name}</h2>
            <img src={h.img} alt={h.name} />
            <p>{h.desc}</p>
          </div>
        )}
      </section>
      <section id="legal">
        <h1>Da Legal</h1>
        <p>This game is in no way affiliated with or sanctioned by the Honorable Arnold Schwarzenegger (may he live forever, etc.), 20th Century Fox, Paramount Pictures, or any other corporate entity I may forgotten. It is intended as an homage to my favorite action star of all time and the movies I grew up watching that still today provide some of the most memorable quotes.</p>
        {/* <button>Close</button> */}
      </section>
      <section id="makers">
        <h1>Da Maker</h1>
        <img src={headshot} alt="Gabe headshot" />
        <p>Gabe Rigall is an independent programmer/web developer/data analyst/machine learning enthusiast/evil genius who grew up watching Arnold Schwarzenegger movies and playing card, board, and videogames. The inspiration for "Get to Da Choppa" came after a particularly riveting bout of "Marrying Mr. Darcy" wherein his wife soundly beat him to the punch (pun intended).</p>
        {/* <button>Close</button> */}
      </section>
    </main>
  )
}

export default Landing
