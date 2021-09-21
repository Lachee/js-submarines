import DOTENV from 'dotenv';
DOTENV.config();

import { Application } from './Application.js';

//Setup and run the application
const app = new Application(process.env);
app.main()
        .catch((e) => { throw e; })
        .finally(async ()  => { 
            await app.dispose();
        });