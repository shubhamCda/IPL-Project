import deliveries from '../data/deliveries.json' assert { type: 'json'};

import matches from '../data/matches.json' assert { type: 'json'};



// console.log(deliveries['match_id']);
// console.log(matches[0].season);


function get_2016_MatchID() {
    let matchIdx = [];

    for (let index = 0; index < matches.length; index++) {
        if (matches[index].season == 2016){
            matchIdx.push(matches[index].id);
        }
        
    }
    return matchIdx;
}

// console.log(getMatchID());

function extrasConcededPerTeamYear_2016(params) {
    let extras_2016 = {}

    const matcheIDX = new Set(get_2016_MatchID());

    
    for (let index = 0; index < deliveries.length; index++) {
        const { match_id, bowling_team, extra_runs } = deliveries[index];
        // console.log(`id: ${match_id}, bowling: ${bowling_team} and extras: ${extra_runs}`);
        
        if (matcheIDX.has(match_id)) {
            if (extras_2016[bowling_team]) {
                extras_2016[bowling_team] += Number.parseInt(extra_runs);
            } else {
                extras_2016[bowling_team] = Number.parseInt(extra_runs);
            } 
        }         
    }
    return extras_2016;
}

console.log(extrasConcededPerTeamYear_2016());
