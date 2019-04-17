// var swCards = {'luke': 'tattooine', 'Jabba': 'greenworld', 'han': 'healing pool'};

// for (var key in swCards) {
//   console.log("Card Front " + key + " Card Back " + myArray[key]);
// }




import { films } from './Data/films.js'
import { people } from './Data/people.js'
import {planets} from './Data/planets.js'
//should I add another api too?
//should I put swpeople.js in this file?

const intro = document.querySelector('#starwars')

films.sort((a,b) => (a.episode_id > b.episode_id) ? 1 : -1 )

films.forEach(film => {
    let tile = document.createElement('div')
    // does tile need to be changed to title?

    let titleElement = document.createElement('h1')
  tile.appendChild(titleElement)
  // does tile need to be changed to title?
  titleElement.textContent = film.title

  let crawlElement = document.createElement('div')
  tile.appendChild(crawlElement)
  // does tile need to be changed to title?
  crawlElement.textContent = film.opening_crawl

  intro.appendChild(tile)
})

const allHomeworlds = people.map(person => {
  let foundWorld = planets.find (planet => {
    return planet.url === person.homeworld
  })
  // let imageURL = getLastNumber(person.url)
  //why didn't let imageURL = getLastNumber(person.url) work
  return {
    name : person.name,
    home: foundWorld.name
    // imagePath: `https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`,
    //why didn't imagePath: `https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`, work
  }
})

console.log(allHomeworlds)

const mainContainer = document.createElement('div')
mainContainer.className='container'

allHomeworlds.forEach((person) => {
  let personElement = document.createElement('div')
  // personDiv.classnameName = 'box'
  let planetElement = document.createElement('p')

  personElement.className = 'box'
  personElement.textContent = person.name
  planetElement.textContent = person.home

  personElement.appendChild(planetElement)
  mainContainer.appendChild(personElement)
})

document.body.appendChild(mainContainer)

