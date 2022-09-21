import Modal from "./modal"
import heroDeck from "../decks/heroDeck"

type HeroModalProps = {
	chooseHero: (hero: any) => void,
}

const ChooseHeroModal: React.FC<HeroModalProps> = ({ chooseHero }) => (
	<Modal>
		<h1>Choose Your Hero!</h1>
		<div id="battle-heroes">
			{heroDeck.map((hero) => (
				<div
					className="hero-wrapper"
					onClick={() => chooseHero(hero)}
					key={hero.key}
				>
					<h2>{hero.name}</h2>
					<img src={hero.img} alt={hero.name} />
					<p>{hero.desc}</p>
				</div>
			))}
		</div>
	</Modal>
)

export default ChooseHeroModal
