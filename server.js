var express = require('express'),
  app = express();
  const cors = require('cors'),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  Task = require('./api/models/model'), //created model loading here
  bodyParser = require('body-parser');
mongoose.Promise = global.Promise;

var promise = mongoose.connect('mongodb://localhost:27017/Tododb', {
  useMongoClient: true,
});

promise.then(function(db) {
    console.log("Connected to database!!!");
}, function(err){
    console.log("Error in connecting database " + err);
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

require('./api/routes/routes')(app);


app.listen(port);
app.use(express.static(__dirname));

console.log('RESTful API server started on: ' + port);
