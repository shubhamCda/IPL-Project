import deliveries from '../data/deliveries.json' assert { type: 'json'};
import matches from '../data/matches.json' assert { type: 'json'};


//To get the match ID's from season 2016 
function get_2016_match_id() {
    let match_idx_2016 = [];

    try {
        for (let index = 0; index < matches.length; index++) {
            if (matches[index].season == 2016){
                match_idx_2016.push(matches[index].id);
            }
            
        }
        return match_idx_2016;
    } catch (error) {
        console.error("Error while processing match ID's from season 2016 : ", error);
        return [];
    }
}


// Extra runs conceded per team in the year 2016
export function extras_conceded_per_team_per_year_2016() {
    let extras_2016 = {}

    try {
        const match_idx = new Set(get_2016_match_id());

    
    for (let index = 0; index < deliveries.length; index++) {
        const { match_id, bowling_team, extra_runs } = deliveries[index];
                
        if (match_idx.has(match_id)) {
            if (extras_2016[bowling_team]) {
                extras_2016[bowling_team] += Number.parseInt(extra_runs);
            } else {
                extras_2016[bowling_team] = Number.parseInt(extra_runs);
            } 
        }         
    }
    return extras_2016;
    } catch (error) {
        console.error("Error while processing Extra runs conceded per team in the year 2016 : ", error);
        return {};
    }
}
