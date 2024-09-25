import deliveries from '../data/deliveries.json' assert { type: 'json'};

// to get the bowler stats including balls and runs in super over
function super_over_balls_and_runs() {
    let  bowlers_obj = {};

    try {
        for (let index = 0; index < deliveries.length; index++) {
            const { is_super_over, total_runs, noball_runs, wide_runs, bowler } = deliveries[index];
    
            if (is_super_over !== '0') {
                if (!bowlers_obj[bowler]) {
                    bowlers_obj[bowler] = {'totalRuns': 0, 'balls': 0};
                    bowlers_obj[bowler]['totalRuns'] = parseInt(total_runs);
    
                    if (noball_runs === '0' && wide_runs === '0') {
                        bowlers_obj[bowler]['balls']++;
                    }
    
    
                }else{
                    if (total_runs !== '0') {
                        bowlers_obj[bowler]['totalRuns'] += parseInt(total_runs);
                        if (noball_runs === '0' && wide_runs === '0') {
                            bowlers_obj[bowler]['balls']++;
                        }
                    }
                }
            }
            
        }
        return bowlers_obj;
    } catch (error) {
        console.error("Error while processing the bowler stats including balls and runs in super over: ", error);
        return {};
    }
}


// to get the bowler with the best economy in super overs
export function super_over_economy() {
    let balls_and_runs_obj = super_over_balls_and_runs();

    let bowlers_economy = {};

    try {
        for (let bowler in balls_and_runs_obj){
            let bowlers = balls_and_runs_obj[bowler];
            let economy = bowlers.totalRuns / (bowlers.balls / 6);
            bowlers_economy[bowler] = economy;
            
        }
        
        // return bowlerEconomy;
    
        let result = Object.entries(bowlers_economy).sort(([,a],[,b]) => {
            return a - b;
        }).slice(0,1);
    
       
    
        return result;
    } catch (error) {
        console.error("Error while processing the bowler with the best economy in super overs: ", error);
        return {};
    }
}








