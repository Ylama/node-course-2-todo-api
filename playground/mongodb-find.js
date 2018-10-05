const {MongoClient, ObjectID} = require('mongodb');
//const MongoClient = require('mongodb').MongoClient;

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('Unable to connect to MongoDB server');
    }
        console.log('Connected to MongoDB server');
    
    
//    db.collection('Todos').find({
//        _id: new ObjectID('5bb36376bf7cd5026450375d')
//    }).toArray().then((docs) => {
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//    },(err) => {
//        console.log('Unable to fetch todos', err);
//    });
    
//    db.collection('Todos').find().count().then((count) => {
//        console.log(`Todos count: ${count}`);
//        console.log(JSON.stringify(docs, undefined, 2));
//    },(err) => {
//        console.log('Unable to fetch todos', err);
//    });    
    
    db.collection('Users').find({
        name: 'Chris'
    }).count().then((count) => {
        console.log(`Name = Chris, count: ${count}`);
    },(err) => {
        console.log('Unable to fetch todos', err);
    });  
    
    
    db.collection('Users').find({
        name: 'Chris'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });
    
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
    
    
    //db.close();
    
});