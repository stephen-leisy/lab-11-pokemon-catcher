import pokemon from './data.js';
import { caughtCounter, incrementEncounterCounter } from './utils.js';

let gameCounter = 0;

export function findPokemonByID(array, ID) {
    for (const item of array) {
        if (ID === item.id) {
            return item;
        }
    }

}

export function getRandomPokemon() {
    const randomIndexNumber = Math.floor(Math.random() * pokemon.length);
    return pokemon[randomIndexNumber];
}

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

    const div1 = document.getElementById('pokemon-window');
    //eslint-disable-line
    div1.textContent = '';
    div1.append(img1, img2, img3);

}

function matchPokeImage(boogerPokemon) {
    const pokemonImage = document.createElement('img');
    pokemonImage.src = boogerPokemon.url_image;
    pokemonImage.classList.add('poke-class');

    pokemonImage.addEventListener('click', () => {
        caughtCounter(boogerPokemon.id);

        if (gameCounter < 10) {
            setThreePokemon();
        } else {
            window.location = './results';
        }
    });

    return pokemonImage;
}