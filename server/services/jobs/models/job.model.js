const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title:String,
    description:String,
    date_of_application:Date,
    status:String,
})

jobSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job