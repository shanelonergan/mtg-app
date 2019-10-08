// variables

let jsonifyTheResponse = (res => res.json())
let cardHolder = document.querySelector(".card-holder")
let shuffleBtn = document.querySelector(".shuffle-btn")
let header = document.querySelector(".header")
let cardArt = document.querySelector("#card-art")
let textBox = document.querySelector(".text")
let manaCost = document.querySelector("#mana-cost")
let type = document.querySelector("#type")
let cardText = document.querySelector("#text")
let background = document.querySelector("#background")
	
// events 

shuffleBtn.addEventListener("click", getRandomCard)

// cardArt.addEventListener('mouseover', blurZoom)


// helpers 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function blurZoom(){
// 	cardArt.className += "hover-zoom-card-art"
// 	background.className += "blur"
// }


// fetch 

function getCard(id){
	return fetch(`https://api.magicthegathering.io/v1/cards/${id}`)
	.then(jsonifyTheResponse)
	.then(jsonObj => {
		makeCardDiv(jsonObj)
		console.log(jsonObj)
	})
}

function getRandomCard(){
	randNum = getRandomInt(1, 100)
	return fetch(`https://api.magicthegathering.io/v1/cards`)
	.then(jsonifyTheResponse)
	.then(jsonObj => {
		randCard = jsonObj.cards[randNum]
		makeRandCardDiv(randCard)
	})
}

// slap

function makeCardDiv(cardObj){
	header.innerText = cardObj.card.name
	cardArt.src = cardObj.card.imageUrl
	cardArt.alt = `image of ${cardObj.card.name}`
	manaCost.innerText = cardObj.card.manaCost
	type.innerText = cardObj.card.originalType
	text.innerText = cardObj.card.originalText
}

function makeRandCardDiv(cardObj){
	cardHolder.innerHTML = 
	`<header class="header">${cardObj.name}</header>
		<div class="info">
			<div class="image">
				<img src=${cardObj.imageUrl} id="card-art" alt="image of ${cardObj.name}" />
			</div>

    		<ul class="text">
				<li id='mana-cost'>${cardObj.manaCost}</li>
				<br />
				<li id='type'>${cardObj.originalType}</li>
				<br />
				<li id='text'>${cardObj.originalText}</li>
    		</ul>
  		</div>`
}


getCard(386616)


