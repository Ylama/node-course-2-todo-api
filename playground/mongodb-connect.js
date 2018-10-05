const {MongoClient, ObjectID} = require('mongodb');
//const MongoClient = require('mongodb').MongoClient;

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('Unable to connect to MongoDB server');
    }
        console.log('Connected to MongoDB server');
    
    
    
    
//    db.collection('Todos').insertOne({
//        text: 'Somthing to do',
//        completed: false
//    }, (err, result) => {
//        if(err){
//            return console.log('Unable to insert todo', err);
//        }
//        
//        console.log(JSON.stringify(result.ops, undefined, 2));
//    });
//    
//    db.collection('Users').insertOne({
//        name: 'Chris',
//        age: 26,
//        location: 'Brackefell ,Capetown'
//        }, (err, result) => {
//        if(err){
//           return console.log('Unable to insert todo', err);
//        }
//        
//        console.log(result.ops[0]._id.getTimestamp());
//    });
    
    
    db.close();
    
});