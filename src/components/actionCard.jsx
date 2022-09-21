type ActionCardProps = {
	card: any,
	onClick: () => void,
}

const ActionCard: React.FC<ActionCardProps> = ({ card, onClick }) => {
	return (
		<div className={!card.cardData ? "card empty-card" : "card"}>
			{!card.cardData || card.cardData?.autoPlay ? (
				<p>{`Action Card ${card.id}`}</p>
			) : (
				<div className="action-card-stats" onClick={onClick}>
					<img src={card.cardData.img} alt={card.cardData.name} />
					<h3>{card.cardData.name}</h3>
					<p>{card.cardData.desc}</p>
				</div>
			)}
		</div>
	)
}

export default ActionCard
