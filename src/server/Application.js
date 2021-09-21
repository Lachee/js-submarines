
import express from 'express';
import 'express-async-errors';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __cwd = process.cwd();

export class Application {

    /** @type {express.Express} express the current express client */
    express = null;

    distDirectory = "/dist";
    indexFilepath = "/src/client/index.html";

    port = 3010;

    constructor(options = {}) {
        this.express = express();
    }
    
    async main() {

        // Listen to request
        this.express.get('/', (req, res) => {
            res.sendFile(this.indexFilepath, { root: __cwd });
        });
        this.express.get('/dist/:file', (req, res) => {
            const file = req.params.file;
            res.sendFile(file, { root: __cwd + this.distDirectory });
        });

        //setup the port and listen
        this.express.listen(this.port, () => {
            console.log(`Application listening to http://localhost:${this.port}`);
        });
    }

    async dispose() {

    }
}