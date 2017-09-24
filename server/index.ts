import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');
// import {AuthorizationMiddleware} from './auth/auth-middleware';

import { BooksController } from './db/books/controller';
import { AuthController } from './auth/controller';

const app = express();
const port = 4280;

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthController);
// app.use((new AuthorizationMiddleware).instance);
app.use('/', BooksController);


app.listen(port,
  () =>
  console.log(`API runs at http://localhost:${port}`)
);
