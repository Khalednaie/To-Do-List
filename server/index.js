const express = require('express');
const path = require('path')
const app = express();
const cors = require('cors');
const add = require('./todo');
const deletTodo = require('./delettodo')
const gettodo = require('./todoget')
app.use(express.json());
/////////////////////////////////////////
app.use(cors());
app.post('/todo',add.todoList)
console.log('in post out')
/////////////////////////////////////////
app.get('/todos', gettodo)
console.log('in todoget out')
/////////////////////////////////////////
app.delete('/todo/:_id', deletTodo)
console.log('in delettodo out')
/////////////////////////////////////////
const PORT = process.env.PORT || 5000;
app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
	});

app.listen(PORT , ()=>{console.log(`this port server ${PORT}`)})