//This file contains all server related functions for notes

function filterByQuery(query, notesArray) {
    let filteredResults = notesArray;
    if (query.title) {
        filteredResults = filteredResults.filter( notes => notes.title === query.title);
    }
    return filteredResults;
}

module.exports = {filterByQuery};