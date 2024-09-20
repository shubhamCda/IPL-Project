import deliveries from '../data/deliveries.json' assert {type: 'json'};
import matches from '../data/matches.json' assert {type: 'json'};
import fs from 'fs';


function match_and_toss_winner() {
    let result_obj = {};

    for (let index = 0; index < matches.length; index++) {
        
        const { toss_winner, winner} = matches[index];

        if (toss_winner === winner) {
            if (result_obj[toss_winner]) {
                
                result_obj[toss_winner] += 1;
            }else{
                result_obj[toss_winner] = 1;
            }
        }      
        
    }
    return result_obj;
}

// console.log(match_and_toss_winner());

const winners = match_and_toss_winner();



fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/5_toss_and_match_won.json', JSON.stringify(winners, null, 2));