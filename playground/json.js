// // var obj = {
// //     name: 'Andrew'
// // };
// // var stringobj = JSON.stringify(obj);
// // console.log(typeof(stringobj));
// // console.log(stringobj);
// var personString= '{"name":"Andrew","age":25}';
// var person =JSON.parse(personString);
// console.log(typeof(person));
// console.log(person);

const fs =require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};
var originalNoteString= JSON.stringify(originalNote);

fs.writeFileSync('notes.json',origianlNoteString);

var noteString =fs.readFileSync('notes.json');
var note= JSON.parse(originalNoteString);
console.log(typeof(note));
console.log(note);
 