import pokemon from './data.js';
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