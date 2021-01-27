import { findPokemonByID } from './app-utils.js';
import pokemon from './data.js';

const POKESTATS = 'POKESTATS';
const ALLTIMESTATS = 'ALLTIMESTAS';

export function getPokeStats() {

    let stats = JSON.parse(localStorage.getItem(POKESTATS));
    if (!stats) {
        stats = [];
        const stringyPokeStats = JSON.stringify(POKESTATS);
        localStorage.setItem([], stringyPokeStats);
    }
    return stats;

}

export function getAllTimeStats() {
    let stats = JSON.parse(localStorage.getItem(ALLTIMESTATS));
    if (!stats) {
        stats = [];
        const stringyPokeStats = JSON.stringify(ALLTIMESTATS);
        localStorage.setItem([], stringyPokeStats);
    }
    return stats;
}

export function setPokeStats(newStats) {
    let newStringStats = JSON.stringify(newStats);
    localStorage.setItem(POKESTATS, newStringStats);
}

export function setAllTimeStats(pokeStats) {
    let stringPokeStats = JSON.stringify(pokeStats);
    localStorage.setItem(ALLTIMESTATS, stringPokeStats);
}
export function incrementEncounterCounter(id) {
    const stats = getPokeStats();

    const specificPoke = findPokemonByID(stats, id);

    if (!specificPoke) {
        const boogerPokemon = findPokemonByID(pokemon, id);
        const newPokeStat = {
            name: boogerPokemon.pokebase,
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
