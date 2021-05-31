const fs = require("fs");
const path = require("path");


const postNewNote = (newNote , notesArray) => {
    // Set unique id to entry

    if (notesArray.length == 0){
        req.body.id = "0";
    } else{
        req.body.id = JSON.stringify(JSON.parse(notesArray[notesArray.length - 1].id) + 1);
    }
    
    console.log("req.body.id: " + req.body.id);

    // Pushes Body to JSON Array
    notesArray.push(newNote);

    // Write notes data to database
    writeToDB(notesArray);
    console.log(notesArray);
    res.json(req.body);
};

// finds specific note by ID from notes array
const findById = (id, notesArray) => {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};

const deleteNote = (deleteId, notesArray) => {
    // Obtains id and converts to a string
    
    
    const deleteId = req.params.id.toString();
    console.log(deleteId);

    // Goes through notesArray searching for matching ID
    for (i=0; i < notesArray.length; i++){
       
        if (notesArray[i].id == id){
            console.log("match!");
            // responds with deleted note
            res.send(notesArray[i]);

            // Removes the deleted note
            notesArray.splice(i,1);
            break;
        }
    }

    // Write notes data to database
    writeToDB(notesArray);
};


module.exports = {
    postNewNote,
    deleteNote,
    findById,
};