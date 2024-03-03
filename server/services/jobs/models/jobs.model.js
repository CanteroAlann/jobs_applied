const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    link_to_apply: {
        type: String,
        required: true
    },
    date_posted: {
        type: Date,
        required: true
    },
});

