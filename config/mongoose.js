const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("database is up");
});

module.exports = db ;