import deliveries from '../data/deliveries.json' assert { type: 'json'};
import fs from 'fs';


function super_over_balls_and_runs() {
    let  bowlers_obj = {};

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
}

// console.log(super_over_balls_and_runs());

function super_over_economy() {
    let balls_and_runs_obj = super_over_balls_and_runs();

    let bowlers_economy = {};

    for (let bowler in balls_and_runs_obj){
        let bowlers = balls_and_runs_obj[bowler];
        let economy = bowlers.totalRuns / (bowlers.balls / 6);
        bowlers_economy[bowler] = economy;
        
    }
    
    // return bowlerEconomy;

    let result = Object.entries(bowlers_economy).sort(([,a],[,b]) => {
        return a - b;
    }).slice(0,1);

    // console.log(result.flatMap((item) => item));

    return result;
}

// console.log(super_over_economy());

const economy_rate_of_super_over = super_over_economy();


fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/9_economy_of_bowlers_in_super_over.json', JSON.stringify(economy_rate_of_super_over, null, 2));




// let arr = [1,2,3,4,5,6];

// arr.sort((a,b) => {
//     return b-a;
// })

// console.log(arr);