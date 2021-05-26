function EnemySection(props) {
  return (
    <section id="enemy-section">
      <div id="kill-count" className="card">
        <h3>Kill Count: </h3>
        <p>{'TODO: Create & Call killCount function'}</p>
      </div>

      <div
        id='enemy-card'
        className={props.phase < 2 ? 'card empty-card' : 'card'}
        onClick={props.onClick}
      >
        {props.phase < 2 ?
          <div>Reveal Enemy</div> :
          <div id='enemy-stats'>
            <img src={props.enemy.img} alt={props.enemy.name} />
            <h3>{props.enemy.name}</h3>
            <p>Health: {props.enemy.hp}</p>
            <p>Strength: {props.enemy.str}</p>
            <p>Speed: {props.enemy.spd}</p>
          </div>
        }
      </div>
      
      <div id="kill-list" className="card">
        <h3>Kill List</h3>
        <p id="emptyID"></p>
      </div>
    </section>
  )
}

export default EnemySection;
