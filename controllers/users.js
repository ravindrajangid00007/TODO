const Todo = require('../models/todo');

module.exports.create = function(req , res) {
    Todo.create({
        description: req.body.description,
        catagory: req.body.catagory,
        date: req.body.date
    } , function(err) {
        if (err) { console.log(err) ;console.log('error in creating todo'); return }
        return res.redirect('back');
    });
}

module.exports.delete = function(req , res) {
    let id = req.params.id;
    Todo.findByIdAndDelete(id , function(err) {
    if (err) { console.log("Error in deleting todos", err); return; }
    return res.redirect('back');
    });
}