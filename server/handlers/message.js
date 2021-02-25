const db = require('../models')

exports.createMessage = async function(req, res, next){
	try{
		//Creating new message
		let message = await db.Message.create({
			text: req.body.text,
			user: req.params.id
		})
		
		// getting the user id
		let foundUser = await db.User.findById(req.params.id)
		
		//Pushing the message id to the user DB
		foundUser.messages.push(message.id)
		await foundUser.save();
		
		//Populating the user details using message id
		let foundMessage = await db.Message.findById(message._id).populate('user',{
			username: true,
			profileImageUrl: true
		})
		return res.status(200).json(foundMessage)
		
	}catch(err){
		return next(err);
	}
}

//Get - Messages
exports.getMessage = async function(req, res, next){
	try{
		let message = await db.Message.find(req.params.message._id)
		return res.status(200).json(message)
	} catch(err){
		return next(err.message)
	}
}

//Delete - message
exports.deleteMessage = async function(req, res, next){
	try{
		let foundMessage = await db.Message.findById(req.params.message_id)
		await foundMessage.remove()
		return res.status(200).json(foundMessage)
	} catch(err){
		return next(err.message)
	}
}