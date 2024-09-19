import deliveries from '../data/deliveries.json' assert {type: 'json'};

import matches from '../data/matches.json' assert {type: 'json'};



function matchAndTossWinner() {
    let resultObj = {};

    for (let index = 0; index < matches.length; index++) {
        
        const { toss_winner, winner} = matches[index];

        if (toss_winner === winner) {
            if (resultObj[toss_winner]) {
                
                resultObj[toss_winner] += 1;
            }else{
                resultObj[toss_winner] = 1;
            }
        }      
        
    }
    return resultObj;
}

console.log(matchAndTossWinner());
