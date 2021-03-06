require('./config/config');
//imports
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

//files
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

//variables
var app = express();
const port = process.env.PORT || 3000;

//app
app.use(bodyParser.json());

//app post
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

//app get
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e);
    }); 
});

//app get  - :id
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    if(!ObjectID.isValid(id)) {
       return res.status(404).send();
    }
    
    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }   
        res.send({todo});
    }, (e) => {
        res.status(400).send();
    });

});

//app delete - :id
app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    
    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
    
});

//app patch , update - :id
app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    var body = _.pick(req.body, ['text', 'completed']);
    
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    
    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        
        if(!todo) {
            res.status(404).send();
        }
        
        res.send({todo});
        
    }).catch((e) => {
        res.status(404).send();
    });
    
});



app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

//exports
module.exports = {app};
