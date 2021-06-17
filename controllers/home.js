const Todo = require('../models/todo');

module.exports.list = function(req , res) {
    Todo.find({} , function(err , todos) {
        if(err) {console.log("delhiwala error aa gya ji"); return ;}
        return res.render('index', {
            title: 'list',
            todo_list: todos 
        }) ;
    });
    
}