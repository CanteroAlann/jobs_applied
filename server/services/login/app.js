const express = require('express');
const mongoose = require('mongoose');
const config = require('./utils/config');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware');
const loginRouter = require('./routes/login.route');
const app = express();
const passport = require('passport');
const session = require('express-session');



app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET' 
  }));

app.use(passport.initialize());
app.use(passport.session());

mongoose.set('strictQuery', false)


mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message)
    })


app.use(middleware.requestLogger)

app.use('/', loginRouter);

module.exports = app;