import cohaagen from "../images/enemy/cohaagen.png"
import bennett from "../images/enemy/bennett.png"
import predator from "../images/enemy/predator.png"
import aziz from "../images/enemy/salim.png"
import t1000 from "../images/enemy/t1000.png"
import sully from "../images/enemy/sully.png"
import richter from "../images/enemy/richter.png"
import hauser from "../images/enemy/hauser.png"
import samir from "../images/enemy/samir.png"
import alien from "../images/enemy/predator2.png"
import t101 from "../images/enemy/t101.png"
import columbians from "../images/enemy/columbians.png"
import muscle from "../images/enemy/thug.png"
import jihadist from "../images/enemy/jihadist.png"

const enemyDeck = [
	{
		type: "boss",
		hp: 12,
		str: 6,
		spd: 10,
		name: "Cohaagen",
		img: cohaagen,
		desc: "A corporate dictator with a nasty temper, Vilos Cohaagen shortens every game by one round.",
		min: 6,
	},
	{
		type: "boss",
		hp: 15,
		str: 8,
		spd: 10,
		name: "Bennett",
		img: bennett,
		desc: "A psychotic former commando, Bennett's tactical skill allows his Minions to make an additional save throw if their first one fails.",
		min: 7,
	},
	{
		type: "boss",
		hp: 18,
		str: 14,
		spd: 12,
		name: "The Predator",
		img: predator,
		desc: "An alien hunter. The ultimate predator. Loves hot weather.",
		min: 4,
	},
	{
		type: "boss",
		hp: 18,
		str: 14,
		spd: 12,
		name: "Abu Salim Aziz",
		img: aziz,
		desc: "Radical Islamist terrorist by day, equestrian by night. Abu Salim Aziz is anything but warm and fuzzy.",
		min: 5,
	},
	{
		type: "boss",
		hp: 25,
		str: 17,
		spd: 15,
		name: "T-1000",
		img: t1000,
		desc: "CyberDyne Systems Model 1000. A cybernetic organism that can imitate anything it touches. The ultimate mimic. Nigh-unstoppable.",
		min: 0,
	},
	{
		type: "minion",
		hp: 12,
		str: 6,
		spd: 10,
		name: "Sully",
		img: sully,
		desc: "A funny guy. You should kill him last.",
		min: 0,
	},
	{
		type: "minion",
		hp: 15,
		str: 5,
		spd: 9,
		name: "Richter",
		img: richter,
		desc: "Nice guy. Throws great parties. Proud of his hands.",
		min: 0,
	},
	{
		type: "minion",
		hp: 12,
		str: 6,
		spd: 10,
		name: "Hauser",
		img: hauser,
		desc: "Martian Intelligence operative. Not a nice person. Plans great parties though.",
		min: 0,
	},
	{
		type: "minion",
		hp: 15,
		str: 5,
		spd: 9,
		name: "Samir",
		img: samir,
		desc: 'Talented torturer. Known for making his "patients" talk… unless they pick the lock first.',
		min: 0,
	},
	{
		type: "minion",
		hp: 12,
		str: 6,
		spd: 10,
		name: "Alien Hunter",
		img: alien,
		desc: "A hunter from another world who seeks the ultimate prey: you.",
		min: 0,
	},
	{
		type: "minion",
		hp: 20,
		str: 15,
		spd: 10,
		name: "T-101",
		img: t101,
		desc: "CyberDyne Systems Model 101. A cybernetic organism. A killing machine.",
		min: 0,
	},
	{
		type: "minion",
		hp: 13,
		str: 5,
		spd: 9,
		name: "Columbian Paramilitary",
		img: columbians,
		desc: 'Drug runners. Kidnappers. Some might call them "bad hombres".',
		min: 0,
	},
	{
		type: "minion",
		hp: 14,
		str: 8,
		spd: 8,
		name: "Corporate Muscle",
		img: muscle,
		desc: "Corporate mercenary. Guaranteed to complicate your day.",
		min: 0,
	},
	{
		type: "minion",
		hp: 10,
		str: 5,
		spd: 7,
		name: "Crimson Jihadist",
		img: jihadist,
		desc: "Tired of all the other “warm and fuzzy” terrorist groups, these extremists formed their own, more extreme group: the Crimson Jihad.",
		min: 0,
	},
]

export default enemyDeck
