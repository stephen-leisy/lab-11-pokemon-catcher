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
                backgroundColor: 'pink',
                borderColor: '#00a896',
                borderWidth: 2,
                data: makeSeenArray(pokeStats)
            },
            {
                label: 'times caught',
                backgroundColor: '#caffbf',
                borderColor: '#ffacc5',
                borderWidth: 2,
                data: makeCaughtArray(pokeStats)
            }
        ]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }],
            // create x axis with step size 1 to show integers instead of ugly decimals
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }]
        }

    }
});

// const refreshButton = document.getElementById('clear-session-button');
const refreshButton = document.createElement('button');
refreshButton.textContent = `REFRESH YOUR CATCH`;

const resultDiv = document.getElementById('results-window');



refreshButton.addEventListener('click', () => {
    localStorage.removeItem('POKESTATS', []);
    window.location = '../index.html';
});

resultDiv.append(refreshButton);





