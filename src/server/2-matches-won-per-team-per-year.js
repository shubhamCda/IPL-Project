import fs from 'fs';
import matches from '../data/matches.json' assert { type: 'json'};

function matches_won_per_team_per_year() {
    let winner_Count = {};

    for (let i = 0; i < matches.length; i++) {
        const seasons = matches[i]['season'];
        const winners = matches[i]['winner'];

        
        
        if (seasons in winner_Count) {
            if (winner_Count[seasons][winners]) {
                winner_Count[seasons][winners] += 1;
            }else{
                if (winners === '') {
                    continue;
                }
                winner_Count[seasons][winners] = 1;
            }
            
        }else{
            winner_Count[seasons] = {};
            winner_Count[seasons][winners] = 1;
        }
    }
    // console.log(winner_Count);
    return winner_Count;
}
// matchesWonPerTeamYear();

const per_year_winning_count_team = matches_won_per_team_per_year();


fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/2_matches_won_per_team_per_year.json', JSON.stringify(per_year_winning_count_team, null, 2));