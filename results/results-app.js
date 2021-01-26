import { findPokemonByID } from '../app-utils.js';
import { getPokeStats } from '../utils.js';
import { makeCaughtArray, makeNameArray, makeSeenArray } from './munge-utils.js';

const pokeStats = getPokeStats();

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, { //eslint-disable-line
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: makeNameArray(pokeStats),
        datasets: [
            {
                label: `times seen`,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: makeSeenArray(pokeStats)
            },
            {
                label: 'times caught',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: makeCaughtArray(pokeStats)
            }
        ]
    },

    // Configuration options go here
    options: {}
});

// const results = getPokeStats();
// console.log(results);
// const resultsDiv = document.getElementById('results-window');
// const header = document.createElement('h1');
// header.textContent = `You caught and saw these Pokemon`;

// resultsDiv.append(header);



