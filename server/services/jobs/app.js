const express = require('express');
const mongoose = require('mongoose');
const jobRouter = require('./routes/job.router');
const config = require('./utils/config');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware');


const app = express();

app.use(express.json());

mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message)
    })

app.use('/',(req, res) => {
    return res.status(200).json({ message: 'Hello from jobs service' })
});


app.use(middleware.requestLogger)
app.use('/jobs', jobRouter);


module.exports = app;

