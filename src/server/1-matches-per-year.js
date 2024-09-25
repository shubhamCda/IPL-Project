import fs from 'fs';
import matches from '../data/matches.json' assert { type: 'json'};


//To calculate number of matches played per year for all the years in IPL.

export function matches_per_year() {
    let matches_count = {};

    for (let i = 0; i < matches.length; i++) {
        const seasons = matches[i]['season'];
        
        
        if (seasons in matches_count) {
            matches_count[seasons] += 1;
        }else{
            matches_count[seasons] = 1;
        }
        
    }
    return matches_count;
}




