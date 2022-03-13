//This file contains all server related functions for notes
const fs = require('fs');
const path = require('path');

function filterByQuery(query, notesArray) {
    let filteredResults = notesArray;
    if (query.title) {
        filteredResults = filteredResults.filter( notes => notes.title === query.title);
    }
    return filteredResults;
}

function findById(id, notesArray){
    const result = notesArray.filter( note => note.id === id)[0];
    return result;
}

function createNewNote(body, notesArray){
    const note = body;
    //add note to notes array
    notesArray.push(note);
    //write note to db.json
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray}, null, 2)
    );
    return note;
}

function validateNote(note){
if (!note.title || typeof note.title !== 'string'){
    return false;
}
if (!note.text || typeof note.text !== 'string'){
    return false;
}
return true;
}

module.exports = {filterByQuery, findById, createNewNote, validateNote};