const EnemyCard: React.FC = ({ enemy, onClick }) => {
  return (
    <div
      id="enemy-card"
      className={!enemy ? "card empty-card" : "card"}
    >
      {!enemy ? (
        <div id="enemy-stats" onClick={onClick}>
          <p>
          Reveal Enemy
          </p>
        </div>
      ) : (
        <div id="enemy-stats">
          <img src={enemy.img} alt={enemy.name} />
          <h3>{enemy.name}</h3>
          <p>Health: {enemy.hp}</p>
          <p>Strength: {enemy.str}</p>
          <p>Speed: {enemy.spd}</p>
        </div>
      )}
    </div>
  );
};

export default EnemyCard;
