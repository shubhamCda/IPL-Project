import matches from '../data/matches.json' assert { type: 'json'};


// to get a player who has won the highest number of Player of the Match awards for each season
export function player_of_match_for_season() {
    let man_of_series = {};

    try {
        for (let index = 0; index < matches.length; index++) {
            const { season, player_of_match} = matches[index];
                    
            if (!man_of_series[season]) {
                
                man_of_series[season] = {};
    
                man_of_series[season][player_of_match] = 1;
                                  
            
            }else{
    
                if (man_of_series[season][player_of_match]) {
                    man_of_series[season][player_of_match] += 1;
                }else{
                    man_of_series[season][player_of_match] = 1;
                }
            }
    
            
            
        }
        const seasonKeys =  Object.keys(man_of_series);
        
        
        for (let index = 0; index < seasonKeys.length; index++) {
            let max_value = 0;
            let man_of_season = "";
            for (let key in man_of_series[seasonKeys[index]]) {
                if (max_value < man_of_series[seasonKeys[index]][key]) {
                    max_value = man_of_series[seasonKeys[index]][key];
                    man_of_season = key;
                }
                
            }
            man_of_series[seasonKeys[index]] = man_of_season;
            
            
        }
        
        return man_of_series;
    } catch (error) {
        console.error("Error while processing Find a player who has won the highest number of Player of the Match awards for each season : ", error);
        return {};
    }

}

