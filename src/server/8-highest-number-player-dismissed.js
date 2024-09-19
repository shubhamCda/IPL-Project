import deliveries from '../data/deliveries.json' assert { type: 'json'};

function playerDismissed() {
    let playerDismissedObj = {};

    for (let index = 0; index < deliveries.length; index++) {
        const { player_dismissed, batsman, bowler } = deliveries[index];
        if (player_dismissed !== "") {
            if (!playerDismissedObj[batsman]) {
                playerDismissedObj[batsman] = {};
                playerDismissedObj[batsman][bowler] = 1;

            } else {
                if (!playerDismissedObj[batsman][bowler]) {
                    playerDismissedObj[batsman][bowler] = 1;
                } else {
                    playerDismissedObj[batsman][bowler] += 1;
                }
            }
        }

    }

    return playerDismissedObj;
}

// console.log(playerDismissed());

function maxTimesPlayerDismissed() {
    let playerObj = playerDismissed();
    // console.log(playerObj);
    let dismissedPlayer = {};
    let max = 0;
    let bowlerName = "";
    let batsmanName = "";
    for (let batsman in playerObj) {
        let obj = playerObj[batsman];
        for (let bowler in obj) {
            if (max < obj[bowler]) {
                max = obj[bowler];
                batsmanName = batsman;
                bowlerName = bowler;
            }
        }
    }
    dismissedPlayer[batsmanName] = {};
    dismissedPlayer[batsmanName][bowlerName] = max;
    return dismissedPlayer;


}


console.log(maxTimesPlayerDismissed());
