import { pokemon } from '../data/pokemon.js'

// console.log(pokemon[0]["ability"])

class Pokemon {
    constructor(name) {
        this.id = 0,
            this.name = name
    }
}

// console.log(pokemon.filter(ability => ability["ability"]))
const mainContainer = document.querySelector('.Pokemon')
//what does this mean other than taking something from css?

// var card = document.querySelector('.card');
//is this right?
//what does this mean?
function createPokeCard(pokeData,abilityMon) {
    let cardContainer = document.createElement('div')

    cardContainer.addEventListener('click', function () {
        cardContainer.classList.toggle('is-flipped');
        // console.log("click")
    
      });
    mainContainer.appendChild(cardContainer)
    // console.log(cardContainer)
    cardContainer.className = "card"
    let cardBack = document.createElement('div')
    cardBack.className = "card__face--back"
    let card = document.createElement('div')
    card.className = 'card__face--front'



        let figure = document.createElement('figure')
        let caption = document.createElement('figcaption')
        let image = document.createElement('img')
        cardContainer.appendChild(card)
        cardContainer.appendChild(cardBack)
        let ability = document.createElement('p')

        
        // let nameIdx = pokeData.name
        // let pokeIdx = pokeData.indexOf()
        // console.log(pokeIdx)


        ability.textContent = "Ability: " + abilityMon



        cardBack.appendChild(ability)

        let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
        caption.textContent = upperName
        if (pokeData.id !== 0) {
            image.src = `../Images/${pokeData.imageID}${upperName}.png`
        } else {
            image.src = `../Images/Pokeball.png`
        }
        // console.log(pokemon.filter(ability => ability.name === upperName))


        figure.appendChild(image)
        figure.appendChild(caption)
        card.appendChild(figure)
        // card.appendChild(image)
        // card.appendChild(cname)
        // mainContainer.appendChild(card)
    }

    pokemon.forEach(singleMon => {
        let abilityName = singleMon.ability
        console.log(name)
        fetch(singleMon.url)
            .then(function (response) {
                
                return response.json();
            })
            .then(function (myJson) {
                createPokeCard(matchIdToImage(myJson),abilityName)

            })
    })
    function pokeBack(pokeArray) {
        let number = pokeArray.indexOf(pokeArray.name)
        console.log(number)
        return number
    }
    // pokeBack(pokemon)

    // console.log(pokemon.forEach(pokeBack(pokemon)))

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


    


