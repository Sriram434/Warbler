require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const errorHandler = require('./handlers/error')
const authRoutes = require('./routes/auth')
const messageRoutes = require('./routes/message')
const {loginRequired, correctUser} = require('./middleware/auth')
const db = require('./models/index')
app.use(express.static('public'))

const PORT = 8081;
app.use(cors());
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/users/:id/messages',loginRequired, correctUser, messageRoutes)
// All routes

app.get('/api/messages', loginRequired, async function(req, res, next){
	
	try{
		let messages = await db.Message.find()
		.sort({createdAt: 'desc'})
		.populate('user',{
			username: true,
			profileImageUrl: true
		})
		return res.status(200).send(messages)
	} catch(err){
		return next(err.message)
	}
})

app.use( (req,res, next) =>{
	let err = new Error('Not Found')
	err.status = 404
	next(err)
})

app.use(errorHandler)

app.listen( PORT, process.env.IP, ()=>{
	console.log(`Server is running on PORT`, PORT)
})