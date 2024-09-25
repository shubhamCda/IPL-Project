import fs from 'fs';

import { matches_per_year } from './1-matches-per-year.js'
import { matches_won_per_team_per_year } from './2-matches-won-per-team-per-year.js';


//1. To calculate number of matches played per year for all the years in IPL.
const matches_per_season_count = matches_per_year();

// fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/1-matches-per-year.json', JSON.stringify(matches_per_season_count, null, 2));



//2. Number of matches won per team per year in IPL.
const per_year_winning_count_team = matches_won_per_team_per_year();

// fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/2-matches-won-per-team-per-year.json', JSON.stringify(per_year_winning_count_team, null, 2));