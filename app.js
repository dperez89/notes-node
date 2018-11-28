const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
var command = process.argv[2];

if (command === "add") {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("New note, " + argv.title + ", successfully saved!");
        notes.logNote(note);
    } else {
        console.log(
            "A note with the name, " +
                argv.title +
                ", already exists. Please specify a new name."
        );
    }
} else if (command === "list") {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)...`);
    allNotes.forEach(note => notes.logNote(note));
} else if (command === "read") {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log("Note found");
        notes.logNote(note);
    } else {
        console.log("Note not found");
    }
} else if (command === "remove") {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note was removed" : "Note not found";
    console.log(message);
} else if (command === null) {
    return null;
} else {
    console.log("Command not recognized");
}
