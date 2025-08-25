const express = require('express');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT;

const app = express();

// Database Connection
mongoose.connect(process.env.DATABASE_URI)
    .then(() => console.log("Database Connected."))
    .catch((err) => console.log(err));

// Importing Routers
const staticRouter = require('./routers/staticRouter');
const { isLoggedIn } = require('./middlewares/auth');

//Configuration
app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));
app.use(express.static(path.resolve('public')));

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(isLoggedIn)

// Routes
app.use('/', staticRouter);


// Listener
app.listen(PORT, () => {
    console.log(`Server Listening on http://127.0.0.1:${PORT}`);
})