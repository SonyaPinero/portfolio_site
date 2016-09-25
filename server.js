'use strict';

import express from 'express';

const server = express();

server.use(express.static('./build/public'));

server.listen(8080, () => console.log('Listening on port 8080'));