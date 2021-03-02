const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.Promise = Promise;

mongoose.connect( process.env.MONGOLAB_URI || 'mongodb://localhost/warbler',{
	keepAlive: true,useNewUrlParser: true
})
.then( () => console.log("connected to DB."))
.catch( err => console.log(err));

module.exports.User = require('./user')
module.exports.Message = require('./message')
