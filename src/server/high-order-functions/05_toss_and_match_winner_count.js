import matches from '../../data/matches.json' assert {type: 'json'};
import fs from 'fs';



const toss_and_match_winner_count = matches.reduce((won, { toss_winner, winner }) =>{
    if (toss_winner === winner) {
        if (!won[winner]) {
            won[winner] = 1;
        } else {
            won[winner] += 1;
        }
    }
    return won;
},{});

// console.log(toss_and_match_winner_count);

fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output_02/05_toss_and_match_winners.json', JSON.stringify(toss_and_match_winner_count, null, 2));