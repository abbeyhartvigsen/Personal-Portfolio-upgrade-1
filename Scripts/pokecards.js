import { pokemon } from '../data/pokemon.js'

console.log(pokemon)

const mainContainer = document.querySelector('.container')

function createPokeCard(pokeData) {
    let card = document.createElement('div')
    let name = document.createElement('h2')
    let image = document.create('img')

    let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1
    title.textContent = upperName
    image.src = pokeData.sprites.front_shiny
    card.appendChild(name)
    card.appendChild(image)
    mainContainer.appendChild(card


pokemon.forEach(singleMon => {
    fetch (singleMon.url)
    .then(function(response) {
        return response.json();
        createPokeCard(myJson)
    })
    
    .then(function(myJson) {
        console.log(myJson);
    })
})



// console.log(pokemon)

// const mainContainer = document.querySelector('.container')

// function createPokeCard(pokedata) {
//     let card = document.createElement('div')
//     let name = document.createElement('p')
//     let image = document.create('img')

    name.textContent = pokedata.name
    // image.src = pokedata.sprites.front_default
    // card.appendChild(name)
    // card.appendChild(image)
    // mainContainer.appendChild(card)
}