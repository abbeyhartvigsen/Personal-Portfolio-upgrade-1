import { films } from './films.js'
 import { people } from './people.js'
//should I add another api too?
//should I put swpeople.js in this file?

const intro = document.querySelector('.intro')

films.sort((a,b) => (a.episode_id > b.episode_id) ? 1 : -1 )

films.forEach(film => {
    let tile = document.createElement('div')

    let titleElement = document.createElement('h1')
  tile.appendChild(titleElement)
  titleElement.textContent = film.title

  let crawlElement = document.createElement('div')
  tile.appendChild(crawlElement)
  crawlElement.textContent = film.opening_crawl

  intro.appendChild(tile)
})

// people.filter((currentValue, index, arr), thisValue)
// let peopleArray = people.filter(peopleFunction1=> peopleFunction1 ["films"] == "https://swapi.co/api/films/1/");
// console.log(peopleArray)

// peopleArray.forEach(peopleArray =>{
//   let players =document.createElement('div')

//   let players = document.createElement ('h1')
//   players.appendChild
//   console.log(peopleArray)
// } )

// let foo = document.querySelector('.title')
// let bar= document.querySelector('.crawl')
// //check both above lines
// titleElement.textContent = films[0].title
// crawlElement.textContent = films[0].opening_crawl
// //check both above lines

var peopleArray = peopleArray.filter(callback(element[, index[, array]])[, thisArg])
let peopleArray = people.filter(peopleFunction1=> peopleFunction1 ["films"] == "https://swapi.co/api/films/1/");
console.log(peopleArray)

