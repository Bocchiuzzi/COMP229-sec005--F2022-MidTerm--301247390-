// File Name: todo.js
// Name: Brandon Occhiuzzi
// ID: 301247390
// Date: Oct 8 2022

var express = require('express');
var router = express.Router();

let todoController = require('../controllers/todo');

// Connect to our model
//let Todo = require('../models/todo');

// Helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in    
    // ADD YOUR CODE HERE
    // adds the requirement of authentication to the existing function   
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();

}

/* GET list of items */
router.get('/list', todoController.todoList);

// Route for Details
router.get('/details/:id', todoController.details);

// Routers for edit
router.get('/edit/:id', requireAuth, todoController.displayEditPage); //added requireauth function to this
router.post('/edit/:id', requireAuth, todoController.processEditPage); //added requireauth function to this

// Delete
router.get('/delete/:id', requireAuth, todoController.performDelete); //added requireauth function to this

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, todoController.displayAddPage); //added requireauth function to this

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, todoController.processAddPage); //added requireauth function to this

module.exports = router;