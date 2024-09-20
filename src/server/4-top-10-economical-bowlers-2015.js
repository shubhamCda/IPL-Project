import deliveries from '../data/deliveries.json' assert { type: 'json'};
import fs from 'fs';
import matches from '../data/matches.json' assert { type: 'json'};

function get_2015_Match_Idx() {
    let matchIdx_2015 = [];

    for (let index = 0; index < matches.length; index++) {
        const { id, season } = matches[index];

        if (season == 2015) {

            matchIdx_2015.push(id);
        }

    }
    return matchIdx_2015;
}

// console.log(get_2015_Match_Idx());


function all_economical_bowlers() {
    let econnomical_bowlers = {};


    const match_idx = get_2015_Match_Idx()
    const matchIdx_set = new Set(match_idx);

    for (let index = 0; index < deliveries.length; index++) {
        const { total_runs, bowler, match_id, wide_runs, noball_runs } = deliveries[index];

        if (matchIdx_set.has(match_id)) {

            if (econnomical_bowlers[bowler]) {
                econnomical_bowlers[bowler]['Total_Runs'] += Number.parseInt(total_runs);

                if (noball_runs === '0' && wide_runs === '0') {

                    econnomical_bowlers[bowler]['Balls'] += 1;
                }


            } else {
                econnomical_bowlers[bowler] = {};
                econnomical_bowlers[bowler] = {
                    Total_Runs: 0,
                    Balls: 0
                }
            }

        }

    }
    return econnomical_bowlers;

}
// console.log(all_economical_bowlers());

function top_10_economical_bowlers() {
    let economical_bowlers = all_economical_bowlers();
    // console.log(economicalBowlers);
    let bowlers_keys = Object.keys(economical_bowlers)
    // console.log(bowlersKeys);

    let economy_rate = [];
    let result = [];

    for (let index = 0; index < bowlers_keys.length; index++) {
        // console.log(bowlersKeys[index]);
        // console.log(economicalBowlers[bowlersKeys[index]]);

        const { Total_Runs, Balls } = economical_bowlers[bowlers_keys[index]];

        // console.log(`TotalRuns: ${Total_Runs} and Ball: ${Balls}`);

        const economy = (Total_Runs / (Balls / 6)).toFixed(2);
        // console.log(economy);


        economy_rate.push({ bowler: bowlers_keys[index], economy: parseFloat(economy) })


    }
    economy_rate.sort((a, b) => a.economy - b.economy);
    // console.log(economyRate);

    result.push(economy_rate.slice(0, 10));

    return result;

}
// console.log(top_10_economical_bowlers());

const top_economical_bowlers = top_10_economical_bowlers();

fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/4_top_10_economical_bowlers_2015.json', JSON.stringify(top_economical_bowlers, null, 2));
