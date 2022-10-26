// File Name: todo.js
// Name: Brandon Occhiuzzi
// ID: 301247390
// Date: Oct 8 2022

// Import
let mongoose = require('mongoose');

// Create a model class
let todoModel = mongoose.Schema(
    {
        task: String,
        description: String,
        complete: { type: Boolean, default: false }        
    },
    {
        collection: "todo"
    }
);

module.exports = mongoose.model("Todo", todoModel);