const ActionCard: React.FC = ({card, onClick}) => {
  return (
    <div className={!card.stats ? "card empty-card" : "card"}>
      {!card.stats ? (
        <p>{`Action Card ${card.id}`}</p>
      ) : (
        <div className="action-card-stats" onClick={onClick}>
          <img src={card.stats.img} alt={card.stats.name} />
          <h3>{card.stats.name}</h3>
          <p>{card.stats.desc}</p>
        </div>
      )}
    </div>
  );
};

export default ActionCard;
