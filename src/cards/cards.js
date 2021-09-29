import bfg from '../images/weapon/bfg.png'
import blades from '../images/weapon/blades.png'
import bow from '../images/weapon/bow.png'
import bullpup from '../images/weapon/bullpup.png'

import aid from '../images/card/aid.png'
import goodhorse from '../images/card/goodhorse.png'
import inconvenient from '../images/card/inconvenient.png'
import nicenight from '../images/card/nicenight.png'
import skl_hp from '../images/card/skl_hp.png'
import skl_spd from '../images/card/skl_spd.png'
import skl_str from '../images/card/skl_str.png'
import steam from '../images/card/steam.png'
import syrum from '../images/card/syrum.png'
import xplosion from '../images/card/xplosion.png'
import xvehicle from '../images/card/xvehicle.png'

const playerDeck = [
  // Weapons
  { type: 0, name: 'Badass Bullpup', img: bullpup, hp: null, str: null, spd: 4, die: 1, dmg: 10, phase: null, fxPlayer: true, fxBoss: false, fxMinion: false, bonus: null, desc: 'This bad boy spits out 10mm hollowpoints at 4,000 rounds a minute. Enjoy.', },
  { type: 0, name: 'Compound Bow', img: bow, hp: null, str: true, spd: 2, die: 2, dmg: 6, phase: null, fxPlayer: true, fxBoss: false, fxMinion: false, bonus: null, desc: 'Silent but deadly.', },
  { type: 0, name: 'B.F.G.', img: bfg, hp: null, str: null, spd: null, die: 3, dmg: 10, phase: null, fxPlayer: true, fxBoss: false, fxMinion: false, bonus: null, desc: 'How do you spell "dead"? B.F.G.', },
  { type: 0, name: 'Alien Wrist Blades', img: blades, hp: null, str: true, spd: 1, die: 2, dmg: 8, phase: null, fxPlayer: true, fxBoss: false, fxMinion: false, bonus: null, desc: 'Razor-sharp blades made from an alien alloy.', },
  // Cards that only affect the player
  { type: 1, name: 'First Aid Kit', img: aid, hp: 3, str: 0, spd: 0, die: 0, dmg: 0, phase: null, fxPlayer: true, fxBoss: false, fxMinion: false, bonus: null, desc: 'A First Aid kit. Restores some health.', },
  { type: 1, name: 'First Aid Kit', img: aid, hp: 3, str: 0, spd: 0, die: 0, dmg: 0, phase: null, fxPlayer: true, fxBoss: false, fxMinion: false, bonus: null, desc: 'A First Aid kit. Restores some health.',},
  { type: 1, name: 'Super Syrum', img: syrum, hp: 0, str: 0, spd: 4, die: 0, dmg: 0, phase: null, fxPlayer: true, fxBoss: false, fxMinion: false, bonus: null, desc: 'A genetic cocktail that permanently increases your speed.', },
  { type: 1, name: 'Yeah, Yeah, Yeah, Good Horse', img: goodhorse, hp: 0, str: 0, spd: 10, die: null, dmg: null, phase: null, fxPlayer: true, fxBoss: false, fxMinion: false, bonus: null, desc: 'You borrow a horse from a cop. What could go wrong? Play for a boost in SPD.', },
  { type: 1, name: 'Inconvenient Truth', img: inconvenient, hp: 0, str: -5, spd: -5, die: null, dmg: null, phase: 0, fxPlayer: true, fxBoss: false, fxMinion: false, bonus: null, desc: 'You unwittingly confess that you’ve been hiding a secret identity from your wife for years. You\'d best prepare yourself.', },
  { type: 1, name: 'Strength Increase', img: skl_str, hp: 0, str: 1, spd: 0, die: null, dmg: null, phase: null, fxPlayer: true, fxBoss: false, fxMinion: false, bonus: null, desc: '+1 STR', },
  { type: 1, name: 'Strength Increase', img: skl_str, hp: 0, str: 1, spd: 0, die: null, dmg: null, phase: null, fxPlayer: true, fxBoss: false, fxMinion: false, bonus: null, desc: '+1 STR', },
  { type: 1, name: 'Strength Increase', img: skl_str, hp: 0, str: 1, spd: 0, die: null, dmg: null, phase: null, fxPlayer: true, fxBoss: false, fxMinion: false, bonus: null, desc: '+1 STR', },
  { type: 1, name: 'Speed Increase', img: skl_spd, hp: 0, str: 0, spd: 1, die: null, dmg: null, phase: null, fxPlayer: true, fxBoss: false, fxMinion: false, bonus: null, desc: '+1 SPD', },
  { type: 1, name: 'Speed Increase', img: skl_spd, hp: 0, str: 0, spd: 1, die: null, dmg: null, phase: null, fxPlayer: true, fxBoss: false, fxMinion: false, bonus: null, desc: '+1 SPD', },
  { type: 1, name: 'Health Increase', img: skl_hp, hp: 1, str: 0, spd: 0, die: null, dmg: null, phase: null, fxPlayer: true, fxBoss: false, fxMinion: false, bonus: null, desc: '+1 HP', },
  { type: 1, name: 'Exploding Vehicle', img: xvehicle, hp: -10, str: 0, spd: 0, die: null, dmg: null, phase: 0, fxPlayer: true, fxBoss: false, fxMinion: false, bonus: null, desc: 'The vehicle you are driving suddenly erupts in flames. You are very badly burned but still alive… mostly.', },
  // Cards that affect both Minions and Bosses
  { type: 2, name: 'Let Off Some Steam', img: steam, hp: -10, str: null, spd: null, die: null, dmg: null, phase: null, fxPlayer: false, fxBoss: true, fxMinion: true, bonus: '+5 additional Damage when employed against Bennett or his minions.', desc: 'What\'s better than boiling hot water? Boiling hot water vapor.', },
  // Cards that only affect Minions
  { type: 3, name: 'Nice Night for a Walk', img: nicenight, hp: -1000, str: null, spd: null, die: null, dmg: null, phase: null, fxPlayer: false, fxBoss: false, fxMinion: true, bonus: null, desc: 'That laundry isn\'t going to do itself. Play this card to take one minion out of play for the remainder of the game.', },
  // Cards that affect everyone
  { type: 4, name: 'Minor Explosion', img: xplosion, hp: -5, str: 0, spd: 0, die: null, dmg: null, phase: 0, fxPlayer: true, fxBoss: true, fxMinion: true, bonus: null, desc: 'You get caught in a small explosion.', },
];

export default playerDeck;
