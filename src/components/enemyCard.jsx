const EnemyCard: React.FC = ({ enemy, onClick }) => {
  const noEnemy: boolean = enemy === {};
  return (
    <div
      id="enemy-card"
      className={noEnemy ? "card empty-card" : "card"}
      onClick={onClick}
    >
      {noEnemy ? (
        <div>Reveal Enemy</div>
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
