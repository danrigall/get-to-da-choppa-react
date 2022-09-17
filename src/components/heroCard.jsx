type HeroProps = {
	hero: any,
}

const HeroCard: React.FC<HeroProps> = ({ hero }) => {
	return (
		<div id="hero-card" className="card">
			{hero && (
				<div>
					<h3>{hero.name}</h3>
					<img src={hero.img} alt={hero.name} />
					<p>Health: {hero.hp}</p>
					<p>Strength: {hero.str}</p>
					<p>Speed: {hero.spd}</p>
					{hero.wpn?.name && <p id="weapon">Weapon: {hero.wpn.name}</p>}
				</div>
			)}
		</div>
	)
}

export default HeroCard
