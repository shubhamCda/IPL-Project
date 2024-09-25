import matches from '../data/matches.json' assert {type: 'json'};


// the number of times each team won the toss and also won the match
export function match_and_toss_winner() {
    let winners = {};

    try {
        for (let index = 0; index < matches.length; index++) {
        
            const { toss_winner, winner} = matches[index];
    
            if (toss_winner === winner) {
                if (winners[toss_winner]) {
                    
                    winners[toss_winner] += 1;
                }else{
                    winners[toss_winner] = 1;
                }
            }      
            
        }
        return winners;
    } catch (error) {
        console.error("Error while processing the number of times each team won the toss and also won the match : ", error);
        return {};
    }
}



