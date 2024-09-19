import deliveries from '../data/deliveries.json' assert { type: 'json'};

import matches from '../data/matches.json' assert { type: 'json'};




function get_matches_idx() {
    let match_idx = {};

    for (let index = 0; index < matches.length; index++) {
        const { id, season } = matches[index];

        match_idx[id] = season;
    }
    return match_idx;
}

// console.log(get_matches_idx());

function player_info() {
    let match_idx = get_matches_idx();
    // console.log(match_idx);
    let batsman_data = {};

    for (let index = 0; index < deliveries.length; index++) {
        const { match_id, batsman, total_runs } = deliveries[index];

        let season = match_idx[match_id];
        // console.log(season);

        if (batsman_data[season]) {
            if (batsman_data[season][batsman]) {
                batsman_data[season][batsman]['totalRuns'] += Number(total_runs);
                batsman_data[season][batsman]['balls'] += 1;
            } else {
                batsman_data[season][batsman] = {
                    totalRuns: 0,
                    balls: 0
                }
                batsman_data[season][batsman]['totalRuns'] += Number(total_runs);
                batsman_data[season][batsman]['balls'] += 1;
            }
        } else {
            batsman_data[season] = {};
            batsman_data[season][batsman] = {
                totalRuns: 0,
                balls: 0
            }
            batsman_data[season][batsman]['totalRuns'] += Number(total_runs);
            batsman_data[season][batsman]['balls'] += 1;

        }
    }
    // console.log(batsman_data);
    return batsman_data;
    
}

// player_info();

function batsman_strike_rate() {
    let player_data = player_info();
    // console.log(player_data);
    let batsman_strike_rate = {}

    for(let season in player_data) {
        // console.log(player_data[season]);
        let data = player_data[season];
        batsman_strike_rate[season] = {};
        for (let player in data){
            const { totalRuns, balls } = data[player];

            let player_strike_rate = (totalRuns/balls) * 100;

            batsman_strike_rate[season][player] = player_strike_rate.toFixed(2);

            // console.log(player_strike_rate);
            

        }
    }
    // console.log(batsman_strike_rate);
    return batsman_strike_rate;
    
}

console.log(batsman_strike_rate());
 