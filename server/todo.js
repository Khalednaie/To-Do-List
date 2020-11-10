const Db = require('../database/index');
exports.todoList = (req, res) => {
    console.log(req.body);
    console.log('in to do scemah');

    if (req.body.todo === "") {
        res.send('error')
        console.log('error in body todo!!!')
    } else {
// res.send('hellloword')
    
    // } else {
        let post = req.body.todo
let todoList = Db.todoList
        const todo = new todoList({
            todo:post
           
        });
        todo.save()
            .then(result => {
                console.log('todo saved')
                res.send('seved')
            })
        .catch(errer=>{console.log('have error',errer)})
        
    
 
        
    }
}