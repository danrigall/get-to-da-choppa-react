import Modal from "./modal"

type ChooseHeroProps = {
	viewCard: any,
	handleAutoPlayed: () => void,
}

const AutoPlayModal: React.FC<ChooseHeroProps> = ({
	viewCard,
	handleAutoPlayed,
}) => (
	<Modal>
		<div className="card">
			<div
				className="action-card-stats"
				onClick={() => handleAutoPlayed(viewCard)}
			>
				<img src={viewCard.cardData.img} alt={viewCard.cardData.name} />
				<h3>{viewCard.cardData.name}</h3>
				<p>{viewCard.cardData.desc}</p>
			</div>
		</div>
	</Modal>
)

export default AutoPlayModal
