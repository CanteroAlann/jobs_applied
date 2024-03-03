const Job = require('../models/jobs.model');

const getJobs = async (req, res) =>
{
    const jobs = await Job.find({});
    res.json(jobs);
}


module.exports = { getJobs }