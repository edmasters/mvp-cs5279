const router = require('express').Router();
let Comp = require('../models/comp.model');

router.route('/').get((req,res) => {
    Comp.find()
        .then(comps => res.json(comps))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const totalcomp = req.body.totalcomp;
    const newComp = new Comp({totalcomp});

    newComp.save()
        .then(() => res.json('Comp added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;