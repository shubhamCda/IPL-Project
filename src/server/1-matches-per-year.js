import fs from 'fs';
import matches from '../data/matches.json' assert { type: 'json'};


function matchesPerYear() {
    let matchesCount = {};

    for (let i = 0; i < matches.length; i++) {
        const seasons = matches[i]['season'];
        
        
        if (seasons in matchesCount) {
            matchesCount[seasons] += 1;
        }else{
            matchesCount[seasons] = 1;
        }
        
    }
    return matchesCount;
}

console.log(matchesPerYear());


