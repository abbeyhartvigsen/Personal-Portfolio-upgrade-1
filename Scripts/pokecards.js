import { pokemon } from '../data/pokemon.js'

console.log(pokemon)

class Pokemon {
    constructor(name) {
        this.id = 0,
            this.name = name
    }
}



const mainContainer = document.querySelector('.container')

function createPokeCard(pokeData) {
    console.log(pokeData.id)
    let card = document.createElement('div')
    card.className = 'box'
    let figure = document.createElement('figure')
    let caption = document.createElement('figcaption')
    let image = document.createElement('img')
    // let cname = document.createElement('p')



    let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
    caption.textContent = upperName
    if (pokeData.id !== 0) {
        image.src = `../Images/${pokeData.id}${upperName}.png`
    } else {
        image.src = `../Images/Pokeball.png`
    }

    figure.appendChild(image)
    figure.appendChild(caption)
    card.appendChild(figure)
    // card.appendChild(image)
    // card.appendChild(cname)
    mainContainer.appendChild(card)
}

// pokemon.forEach(singleMon => {
//     fetch (singleMon.url)
//     .then(function(response) {
//         return response.json();
//         // createPokeCard(myJson)
//     })

//     .then(function(myJson) {
//         console.log(myJson);
//     })
// })

function fetchSinglePokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(function (response) {
            return response.json()
        })
    .then(function(retrievedPokemon) {
        console.log(typeof(retrievedPokemon.id))
        if(retrievedPokemon.id < 10) {
            retrievedPokemon.imageID = "00" + retrievedPokemon.id
        }
        if(retrievedPokemon.id > 9 && retrievedPokemon.id < 100) {
            retrievedPokemon.imageID = "0" + retrievedPokemon.id
        }
        if(retrievedPokemon.id > 99) {
            retrievedPokemon.imageID = retrievedPokemon.id
        }
        retrievedPokemon.name = retrievedPokemon.name.charAt(0).toUpperCase() + retrievedPokemon.name.slice(1)
        createPokeCard(retrievedPokemon)
    })
}

const newPokemonButton = document.querySelector('button')

newPokemonButton.addEventListener('click', function () {
    let newPokeName = prompt('Enter the name of your new pokemon')
    createPokeCard(new Pokemon(newPokeName))
});



