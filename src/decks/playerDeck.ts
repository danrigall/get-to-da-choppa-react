import bfg from "../images/weapon/bfg.png";
import blades from "../images/weapon/blades.png";
import bow from "../images/weapon/bow.png";
import bullpup from "../images/weapon/bullpup.png";
import aid from "../images/card/aid.png";
import goodHorse from "../images/card/goodhorse.png";
import inconvenient from "../images/card/inconvenient.png";
import niceNight from "../images/card/nicenight.png";
import skl_hp from "../images/card/skl_hp.png";
import skl_spd from "../images/card/skl_spd.png";
import skl_str from "../images/card/skl_str.png";
import steam from "../images/card/steam.png";
import serum from "../images/card/syrum.png";
import xplosion from "../images/card/xplosion.png";
import xvehicle from "../images/card/xvehicle.png";

export type CardData = {
  type: string;
  name: string;
  img: any;
  hp: number;
  str: number;
  spd: number;
  autoPlay?: boolean;
  bonus?: string;
  desc: string;
};

const weapons = [
  {
    type: "weapon",
    name: "Badass Bullpup",
    img: bullpup,
    useStr: false,
    spd: 4,
    die: 1,
    dmg: 10,
    desc: "This bad boy spits out 10mm hollow-points at 4,000 rounds a minute. Enjoy.",
  },
  {
    type: "weapon",
    name: "Compound Bow",
    img: bow,
    useStr: true,
    spd: 2,
    die: 2,
    dmg: 6,
    desc: "Silent but deadly.",
  },
  {
    type: "weapon",
    name: "B.F.G.",
    img: bfg,
    useStr: false,
    die: 3,
    dmg: 10,
    desc: 'How do you spell "dead"? B.F.G.',
  },
  {
    type: "weapon",
    name: "Alien Wrist Blades",
    img: blades,
    useStr: true,
    spd: 1,
    die: 2,
    dmg: 8,
    desc: "Razor-sharp blades made from an alien alloy.",
  },
];

const playerCards: CardData[] = [
  {
    type: "player",
    name: "First Aid Kit",
    img: aid,
    hp: 3,
    str: 0,
    spd: 0,
    desc: "A First Aid kit. Restores some health.",
  },
  {
    type: "player",
    name: "First Aid Kit",
    img: aid,
    hp: 3,
    str: 0,
    spd: 0,
    desc: "A First Aid kit. Restores some health.",
  },
  {
    type: "player",
    name: "Super Syrum",
    img: serum,
    hp: 0,
    str: 0,
    spd: 4,
    desc: "A genetic cocktail that permanently increases your speed.",
  },
  {
    type: "player",
    name: "Yeah, Yeah, Yeah, Good Horse",
    img: goodHorse,
    hp: 0,
    str: 0,
    spd: 10,
    desc: "You borrow a horse from a cop. What could go wrong? Play for a boost in SPD.",
  },
  {
    type: "player",
    name: "Inconvenient Truth",
    img: inconvenient,
    hp: 0,
    str: -5,
    spd: -5,
    autoPlay: true,
    desc: "You unwittingly confess that you've been hiding a secret identity from your wife for years. You'd best prepare yourself.",
  },
  {
    type: "player",
    name: "Strength Increase",
    img: skl_str,
    hp: 0,
    str: 1,
    spd: 0,
    desc: "+1 STR",
  },
  {
    type: "player",
    name: "Strength Increase",
    img: skl_str,
    hp: 0,
    str: 1,
    spd: 0,
    desc: "+1 STR",
  },
  {
    type: "player",
    name: "Strength Increase",
    img: skl_str,
    hp: 0,
    str: 1,
    spd: 0,
    desc: "+1 STR",
  },
  {
    type: "player",
    name: "Speed Increase",
    img: skl_spd,
    hp: 0,
    str: 0,
    spd: 1,
    desc: "+1 SPD",
  },
  {
    type: "player",
    name: "Speed Increase",
    img: skl_spd,
    hp: 0,
    str: 0,
    spd: 1,
    desc: "+1 SPD",
  },
  {
    type: "player",
    name: "Health Increase",
    img: skl_hp,
    hp: 1,
    str: 0,
    spd: 0,
    desc: "+1 HP",
  },
  {
    type: "player",
    name: "Exploding Vehicle",
    img: xvehicle,
    hp: -10,
    str: 0,
    spd: 0,
    autoPlay: true,
    desc: "The vehicle you are driving suddenly erupts in flames. You are very badly burned but still alive… mostly.",
  },
];

const enemyCards: CardData[] = [
  // Cards that affect both Minions and Bosses
  {
    type: "enemies",
    name: "Let Off Some Steam",
    img: steam,
    hp: -10,
    str: 0,
    spd: 0,
    bonus: "+5 additional Damage when employed against Bennett or his minions.",
    desc: "What's better than boiling hot water? Boiling hot water vapor.",
  },
  // Cards that only affect Minions
  {
    type: "minion",
    name: "Nice Night for a Walk",
    img: niceNight,
    hp: -1000,
    str: 0,
    spd: 0,
    desc: "That laundry isn't going to do itself. Play this card to take one minion out of play for the remainder of the game.",
  },
];

const everyoneCards: CardData[] = [
  {
    type: "everyone",
    name: "Minor Explosion",
    img: xplosion,
    hp: -5,
    str: 0,
    spd: 0,
    autoPlay: true,
    desc: "You get caught in a small explosion.",
  },
];

const playerDeck = [
  ...weapons,
  ...playerCards,
  ...enemyCards,
  ...everyoneCards,
];

export default playerDeck;
