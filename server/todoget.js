const db = require('../database/index')
const toget = db.todoList
const gettodo = (req, res) => {
        toget.find({})
            .then(result => res.status(200).send(result))
                .catch(err => {
                console.log(err,'error in git in controller opject')
            })
    }
module.exports = gettodo