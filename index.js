const express = require('express');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT;

const app = express();

const staticRouter = require('./routers/staticRouter');

//configuration
app.set('view engine', 'ejs');
app.use(express.static(path.resolve('public')));

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());

// Routers
app.get('/', staticRouter);


// Listener
app.listen(PORT, () => {
    console.log(`Server Listening on http://127.0.0.1:${PORT}`);
})