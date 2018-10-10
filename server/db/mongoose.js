var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://new:apptodo1@ds157469.mlab.com:57469/todo-app-api'
    
};
mongoose.connect(process.env.PORT ? db.mlab : db.localhost);

module.exports = {mongoose};
