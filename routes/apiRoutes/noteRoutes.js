const router = require('express').Router();
const {filterByQuery, createNewNote, validateNote} = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');


//get all notes
router.get('/notes', (req, res) => {
    let results = notes;
    if(req.query){
        results = filterByQuery(req.query , results);
    }
    res.json(results);
});


// add notes to db
router.post('/notes', (req, res) => {
    // generate a unique id using the uuid package
    req.body.id = uuidv4();
    //if any data in req.body is incorrect, send 400 error back
    if (!validateNote(req.body)){
        res.status(400).send('The note is not properly formatted.');
    } else {
        // add note to json file and notes array in this function
        const note = createNewNote(req.body, notes);        
        res.json(note);
    }    
});

//delete note by id
// router.delete('/notes/:id', (req, res) =>{

// });


module.exports = router;