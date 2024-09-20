import deliveries from '../data/deliveries.json' assert { type: 'json'};
import fs from 'fs';



function player_dismissed() {
    let player_dismissed_obj = {};

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
}

// console.log(player_dismissed());

function max_times_player_dismissed() {
    let player_obj = player_dismissed();
    // console.log(playerObj);
    let dismissed_player = {};
    let max = 0;
    let bowler_name = "";
    let batsman_name = "";
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


}


// console.log(max_times_player_dismissed());

const player_out_max_times = max_times_player_dismissed();


fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/8_highest_number_player_dismissed.json', JSON.stringify(player_out_max_times, null, 2));