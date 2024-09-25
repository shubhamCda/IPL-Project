import fs from 'fs';

import { matches_per_year } from './1-matches-per-year.js'
import { matches_won_per_team_per_year } from './2-matches-won-per-team-per-year.js';
import { extras_conceded_per_team_per_year_2016 } from './3-extra-runs-conceded-per-team-year-2016.js';
import { top_10_economical_bowlers } from './4-top-10-economical-bowlers-2015.js';
import { match_and_toss_winner } from './5-toss-and-match-won.js';
import { player_of_match_for_season } from './6-player-of-match-for-season.js';
import { batsman_strike_rate } from './7-strike-rate-of-batsman-per-season.js';
import { max_times_player_dismissed } from './8-highest-number-player-dismissed.js';
import { super_over_economy } from './9-economy-of-bowlers-in-super-over.js';

//1. To calculate number of matches played per year for all the years in IPL.
const matches_per_season_count = matches_per_year();

// fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/1-matches-per-year.json', JSON.stringify(matches_per_season_count, null, 2));



//2. Number of matches won per team per year in IPL.
const per_year_winning_count_team = matches_won_per_team_per_year();

// fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/2-matches-won-per-team-per-year.json', JSON.stringify(per_year_winning_count_team, null, 2));


//3. Extra runs conceded per team in the year 2016
const extras_2016_conceded_per_team = extras_conceded_per_team_per_year_2016();

// fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/3-extra-runs-conceded-per-team-year-2016.json', JSON.stringify(extras_2016_conceded_per_team, null, 2));


//4. Top 10 economical bowlers in the year 2015
const top_economical_bowlers = top_10_economical_bowlers();

// fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/4-top-10-economical-bowlers-2015.json', JSON.stringify(top_economical_bowlers, null, 2));


//5. Find the number of times each team won the toss and also won the match
const winners = match_and_toss_winner();

// fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/5-toss-and-match-won.json', JSON.stringify(winners, null, 2));

//6. Find a player who has won the highest number of Player of the Match awards for each season
const man_of_the_match = player_of_match_for_season();

// fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/6-player-of-match-for-season.json', JSON.stringify(man_of_the_match, null, 2));


//7. Find the strike rate of a batsman for each season
const strike_rate = batsman_strike_rate();
 
// fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/7-strike-rate-of-batsman-per-season.json', JSON.stringify(strike_rate, null, 2));


//8. Find the highest number of times one player has been dismissed by another player
const player_out_max_times = max_times_player_dismissed();

// fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/8-highest-number-player-dismissed.json', JSON.stringify(player_out_max_times, null, 2));



const economy_rate_of_super_over = super_over_economy();

fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/9-economy-of-bowlers-in-super-over.json', JSON.stringify(economy_rate_of_super_over, null, 2));