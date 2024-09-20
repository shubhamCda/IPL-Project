import deliveries from '../data/deliveries.json' assert { type: 'json'};
import fs from 'fs';
import matches from '../data/matches.json' assert { type: 'json'};



// console.log(deliveries['match_id']);
// console.log(matches[0].season);


function get_2016_Match_ID() {
    let match_Idx_2016 = [];

    for (let index = 0; index < matches.length; index++) {
        if (matches[index].season == 2016){
            match_Idx_2016.push(matches[index].id);
        }
        
    }
    return match_Idx_2016;
}

// console.log(get_2016_Match_ID());

function extras_conceded_per_team_per_year_2016(params) {
    let extras_2016 = {}

    const match_IDX = new Set(get_2016_Match_ID());

    
    for (let index = 0; index < deliveries.length; index++) {
        const { match_id, bowling_team, extra_runs } = deliveries[index];
        // console.log(`id: ${match_id}, bowling: ${bowling_team} and extras: ${extra_runs}`);
        
        if (match_IDX.has(match_id)) {
            if (extras_2016[bowling_team]) {
                extras_2016[bowling_team] += Number.parseInt(extra_runs);
            } else {
                extras_2016[bowling_team] = Number.parseInt(extra_runs);
            } 
        }         
    }
    return extras_2016;
}

// console.log(extras_conceded_per_team_per_year_2016());

const extras_2016_conceded_per_team = extras_conceded_per_team_per_year_2016();


fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/3_extra_runs_conceded_per_team_year_2016.json', JSON.stringify(extras_2016_conceded_per_team, null, 2));