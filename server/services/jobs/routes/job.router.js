const jobRouter = require('express').Router();


jobRouter.get('/', async (req, res) => {
    await getJobs(req, res);
});


module.exports = jobRouter;
