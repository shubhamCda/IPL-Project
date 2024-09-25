import matches from '../data/matches.json' assert { type: 'json'};


// to get a player who has won the highest number of Player of the Match awards for each season
export function player_of_match_for_season() {
    let player_of_match = {};

    try {
        for (let index = 0; index < matches.length; index++) {
            const { season, player_of_match} = matches[index];
                    
            if (!player_of_match[season]) {
                
                player_of_match[season] = {};
    
                player_of_match[season][player_of_match] = 1;
                                  
            
            }else{
    
                if (player_of_match[season][player_of_match]) {
                    player_of_match[season][player_of_match] += 1;
                }else{
                    player_of_match[season][player_of_match] = 1;
                }
            }
    
            
            
        }
        const seasonKeys =  Object.keys(player_of_match);
        
        
        for (let index = 0; index < seasonKeys.length; index++) {
            let max_value = 0;
            let man_of_season = "";
            for (let key in player_of_match[seasonKeys[index]]) {
                if (max_value < player_of_match[seasonKeys[index]][key]) {
                    max_value = player_of_match[seasonKeys[index]][key];
                    man_of_season = key;
                }
                
            }
            player_of_match[seasonKeys[index]] = man_of_season;
            
            
        }
        
        return player_of_match;
    } catch (error) {
        console.error("Error while processing Find a player who has won the highest number of Player of the Match awards for each season : ", error);
        return {};
    }

}

