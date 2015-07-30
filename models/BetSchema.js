var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var betSchema = new Schema({
  date         : Date,
  sport        : { type: String, enum: ['Baloncesto', 'Futbol', 'Tenis', 'Varios']},
  type         : { type: String, enum: ['Combinada', 'Simple']},
  description  : String,
  stake        : { type: Number },
  odds         : { type: Number },
  state        : { type: String, enum: ['Anulada', 'Ganada', 'Perdida', 'Pendiente']},
  result       : Number
});

module.exports = mongoose.model('Bet', betSchema);