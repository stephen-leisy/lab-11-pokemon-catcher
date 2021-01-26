// import functions and grab DOM elements
import { getRandomPokemon, findPokemonByID } from './app-utils.js';
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
let gameCounter = 0;

export function setThreePokemon() {

    gameCounter++;

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

    incrementEncounterCounter(pokeOne.id);
    incrementEncounterCounter(pokeTwo.id);
    incrementEncounterCounter(pokeThree.id);







    const div = document.getElementById('pokemon-window');
    div.textContent = '';

    div.append(img1, img2, img3);
}

setThreePokemon();





function matchPokeImage(boogerPokemon) {
    const pokemonImage = document.createElement('img');
    pokemonImage.src = boogerPokemon.url_image;
    pokemonImage.classList.add('poke-class');

    pokemonImage.addEventListener('click', () => {
        caughtCounter(boogerPokemon.id);

        if (gameCounter < 10) {
            setThreePokemon();
        } else {
            window.location = 'results';
        }
    });

    return pokemonImage;
}

export function getPokeStats() {
    let stats = JSON.parse(localStorage.getItem(POKESTATS));
    if (!stats) {
        stats = [];
        const stringyPokeStats = JSON.stringify(POKESTATS);
        localStorage.setItem([], stringyPokeStats);
    }
    return stats;

}

export function setPokeStats(newStats) {
    let newStringStats = JSON.stringify(newStats);
    localStorage.setItem(POKESTATS, newStringStats);
}

export function incrementEncounterCounter(id) {
    const stats = getPokeStats(id);

    const specificPoke = findPokemonByID(stats, id);

    if (!specificPoke) {
        const newPokeStat = {
            id: id,
            seen: 1,
            caught: 0,
        };
        stats.push(newPokeStat);
    } else {
        specificPoke.seen++;
    }
    setPokeStats(stats);

}

export function caughtCounter(id) {
    const stats = getPokeStats();

    const specificPoke = findPokemonByID(stats, id);
    specificPoke.caught++;
    setPokeStats(stats);
}




