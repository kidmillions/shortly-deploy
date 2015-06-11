var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shortly');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback){

var Schema = mongoose.Schema;

  var urlSchema = new Schema({
    _id: Schema.Types.ObjectId,
    url: String,
    base_url: String,
    code: String,
    title: String,
    visits: Number,
    created_At: {type: Date, default: Date.now},
    //timestamp needed
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
  })


  var userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    username: String,
    password: String,
    created_At: {type: Date, default: Date.now}
  })

  var Url = mongoose.model('Url', urlSchema);
  var User = mongoose.model('User', userSchema);


  // var url = new Url({url: 'www.me.com', base_url:'hi', code:'124354sfd', title:'I\'m working!', visits: 2142543});

  // console.log(url.url);




});


// var Bookshelf = require('bookshelf');
// var path = require('path');

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// module.exports = db;
