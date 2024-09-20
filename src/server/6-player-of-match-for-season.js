import deliveries from '../data/deliveries.json' assert { type: 'json'};
import fs from 'fs';
import matches from '../data/matches.json' assert { type: 'json'};



function player_Of_Match_for_season() {
    let playerOfMatch = {};

    for (let index = 0; index < matches.length; index++) {
        const { season, player_of_match} = matches[index];
        // console.log("I'm here");
        
        if (!playerOfMatch[season]) {
            // console.log(playerOfMatch[season]);
            playerOfMatch[season] = {};

            playerOfMatch[season][player_of_match] = 1;
                              
        
        }else{

            if (playerOfMatch[season][player_of_match]) {
                playerOfMatch[season][player_of_match] += 1;
            }else{
                playerOfMatch[season][player_of_match] = 1;
            }
        }

        
        
    }
    const seasonKeys =  Object.keys(playerOfMatch);
    // console.log(seasonKeys);
    
    for (let index = 0; index < seasonKeys.length; index++) {
        let max_value = 0;
        let manOfSeason = "";
        for (let key in playerOfMatch[seasonKeys[index]]) {
            if (max_value < playerOfMatch[seasonKeys[index]][key]) {
                max_value = playerOfMatch[seasonKeys[index]][key];
                manOfSeason = key;
            }
            
        }
        playerOfMatch[seasonKeys[index]] = manOfSeason;
        
        
    }
    
    return playerOfMatch;

}

// console.log(playerOfMatch());

const man_of_the_match = player_Of_Match_for_season();


fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/6_player_of_match_for_season.json', JSON.stringify(man_of_the_match, null, 2));