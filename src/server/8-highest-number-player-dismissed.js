import deliveries from '../data/deliveries.json' assert { type: 'json'};



// to get the count of player dismissed by the same bowler
function player_dismissed() {
    let player_dismissed_obj = {};

    try {
        for (let index = 0; index < deliveries.length; index++) {
            const { player_dismissed, batsman, bowler } = deliveries[index];
            if (player_dismissed !== "") {
                if (!player_dismissed_obj[batsman]) {
                    player_dismissed_obj[batsman] = {};
                    player_dismissed_obj[batsman][bowler] = 1;
    
                } else {
                    if (!player_dismissed_obj[batsman][bowler]) {
                        player_dismissed_obj[batsman][bowler] = 1;
                    } else {
                        player_dismissed_obj[batsman][bowler] += 1;
                    }
                }
            }
    
        }
    
        return player_dismissed_obj;
    } catch (error) {
        console.error("Error while processing the count of player dismissed by the same bowler : ", error);
        return {};
    }
}


// to get the highest number of times one player has been dismissed by another player
export function max_times_player_dismissed() {
    let player_obj = player_dismissed();

    let dismissed_player = {};
    let max = 0;
    let bowler_name = "";
    let batsman_name = "";

   try {
        for (let batsman in player_obj) {
            let obj = player_obj[batsman];
            for (let bowler in obj) {
                if (max < obj[bowler]) {
                    max = obj[bowler];
                    batsman_name = batsman;
                    bowler_name = bowler;
                }
            }
        }
        dismissed_player[batsman_name] = {};
        dismissed_player[batsman_name][bowler_name] = max;
        return dismissed_player;
   } catch (error) {
    console.error("Error while processing tthe highest number of times one player has been dismissed by another player: ", error);
    return {};
   }


}




