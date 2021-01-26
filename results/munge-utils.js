export function makeSeenArray(resultsArray) {
    const seenArray = [];

    for (const item of resultsArray) {
        seenArray.push(item.seen);

    }
    return seenArray;
}

export function makeCaughtArray(resultsArray) {
    const caughtArray = [];

    for (const item of resultsArray) {
        caughtArray.push(item.caught);

    }
    return caughtArray;
}

export function makeNameArray(resultsArray) {
    const nameArray = [];

    for (const item of resultsArray) {
        nameArray.push(item.name);

    }
    return nameArray;
}