const fs = require("fs");
const path = require("path");

function postNewNote(body, notesArray) {
    const newNote = body;

    newNote.id = notesArray[notesArray.length-1].id + 1;
    notesArray.push(newNote);
    console.log(notesArray)
    // body.id = notesArray[0];
    // notesArray[0]++;

    let data = JSON.stringify(notesArray);
    


    fs.writeFile( path.join(__dirname, '../db/db.json'), data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });

    // // notesArray.push(newNote);
    // fs.writeFileSync(
    //     path.join(__dirname, '../db/db.json'),
    //     JSON.stringify(allNotes)
    // );
    // return newNote;
}
function deleteNote(id, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        let note = notesArray[i];

        if (note.id === id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify(notesArray, null, 2)
            );

            break;
        }
    }
}


module.exports = {
    postNewNote,
    deleteNote,
};