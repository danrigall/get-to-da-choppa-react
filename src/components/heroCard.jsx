const HeroCard: React.FC = ({ hero }) => {
  return (
    <div id="hero-card" className="card">
      <h3>{hero.name}</h3>
      <img src={hero.img} alt={hero.name} />
      <p>Health: {hero.hp}</p>
      <p>Strength: {hero.str}</p>
      <p>Speed: {hero.spd}</p>
      <p id="weapon">Weapon: {hero.wpn}</p>
    </div>
  );
};

export default HeroCard;
