type HeroModalProps = {
  heroDeck: any;
  chooseHero: (i: number) => void;
}

const ChooseHeroModal: React.FC<HeroModalProps> = ({ heroDeck, chooseHero }) => {
  return (
    <div id="choose-hero">
      <h1>Choose Your Hero!</h1>
      <div id="battle-heroes">
        {heroDeck.map((hero) => (
          <div
            className="hero-wrapper"
            onClick={() => chooseHero(hero.key)}
            key={hero.key}
          >
            <h2>{hero.name}</h2>
            <img src={hero.img} alt={hero.name} />
            <p>{hero.desc}</p>
          </div>
        ))}
      </div>
      <div className="modal-bgd"></div>
    </div>
  );
};

export default ChooseHeroModal;
