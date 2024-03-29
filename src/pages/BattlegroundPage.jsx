import React, { useState, useEffect } from "react"
import enemyDeck from "../decks/enemyDeck"
import playerDeck from "../decks/playerDeck"
import ActionCard from "../components/actionCard"
import HeroCard from "../components/heroCard"
import EnemyCard from "../components/enemyCard"
import ChooseHeroModal from "../components/chooseHeroModal"
import AutoPlayModal from "../components/autoPlayModal"

const Battleground = () => {
	const [cardsPlayed, setCardsPlayed] = useState(0)
	const [hero, setHero] = useState()
	const [enemy, setEnemy] = useState()
	const [firstCard, setFirstCard] = useState({ id: 1 })
	const [secondCard, setSecondCard] = useState({ id: 2 })
	const [actionCards, setActionCards] = useState([firstCard, secondCard])
	const [deck, setDeck] = useState([...playerDeck])
	const [viewCard, setViewCard] = useState()

	const randomIndex = (length: number): number => {
		return Math.floor(Math.random() * length)
	}

	const revealEnemy = () => {
		setEnemy(enemyDeck[randomIndex(enemyDeck.length)])
	}

	const playCard = (card: any) => {
		console.log("playCard()", card)
		if (cardsPlayed >= 2) {
			alert("You already played 2 cards this round!")
		} else {
			const { cardData } = card
			// TODO: autoPlay cards must show!
			// TODO: Set up 3 stages: draw, show, play
			const cardEffectsApplied = (character) => {
				return {
					...character,
					hp: cardData.hp + character.hp,
					str: cardData.str + character.str,
					spd: cardData.spd + character.spd,
				}
			}
			if (cardData.type === "weapon") {
				setHero({ ...hero, wpn: cardData })
			} else if (cardData.type === "player") {
				setHero(cardEffectsApplied(hero))
			} else if (
				cardData.type === "enemies" ||
				(cardData.type === "minion" && enemy.type === "minion")
			) {
				setEnemy(cardEffectsApplied(enemy))
			} else if (cardData.type === "everyone") {
				setHero(cardEffectsApplied(hero))
				setEnemy(cardEffectsApplied(enemy))
			}
			// Reset the appropriate card spot.
			if (card.id === 1) {
				setFirstCard({ id: 1 })
			} else {
				setSecondCard({ id: 2 })
			}
			setCardsPlayed(cardsPlayed + 1)
		}
	}

	const drawCard = () => {
		const rando = randomIndex(deck.length)
		const drawn = deck[rando]
		const deckAfterDraw = deck
			.slice(0, rando)
			.concat(deck.slice(rando + 1, deck.length))
		if (!enemy) {
			alert("You must reveal your enemy first!")
		} else {
			const availableSlot = actionCards.find((card) => !card.cardData)
			if (availableSlot) {
				console.log("availableSlot!", availableSlot)
				console.log("drawn", drawn)
				availableSlot.id === 1
					? setFirstCard({ ...firstCard, cardData: drawn })
					: setSecondCard({ ...secondCard, cardData: drawn })
				setDeck(deckAfterDraw)
			} else {
				alert("You can't draw any more cards!")
			}
		}
	}

	const calculateHp = (defender, attacker) => {
		let hpAfterAttack = defender - attacker
		if (hpAfterAttack < 0) {
			hpAfterAttack = 0
		}
		return hpAfterAttack
	}

	const heroAttacks = () => {
		return Promise.resolve()
			.then(() => alert(`You attack the enemy for ${hero.str} HP`))
			.then(() => {
				setEnemy({ ...enemy, hp: calculateHp(enemy.hp, hero.str) })
			})
	}

	const enemyAttacks = () => {
		return Promise.resolve()
			.then(() => alert(`The enemy attacks you for ${enemy.str} HP`))
			.then(() => {
				setHero({ ...hero, hp: calculateHp(hero.hp, enemy.str) })
			})
	}

	const attack = async () => {
		const heroIsFaster: boolean = hero.spd > enemy.spd

		if (heroIsFaster) {
			await heroAttacks()
			await enemyAttacks()
		} else {
			await enemyAttacks()
			await heroAttacks()
		}
	}
const handleAutoPlayed = (card: any) => {
	playCard(card)
	setViewCard(null)
}

// Handle autoPlay cards (ie. explosions)
useEffect(() => {
	console.log("useEffect...")
	setActionCards([firstCard, secondCard])
	if (firstCard.cardData?.autoPlay) {
		setViewCard(firstCard)
	} else if (secondCard.cardData?.autoPlay) {
		setViewCard(secondCard)
	}
}, [firstCard, secondCard])

useEffect(() => {
	if (hero?.hp === 0) {
		// TODO: Make an actual game over modal.
		alert("GAME OVER")
	}
	if (enemy?.hp === 0) {
		Promise.resolve()
			.then(() => alert("You got him!"))
			.then(() => {
				revealEnemy()
			})
	}
}, [hero, enemy])

return (
	<main id="battle">
		<section id="enemy-section">
			<div id="kill-count" className="card">
				<h3>Kill Count: </h3>
				<p>{"TODO: Create & Call killCount function"}</p>
			</div>
			<EnemyCard enemy={enemy} onClick={revealEnemy} />
			<div id="kill-list" className="card">
				<h3>Kill List</h3>
				<p id="emptyID">cards played: {cardsPlayed}</p>
			</div>
		</section>

		<section>
			<button className="attack-button" disabled={!enemy} onClick={attack}>
				Attack
			</button>
			<button
				className="defend-button"
				disabled={!enemy}
				onClick={() => alert("Defend!")}
			>
				Defend
			</button>
		</section>

		<section id="player-section">
			{!hero && <ChooseHeroModal chooseHero={(chosen) => setHero(chosen)} />}
			<HeroCard hero={hero} />
			<ActionCard card={firstCard} onClick={() => playCard(firstCard)} />
			<ActionCard card={secondCard} onClick={() => playCard(secondCard)} />
			<div id="action-deck" className="card" onClick={() => drawCard()}>
				<p>Action Card Deck</p>
			</div>
		</section>

		{!!viewCard && (
			<AutoPlayModal viewCard={viewCard} handleAutoPlayed={handleAutoPlayed} />
		)}
	</main>
)
}

export default Battleground
