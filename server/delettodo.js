var db = require('../database/index');
var remov = db.todoList
const deletTodo = (req, res) => {
        const _id = req.params;
        remov.deleteOne(_id)
            .then(() => { res.status(202).send('delete todo') })
        .catch((err)=>{console.log(err,'error in delete in controller in opject')})
    }
module.exports = deletTodo