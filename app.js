console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
var command = process.argv[2];
console.log("Command:", command);
console.log("Yargs", argv);

if (command === "add") {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("New note, " + argv.title + ", successfully saved!");
        console.log("--");
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log(
            "A note with the name, " +
                argv.title +
                ", already exists. Please specify a new name."
        );
    }
} else if (command === "list") {
    notes.getAll();
} else if (command === "read") {
    notes.getNote(argv.title);
} else if (command === "remove") {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note was removed" : "Note not found";
    console.log(message);
} else if (command === null) {
    return null;
} else {
    console.log("Command not recognized");
}
