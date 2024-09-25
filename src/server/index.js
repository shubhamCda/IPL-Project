import fs from 'fs';

import { matches_per_year } from './1-matches-per-year.js'


const matches_per_season_count = matches_per_year();

fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL/src/public/output/1-matches-per-year.json', JSON.stringify(matches_per_season_count, null, 2));
