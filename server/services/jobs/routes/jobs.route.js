const jobsRouter = require('express').Router()
const { getJobs } = require('../controllers/jobs.controller');

jobsRouter.get('/', async (req, res) =>
{
    await getJobs(req, res);
});


module.exports = jobsRouter
