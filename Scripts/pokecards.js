import { pokemon } from '../data/pokemon.js'

// console.log(pokemon)

// class Pokemon {
//     constructor()
// }

const mainContainer = document.querySelector('.container')

function createPokeCard(pokeData) {
    console.log(pokeData.id)
    let card = document.createElement('div')
    card.className = 'box'
    let figure = document.createElement('figure')
    let caption = document.createElement('figcaption')
    let image = document.createElement('img')
    let cname = document.createElement('p')
    cname.textContent = pokeData.cname
    console.log(pokeData.cname)

    let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
    caption.textContent = upperName
    image.src = `../Images/${pokeData.id}${upperName}.png`
    figure.appendChild(image)
    figure.appendChild(caption)
    card.appendChild(figure)
    // card.appendChild(image)
    card.appendChild(cname)
    mainContainer.appendChild(card)
}

pokemon.forEach(singleMon => {
    fetch (singleMon.url)
    .then(function(response) {
        return response.json();
        // createPokeCard(myJson)
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

    // name.textContent = pokedata.name
    // image.src = pokedata.sprites.front_default
    // card.appendChild(name)
    // card.appendChild(image)
    // mainContainer.appendChild(card)
// }