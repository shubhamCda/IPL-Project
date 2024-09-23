import fs from 'fs';
import matches from '../data/matches.json' assert { type: 'json'};


//To calculate number of matches played per year for all the years in IPL.

function matches_per_year() {
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

const matches_per_season_count = matches_per_year();


fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/1_matches_per_year.json', JSON.stringify(matches_per_season_count, null, 2));