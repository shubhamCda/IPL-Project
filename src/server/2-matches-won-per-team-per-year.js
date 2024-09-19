import fs from 'fs';
import matches from '../data/matches.json' assert { type: 'json'};

function matchesWonPerTeamYear() {
    let winnerCount = {};

    for (let i = 0; i < matches.length; i++) {
        const seasons = matches[i]['season'];
        const winners = matches[i]['winner'];

        
        
        if (seasons in winnerCount) {
            if (winnerCount[seasons][winners]) {
                winnerCount[seasons][winners] += 1;
            }else{
                if (winners === '') {
                    continue;
                }
                winnerCount[seasons][winners] = 1;
            }
            
        }else{
            winnerCount[seasons] = {};
        }
    }
    console.log(winnerCount);
}
matchesWonPerTeamYear();


