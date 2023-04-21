import React, { useState, useEffect } from "react"
import enemyDeck from "../decks/enemyDeck"
import playerDeck from "../decks/playerDeck"
import ActionCard from "../components/actionCard"
import HeroCard from "../components/heroCard"
import EnemyCard from "../components/enemyCard"
import ChooseHeroModal from "../components/chooseHeroModal"
import AutoPlayModal from "../components/autoPlayModal"

// TODO: Figure out how to get reviewers.
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

	const attack = () => {
		const heroIsFaster: boolean = hero.spd > enemy.spd
		const heroAttacks = () => {
			alert("You attack the enemy for SOMETHING HP")
			setEnemy({ ...enemy, hp: enemy.hp - hero.str })
		}
		const enemyAttacks = () => {
			alert("The enemy attacks you for SOMETHING HP")
			setHero({ ...hero, hp: hero.hp - enemy.str })
		}
		if (heroIsFaster) {
			heroAttacks()
			enemyAttacks()
		} else {
			enemyAttacks()
			heroAttacks()
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

			<section id="player-section">
				{!hero && <ChooseHeroModal chooseHero={(chosen) => setHero(chosen)} />}
				<HeroCard hero={hero} />
				<ActionCard card={firstCard} onClick={() => playCard(firstCard)} />
				<ActionCard card={secondCard} onClick={() => playCard(secondCard)} />
				<div id="action-deck" className="card" onClick={() => drawCard()}>
					<p>Action Card Deck</p>
				</div>
			</section>

			<section id="kill-buttons">
				<button onClick={attack}>Attack</button>
				{/* <button>Defend</button> */}
			</section>
			{!!viewCard && (
				<AutoPlayModal
					viewCard={viewCard}
					handleAutoPlayed={handleAutoPlayed}
				/>
			)}
		</main>
	)
}

export default Battleground
