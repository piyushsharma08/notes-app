const fs =require('fs');

var fetchNotes = () => {
    try{
        var notesString=fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));

};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    
    var duplicateNotes = notes.filter((note)=>note.title === title);
    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    
};
var getAll = () => {
    return fetchNotes();
};
var removeNotes = (title) =>{
    //console.log(`removing notes ${title}`);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note)=> note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length
};
var getNotes = (title) =>{
    var notes= fetchNotes();
    var filteredNotes = notes.filter((note)=> note.title === title);
    return filteredNotes[0];
};

var logNote = (note)=>{
    
    console.log('----');
    console.log(`title: ${note.title}`);
    console.log(`title: ${note.body}`);
}

module.exports ={
    addNote,
    getAll,
    removeNotes,
    getNotes,
    logNote
};