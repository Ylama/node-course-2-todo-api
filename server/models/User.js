var mongoose = require('mongoose');

var Users = mongoose.model('Users', {
   email: {
       type: String,
       required: true,
       trim: true,
       minlength: 1
   } 
});

//var newUsers = new Users({
//    email: 'chrisieviljoen@yahoo.com'
//});
//
//newUsers.save().then((doc) => {
//    console.log('Saved the user: ', doc)
//},(e) => {
//    console.log('Unable to save', e)
//});


module.exports = {Users};