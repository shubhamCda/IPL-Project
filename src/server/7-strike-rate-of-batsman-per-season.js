import deliveries from '../data/deliveries.json' assert { type: 'json'};
import matches from '../data/matches.json' assert { type: 'json'};



//to get match id's with respect to all the seasons
function get_matches_idx() {
    let match_idx = {};

    try {
        
        for (let index = 0; index < matches.length; index++) {
            const { id, season } = matches[index];

            match_idx[id] = season;
        }
        return match_idx;
    } catch (error) {
        console.error("Error while processing the match id's with respect to all the seasons : ", error);
        return {};
    }

}

// to get the data of total runs and balls of the batsman
function player_info() {
    let match_idx = get_matches_idx();

    let batsman_data = {};

    try {
        for (let index = 0; index < deliveries.length; index++) {
            const { match_id, batsman, total_runs } = deliveries[index];
    
            let season = match_idx[match_id];
           
    
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
    
        return batsman_data;
    } catch (error) {
        console.error("Error while processing the data of total runs and balls of the batsman : ", error);
        return {};
    }
    
}


// to get the strike rate of a batsman for each season
export function batsman_strike_rate() {
    let player_data = player_info();
   
    let batsman_strike_rate = {}

    try {
        for(let season in player_data) {
  
            let data = player_data[season];
            batsman_strike_rate[season] = {};
            for (let player in data){
                const { totalRuns, balls } = data[player];
    
                let player_strike_rate = (totalRuns/balls) * 100;
    
                batsman_strike_rate[season][player] = player_strike_rate.toFixed(2);
    
        
                
    
            }
        }
      
        return batsman_strike_rate;
    } catch (error) {
        console.error("Error while processing the strike rate of a batsman for each season : ", error);
        return {};
    }
    
}



