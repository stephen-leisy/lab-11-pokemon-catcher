// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { makeCaughtArray, makeNameArray, makeSeenArray } from "../results/munge-utils.js";

const test = QUnit.test;

const pokeStats = [
    { name: "caterpie", id: 14, seen: 1, caught: 0 },
    { name: "pidgey", id: 21, seen: 1, caught: 1 },
    { name: "bulbasaur", id: 1, seen: 1, caught: 0 },
    { name: "beedrill", id: 19, seen: 3, caught: 1 },
    { name: "charmander", id: 5, seen: 2, caught: 0 },
    { name: "blastoise", id: 12, seen: 1, caught: 0 },
    { name: "kakuna", id: 18, seen: 1, caught: 1 },
    { name: "charizard", id: 7, seen: 1, caught: 0 },
    { name: "weedle", id: 17, seen: 1, caught: 0 }
];

test('should take in pokeStats and return seen strings', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [1, 1, 1, 3, 2, 1, 1, 1, 1];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeSeenArray(pokeStats);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should take in pokeStats and return caught strings', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [0, 1, 0, 1, 0, 0, 1, 0, 0];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeCaughtArray(pokeStats);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
test('should take in pokeStats and return strings', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = ['caterpie', 'pidgey', 'bulbasaur', 'beedrill', 'charmander', 'blastoise', 'kakuna', 'charizard', 'weedle'];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeNameArray(pokeStats);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});