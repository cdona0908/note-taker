const router = require('express').Router();
const {filterByQuery, findById} = require('../../lib/notes');
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
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);    
    //if no record exist for that note return error 400
    if(result){
        res.json(result);
    } else {
        res.send(404);
    }
});



module.exports = router;