import { films } from './films.js'

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
// let foo = document.querySelector('.title')
// let bar= document.querySelector('.crawl')
// //check both above lines
// titleElement.textContent = films[0].title
// crawlElement.textContent = films[0].opening_crawl
// //check both above lines