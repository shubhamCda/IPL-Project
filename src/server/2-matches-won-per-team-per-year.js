import matches from '../data/matches.json' assert { type: 'json'};

// Number of matches won per team per year in IPL.
export function matches_won_per_team_per_year() {
    let winner_count = {};
    try{

        for (let i = 0; i < matches.length; i++) {
            const seasons = matches[i]['season'];
            const winners = matches[i]['winner'];

            
            
            if (seasons in winner_count) {
                if (winner_count[seasons][winners]) {
                    winner_count[seasons][winners] += 1;
                }else{
                    if (winners === '') {
                        continue;
                    }
                    winner_count[seasons][winners] = 1;
                }
                
            }else{
                winner_count[seasons] = {};
                winner_count[seasons][winners] = 1;
            }
        }
        
        return winner_count;
    }
    catch (error){
        console.error("Error while processing matches per year data: ", error);
        return {};
    }
}


