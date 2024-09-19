import deliveries from '../data/deliveries.json' assert { type: 'json'};



function superOverBallsAndRuns() {
    let  bowlerObj = {};

    for (let index = 0; index < deliveries.length; index++) {
        const { is_super_over, total_runs, noball_runs, wide_runs, bowler } = deliveries[index];

        if (is_super_over !== '0') {
            if (!bowlerObj[bowler]) {
                bowlerObj[bowler] = {'totalRuns': 0, 'balls': 0};
                bowlerObj[bowler]['totalRuns'] = parseInt(total_runs);

                if (noball_runs === '0' && wide_runs === '0') {
                    bowlerObj[bowler]['balls']++;
                }


            }else{
                if (total_runs !== '0') {
                    bowlerObj[bowler]['totalRuns'] += parseInt(total_runs);
                    if (noball_runs === '0' && wide_runs === '0') {
                        bowlerObj[bowler]['balls']++;
                    }
                }
            }
        }
        
    }
    return bowlerObj;
}

// console.log(superOverBallsAndRuns());

function superEconomy() {
    let ballAndRunsObj = superOverBallsAndRuns();

    let bowlerEconomy = {};

    for (let bowler in ballAndRunsObj){
        let bowlers = ballAndRunsObj[bowler];
        let economy = bowlers.totalRuns / (bowlers.balls / 6);
        bowlerEconomy[bowler] = economy;
        
    }
    
    // return bowlerEconomy;

    let result = Object.entries(bowlerEconomy).sort(([,a],[,b]) => {
        return a - b;
    }).slice(0,1);

    console.log(result.flatMap((item) => item));
}

console.log(superEconomy());

// let arr = [1,2,3,4,5,6];

// arr.sort((a,b) => {
//     return b-a;
// })

// console.log(arr);