var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose'),
	BetModel = require('./models/BetSchema')(app, mongoose),
	BetsCtrl = require('./controllers/BetController');
	

//Connect to DB
mongoose.connect('mongodb://admin:admin@ds047652.mongolab.com:47652/bets', function(err, res) {
	if(err){
	    throw err;    
	} 
	
	console.log('Connected to Database');
});

//Configure express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

//Definning routes
var bets = express.Router();

bets.route('/bets')
  .get(BetsCtrl.findAllBets)
  .post(BetsCtrl.addBet);

app.use('/api', bets);


//Starting server
app.listen(process.env.PORT || 3000, function() {
  console.log("Node server running on port: " + process.env.POR);
});