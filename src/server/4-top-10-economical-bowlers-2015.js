import deliveries from '../data/deliveries.json' assert { type: 'json'};

import matches from '../data/matches.json' assert { type: 'json'};

function get_2015_MatchIdx() {
    let matchIdx_2015 = [];

    for (let index = 0; index < matches.length; index++) {
        const { id, season } = matches[index];

        if (season == 2015) {

            matchIdx_2015.push(id);
        }

    }
    return matchIdx_2015;
}

// console.log(get_2015_MatchIdx());


function allEconomicalBowlers() {
    let econnomicalBowlers = {};


    const match_idx = get_2015_MatchIdx()
    const matchIdx_set = new Set(match_idx);

    for (let index = 0; index < deliveries.length; index++) {
        const { total_runs, bowler, match_id, wide_runs, noball_runs } = deliveries[index];

        if (matchIdx_set.has(match_id)) {

            if (econnomicalBowlers[bowler]) {
                econnomicalBowlers[bowler]['Total_Runs'] += Number.parseInt(total_runs);

                if (noball_runs === '0' && wide_runs === '0') {

                    econnomicalBowlers[bowler]['Balls'] += 1;
                }


            } else {
                econnomicalBowlers[bowler] = {};
                econnomicalBowlers[bowler] = {
                    Total_Runs: 0,
                    Balls: 0
                }
            }

        }

    }
    return econnomicalBowlers;

}
// console.log(allEconomicalBowlers());

function top_10_EconomicalBowlers() {
    let economicalBowlers = allEconomicalBowlers();
    // console.log(economicalBowlers);
    let bowlersKeys = Object.keys(economicalBowlers)
    // console.log(bowlersKeys);

    let economyRate = [];
    let result = [];

    for (let index = 0; index < bowlersKeys.length; index++) {
        // console.log(bowlersKeys[index]);
        // console.log(economicalBowlers[bowlersKeys[index]]);

        const { Total_Runs, Balls } = economicalBowlers[bowlersKeys[index]];

        // console.log(`TotalRuns: ${Total_Runs} and Ball: ${Balls}`);

        const economy = (Total_Runs / (Balls / 6)).toFixed(2);
        // console.log(economy);


        economyRate.push({ bowler: bowlersKeys[index], economy: parseFloat(economy) })


    }
    economyRate.sort((a, b) => a.economy - b.economy);
    // console.log(economyRate);

    result.push(economyRate.slice(0, 10));

    return result;

}
console.log(top_10_EconomicalBowlers());
