import fs from 'fs';

import { matches_per_year } from './1-matches-per-year.js'
import { matches_won_per_team_per_year } from './2-matches-won-per-team-per-year.js';
import { extras_conceded_per_team_per_year_2016 } from './3-extra-runs-conceded-per-team-year-2016.js';
import { top_10_economical_bowlers } from './4-top-10-economical-bowlers-2015.js';

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

fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/4-top-10-economical-bowlers-2015.json', JSON.stringify(top_economical_bowlers, null, 2));