var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://ylama:Ronel12burger@ds052978.mlab.com:52978/todo-app-api'    
}
mongoose.connect( process.env.PORT ? db.mlab : db.localhost);

module.exports = {mongoose};
