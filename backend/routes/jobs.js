const router = require('express').Router();
let Job = require('../models/jobname.model');

router.route('/').get((req,res) => {
    Job.find()
        .then(jobs => res.json(jobs))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const jobname = req.body.jobname;
    const newJob = new Job({jobName});

    newJob.save()
        .then(() => res.json('Job added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;