const {MongoClient, ObjectID} = require('mongodb');
//const MongoClient = require('mongodb').MongoClient;

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('Unable to connect to MongoDB server');
    }
        console.log('Connected to MongoDB server');
    
    //delete many
//    db.collection('Todos').deleteMany({
//        text: 'eat lunch'
//    }).then((result) => {
//        console.log(result);
//    });
    
    //delete one
//    db.collection('Todos').deleteOne({
//        text: 'test'
//    }).then((result) => {
//        console.log(result);
//    });
    
    
    //find One and Delete
//    db.collection('Todos').findOneAndDelete({
//        completed: false
//    }).then((result) => {
//        console.log(result);
//    })
    
//    db.collection('Users').deleteMany({
//        name: 'Chris'
//    }).then((result) => {
//        console.log(result);
//    });
    
    db.collection('Users').findOneAndDelete({
         _id: new ObjectID('5bb75ae325e07130909757a2')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
    
    
});