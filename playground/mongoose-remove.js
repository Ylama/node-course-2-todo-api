const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


//Todo.remove({}).then((result) => {
//   console.log(result); 
//});

//Todo.findOneAndRemove('_id: 5bbdf71f25e0713090975859').then((todotest) => {
//    console.log(todotest);
//});

Todo.findByIdAndRemove('5bbdf4d925e0713090975855').then((todotest) => {
    console.log(todotest);
});

