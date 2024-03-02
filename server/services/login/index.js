const express = require('express');
const mongoose = require('mongoose');
const config = require('./utils/config');
const logger = require('./utils/logger');


const app = express();

app.use(express.json());


mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message)
    })

app.use('/',(req, res) => {
    return res.status(200).json({ message: 'Hello from login service' })
});


const port = process.env.PORT || 8002;
app.listen(port , () => {
    console.log('Jobs service is running on port 8001');
});
