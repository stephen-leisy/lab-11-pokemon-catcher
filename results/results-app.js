import { findPokemonByID } from '../app-utils.js';
import { getPokeStats } from '../utils.js';

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, { //eslint-disable-line
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
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



