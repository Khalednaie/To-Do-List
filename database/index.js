const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/todolistDb', { useNewUrlParser: true }
,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('Db connected')
    })
    .catch((error) => {
        console.log('failled to connect', error)
    });

const todolistSchema = mongoose.Schema({
        todo: {type:String , require:true}
})

const todoList = mongoose.model('todoList',todolistSchema)    
module.exports.todoList = todoList;