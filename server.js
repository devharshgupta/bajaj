// server.js File
const express = require('express'); // Importing express module

const app = express(); // Creating an express object

const port = 8000; // Setting an port for this application

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Starting server using listen function
app.listen(port, function (err) {
if(err){
	console.log("Error while starting server");
}
else{
	console.log("Server has been started at "+port);
}
})

app.get('/', function (req, res) {
	res.send("<h1> Welcome to assignment from harsh gupta .<br>Please visit <a href='https://hiharsh.netlify.app/'>https://hiharsh.netlify.app/</a> to know more about me</h1>");
})
app.post('/bfhl', function (req, res, next) {
	let number =[]
	let alpha=[]
	function result(i) {
		 if(isNaN(i)){
			alpha.push(i)
		 }else{
			number.push(i)
		 }
	  }
	req.body.data.map((i) => result(i))
	response_data = {
		"is_success": true,
		"user_id": "Harshgupta_23041999", 
		"email"	:"hiharsh1999@gmail.com",
		"roll_number": "11914509",
		"numbers" : number,
		"alphabets": alpha
		}
	// console.log(req.body)
	res.json(response_data)
  })