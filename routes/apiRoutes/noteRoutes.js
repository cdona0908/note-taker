const router = require('express').Router();
const {filterByQuery} = require('../../lib/notes');
const { notes } = require('../../db/db.json');


//get all notes
router.get('/notes', (req, res) => {
    let results = notes;
    if(req.query){
        results = filterByQuery(req.query , results);
    }
    res.json(results);
});


//get specific notes by id



module.exports = router;