// import functions and grab DOM elements
import { getRandomPokemon } from './app-utils.js';
import pokemon from './data.js';
// initialize state

// set event listeners to update state and DOM

const POKESTATS = 'POKESTATS';

// const pokeStats = [{
//     id: 1;
//     name: Pikachu;
//     caught: 2;
//     seen: 5
// }
// ];


export function setThreePokemon() {
    let pokeOne = getRandomPokemon();
    let pokeTwo = getRandomPokemon();
    let pokeThree = getRandomPokemon();

    while (pokeOne.id === pokeTwo.id || pokeTwo.id === pokeThree.id || pokeOne.id === pokeThree.id) {
        pokeOne = getRandomPokemon();
        pokeTwo = getRandomPokemon();
        pokeThree = getRandomPokemon();
    }


    const img1 = matchPokeImage(pokeOne);
    const img2 = matchPokeImage(pokeTwo);
    const img3 = matchPokeImage(pokeThree);


    const div = document.getElementById('pokemon-window');
    div.textContent = '';

    div.append(img1, img2, img3);
}

setThreePokemon();


function matchPokeImage(boogerPokemon) {
    const pokemonImage = document.createElement('img');
    pokemonImage.src = boogerPokemon.url_image;

    return pokemonImage;
}