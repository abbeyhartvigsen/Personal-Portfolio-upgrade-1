import { pokemon } from '../data/pokemon.js'

console.log(pokemon)

class Pokemon {
    constructor(name) {
        this.id = 0,
            this.name = name
    }
}


const mainContainer = document.querySelector('.container')
//what does this mean other than taking something from css?

var card = document.querySelector('.card');
//is this right?
//what does this mean?
function createPokeCard(pokeData) {
    let cardContainer = document.createElement('div')

    cardContainer.addEventListener('click', function () {
        cardContainer.classList.toggle('is-flipped');
        console.log("click")
    
      });
    mainContainer.appendChild(cardContainer)
    console.log(cardContainer)
    cardContainer.className = "card"
    let cardBack = document.createElement('div')
    cardBack.className = ".card__face--back"
    let card = document.createElement('div')
    card.className = 'card__face--front'



        let figure = document.createElement('figure')
        let caption = document.createElement('figcaption')
        let image = document.createElement('img')
        cardContainer.appendChild(card)
        cardContainer.appendChild(cardBack)

        let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
        caption.textContent = upperName
        if (pokeData.id !== 0) {
            image.src = `./Images/${pokeData.imageID}${upperName}.png`
        } else {
            image.src = `./Images/Pokeball.png`
        }

        figure.appendChild(image)
        figure.appendChild(caption)
        card.appendChild(figure)
        // card.appendChild(image)
        // card.appendChild(cname)
        // mainContainer.appendChild(card)
    }

    pokemon.forEach(singleMon => {
        fetch(singleMon.url)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                createPokeCard(matchIdToImage(myJson))
            })
    })

    function matchIdToImage(aPokemon) {
        if (aPokemon.id === 0) {
            aPokemon.imageID = 0
        }
        if (aPokemon.id < 10) {
            aPokemon.imageID = '00' + aPokemon.id
        }
        if (aPokemon.id > 9 && aPokemon.id < 100) {
            aPokemon.imageID = '0' + aPokemon.id
        }
        if (aPokemon.id > 99) {
            aPokemon.imageID = aPokemon.id
        }
        if (aPokemon.name === "mr-mime") {
            aPokemon.name = "mr. Mime"
        }
        let dash = aPokemon.name.indexOf('-')
        if (dash !== -1) {
            aPokemon.name = aPokemon.name.slice(0, dash)
        }
        aPokemon.name = aPokemon.name.charAt(0).toUpperCase() + aPokemon.name.slice(1)
        return aPokemon
    }

    function fetchSinglePokemon(id) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(function (response) {
                return response.json()
            })
            .then(function (retrievedPokemon) {
                createPokeCard(matchIdToImage(retrievedPokemon))
            })
    }

    const newPokemonButton = document.querySelector('.button')

    newPokemonButton.addEventListener('click', function () {
        let newPokeName = prompt('Enter the name of your new pokemon')
        fetchSinglePokemon(newPokeName)
        //createPokeCard(new Pokemon(newPokeName))
    });


    


