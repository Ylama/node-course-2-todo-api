var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://Ylama:Ronel12burger@ds052978.mlab.com:52978/todo-app-api'
};
mongoose.connect( db.localhost || db.mlab);

module.exports = {mongoose};
