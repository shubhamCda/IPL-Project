import matches from "../../data/matches.json" assert { type:'json' };
import fs from 'fs';

const player_of_match_count = matches.reduce((data, { season, player_of_match }) =>{
    if (!data[season]) {
        data[season] = {};
    }else{
        data[season][player_of_match] = (data[season][player_of_match] || 0) + 1;
    }
    return data;
}, {});

// console.log(player_of_match_count);

const player_of_match_per_season = Object.entries(player_of_match_count).reduce((data, [ season, player_data ]) =>{
    data[season] = {};

    const player_name = Object.keys(player_data).reduce((max_title, player) =>
        player_data[max_title] > player_data[player] ? max_title : player , Object.keys(player_data)[0]);

    data[season][player_name] = player_data[player_name];
    return data;
}, {});

console.log(player_of_match_per_season);

