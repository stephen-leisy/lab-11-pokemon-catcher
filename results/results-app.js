import { findPokemonByID } from '../app-utils.js';
import { getPokeStats } from '../utils.js';

const results = getPokeStats();
console.log(results);
const resultsDiv = document.getElementById('results-window');
const header = document.createElement('h1');
header.textContent = `You caught and saw these Pokemon`;

resultsDiv.append(header);
// console.log('hello world');
// export function setPokeResults() {

//     const div1 = document.getElementById('results-window');
//     const header = document.createElement('h1');


//     header.textContent = 'RESULTS';
//     // div.textContent = `Here's what you caught and saw`;
//     // const header = div.textContent;
//     console.log(header.textContent);
//     div.append(header);
//     return div;
// }



console.log('hello world');