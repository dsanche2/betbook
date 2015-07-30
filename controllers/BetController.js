var mongoose = require('mongoose');
var Bet  = mongoose.model('Bet');

exports.findAllBets = function(req, res) {
    Bet.find(function(err, results) {
    if(err) res.send(500, err.message);

    console.log('GET / Bets')
        res.status(200).jsonp(results);
    });
};

exports.addBet = function(req, res) {
    console.log('POST');
    console.log(req.body);
    
    var newBet = new Bet({

        date : req.body.date,
        sport : req.body.sport,
        type : req.body.type,
        description : req.body.description,
        stake : req.body.stake,
        odds : req.body.odds,
        state : req.body.state,
        result : req.body.result
    });

    newBet.save(function(err, result) {
        if(err) return res.send(500, err.message);
        
        res.status(200).jsonp(result);
    });
};