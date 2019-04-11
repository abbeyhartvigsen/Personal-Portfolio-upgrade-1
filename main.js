// var swCards = {'luke': 'tattooine', 'Jabba': 'greenworld', 'han': 'healing pool'};

// for (var key in swCards) {
//   console.log("Card Front " + key + " Card Back " + myArray[key]);
// }




import { films } from './Data/films.js'
import { people } from './Data/people.js'
import {planets} from './Data/planets.js'
//should I add another api too?
//should I put swpeople.js in this file?

const intro = document.querySelector('.intro')

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

//next section Ben helped me with

// var card = document.querySelector('.card');
// card.addEventListener('click', function () {
//   card.classList.toggle('is-flipped');
//   console.log("click")
// });
// const cont = document.querySelector('.container')
// console.log(cont)

// for (let i = 0; i < 5; i++) {
//   console.log("loop")
//   let cardCont = document.createElement('div')//create DOM element
//   cardCont.addEventListener('click', function () {
//     cardCont.classList.toggle('is-flipped');
//     console.log("click")

//   });

//   cardCont.className = "card"
//   cont.appendChild(cardCont)
//   let front = document.createElement('div')
//   let back = document.createElement('div')
//   front.textContent = "Front"
//   back.textContent = "Front"

//   front.className = 'card__face card__face--front'
//   back.className = 'card__face card__face--back'

//   cardCont.appendChild(front)
//   cardCont.appendChild(back)


  //maybe delete after this
// let filmCharacters = films.filter(newHope => newHope.title == "A New Hope")
// console.log(filmCharacters)

// let char = 

// console.log(char)



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

// var peopleArray = peopleArray.filter(callback(element[, index[, array]])[, thisArg])
// let peopleArray = people.filter(peopleFunction1=> peopleFunction1 ["films"] == "https://swapi.co/api/films/1/");
// console.log(peopleArray)

//try map people through films 
// var new_array = arr.map => (peopleArray) {
  // Return element for new_array
// }[, thisArg])

// peopleArray.map(element => {
//   return peopleArray.length("https://swapi.co/api/films/2/");
// }

// let mainContainer=document.querySelector('.container')
// const peopleArray = people.map((people) => {
//   let newPeopleArray = document.createElement('.div')
//   newPeopleArray.textContent = people
// })

// return peopleArray.slice("https://swapi.co/api/films/2/") 

// console.log(peopleArray)

// peopleArray.forEach(people =>
  
// })

// let dog = {
//   name: "Spot",
//   numLegs: 4,
//   saysLegs: function() {
//     return "This dog has " + this.numLegs + " legs.";
//     }
// };
// console.log(dog.saysLegs())