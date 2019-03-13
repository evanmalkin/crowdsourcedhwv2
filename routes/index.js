var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homework' });
});



// router.get('/homework', function(req, res){
//
//   // Get a Mongo client to work with the Mongo server
//   var MongoClient = mongodb.MongoClient;
//
//   // Define where the MongoDB server is
//   var url = 'mongodb://localhost:3000/local';
//
//   // Connect to the server
//   MongoClient.connect(url, function (err, db) {
//     if (err) {
//       console.log('Unable to connect to the Server', err);
//     } else {
//       // We are connected
//       console.log('Connection established to', url);
//
//       // Get the documents collection
//       var collection = db.collection('users');
//
//       // Find all students
//       collection.find({}).toArray(function (err, result) {
//         if (err) {
//           res.send(err);
//         } else if (result.length) {
//           res.render('homework',{
//
//             // Pass the returned database documents to Jade
//             "homework" : result
//           });
//         } else {
//           res.send('No documents found');
//         }
//         //Close connection
//         db.close();
//       });
//     }
//   });
// });

module.exports = router;


