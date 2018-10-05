const {MongoClient, ObjectID} = require('mongodb');
//const MongoClient = require('mongodb').MongoClient;

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('Unable to connect to MongoDB server');
    }
        console.log('Connected to MongoDB server');
    
    
    //Update one document
//    db.collection('Todos').updateOne({
//        text: 'test'
//    },{
//        $set: {completed: 'true'}
//    }).then((result) => {
//        console.log(JSON.stringify(result, undefined, 2));
//    });
    
//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('5bb7569425e0713090975793')
//    },{
//        $set: {completed: false}
//    },{
//        returnOriginal: false
//    }).then((result) => {
//        console.log(result);
//    });
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bb7685a25e07130909757b8')
    },{
        $set: {name: 'Piet'},
        $inc: {age: 1}
    },{
        returnOriginal: false        
    }).then((results) => {
        console.log(results);
    });
            
            
});