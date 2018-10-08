var mongoose = require('mongoose')

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        require: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
       type: Number,
       default: null
    }
});

//var newTodo = new Todo({
//    text: 'true',
//    completed: true,
//    completedAt: 153522
//});
//
//newTodo.save().then((doc) => {
//    console.log('Saved the todo', doc);
//}, (e) => {
//    console.log('Unable to save todo');
//});

module.exports = {Todo};