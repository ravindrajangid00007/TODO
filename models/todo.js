const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    catagory: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // }
},{
    timestamps: true
});

const Todo = mongoose.model('Todo', todoSchema);
console.log('schema completed');
module.exports = Todo;