var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/homework', function(req, res){

  // Get a Mongo client to work with the Mongo server
  var MongoClient = mongodb.MongoClient;

  // Define where the MongoDB server is
  var url = 'mongodb://localhost:3001/local';

  // Connect to the server
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the Server', err);
    } else {
      // We are connected
      console.log('Connection established to', url);

      // Get the documents collection
      var collection = db.collection('homework');

      // Find all students
      collection.find({}).toArray(function (err, result) {
        if (err) {
          res.send(err);
        } else if (result.length) {
          res.render('homework',{

            // Pass the returned database documents to Jade
            "homework" : result
          });
        } else {
          res.send('No documents found');
        }
        //Close connection
        db.close();
      });
    }
  });
});

router.get('/newhomework', function (req, res) {
  res.render('newhomework', {title: 'add homework'});
});

router.post('/addhomework', function (req, res) {
  var MongoClient = mongodb.MongoClient;

  var url = 'mongodb://localhost:3001/local';

  MongoClient.connect(url, function (err, db) {
    if(err){
      console.log('unable to connect to server', err);
    }else{
      console.log('connected to server');

      var collection = db.collection('homework');

      var student1 = {student: req.body.student, street: req.body.street, city: req.body.city, state: req.body.state, sex: req.body.sex, gpa: req.body.gpa};

      collection.insert([student1], function (err, result) {
        if(err){
          console.log('unable to connect', err);
        }else{
          res.redirect('/homework');
        }
        db.close();
      });
    }


  })
});

router.get('/signedIn', function (req, res) {
  res.render('signedIn', {title: 'signed in'});
});

router.post('./onSignIn', function (err, db) {
  if(err){
    console.log('unable to connect to server owo');
  }
  else{
    console.log('connected to server uwu');
  }

  var collection = db.collection('homework');

  var student1 = {student: req.body.student};

  collection.insert([student1], function (err, result) {
    if (err){
      console.log('unable to connect to server');
    }
    else{
      window.open('./signedIn.pug')
    }

  });



});

module.exports = router;


