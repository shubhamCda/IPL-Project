import deliveries from '../data/deliveries.json' assert { type: 'json'};
import matches from '../data/matches.json' assert { type: 'json'};


//get match id's for season 2015
function get_2015_match_idx() {
    let match_idx_2015 = [];

    try {
        for (let index = 0; index < matches.length; index++) {
            const { id, season } = matches[index];
    
            if (season == 2015) {
    
                match_idx_2015.push(id);
            }
    
        }
        return match_idx_2015;
    } catch (error) {
        console.error("Error while processing match id's for season 2015 : ", error);
        return [];
    }
}



//get the runs and balls of all the bowlers from season 2015
function all_economical_bowlers() {
    let all_bowlers = {};


    const match_idx = get_2015_match_idx()
    const match_idx_set = new Set(match_idx);

    try {
        for (let index = 0; index < deliveries.length; index++) {
            const { total_runs, bowler, match_id, wide_runs, noball_runs } = deliveries[index];
    
            if (match_idx_set.has(match_id)) {
    
                if (all_bowlers[bowler]) {
                    all_bowlers[bowler]['Total_Runs'] += Number.parseInt(total_runs);
    
                    if (noball_runs === '0' && wide_runs === '0') {
    
                        all_bowlers[bowler]['Balls'] += 1;
                    }
    
    
                } else {
                    all_bowlers[bowler] = {};
                    all_bowlers[bowler] = {
                        Total_Runs: 0,
                        Balls: 0
                    }
                }
    
            }
    
        }
        return all_bowlers;
    
    } catch (error) {
        console.error("Error while processing runs and balls of all the bowlers from season 2015 : ", error);
        return {};
    }
}

// Economy rate of top 10 economical bowlers in the year 2015
export function top_10_economical_bowlers() {
    let economical_bowlers = all_economical_bowlers();
    
    let bowlers_keys = Object.keys(economical_bowlers)
    

    let economy_rate = [];
    let result = [];

    try {
        for (let index = 0; index < bowlers_keys.length; index++) {
            // console.log(bowlersKeys[index]);
            // console.log(economicalBowlers[bowlersKeys[index]]);
    
            const { Total_Runs, Balls } = economical_bowlers[bowlers_keys[index]];
    
            // console.log(`TotalRuns: ${Total_Runs} and Ball: ${Balls}`);
    
            const economy = (Total_Runs / (Balls / 6)).toFixed(2);
            // console.log(economy);
    
    
            economy_rate.push({ bowler: bowlers_keys[index], economy: parseFloat(economy) })
    
    
        }
        economy_rate.sort((a, b) => a.economy - b.economy);
        // console.log(economyRate);
    
        result.push(economy_rate.slice(0, 10));
    
        return result;
    } catch (error) {
        console.error("Error while processing top 10 economical bowlers in the year 2015 : ", error);
        return [];
    }

    

}



