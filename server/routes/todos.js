import express from 'express'
import Todo from '../model/todo'
let todos = express.Router();


todos.get('/', function(req, res, next) {
    Todo.find({}, (err, docs) => {
        res.json(docs)
    }) 
});

todos.delete('/delete/:id', (req, res, next) => {
    Todo.remove({_id: req.params.id}, (err) => {    
        if(err) throw err 
        else {
            Todo.find({}, (err, docs) => {
                if(err) throw err;
                else res.json(docs)
            })
        }
    })
});

todos.post('/add', (req, res, next) => {
    let newTodoItem = new Todo({
        title: req.body.title,
        completed: req.body.completed,
        createAt: req.body.createAt
    })

    newTodoItem.save( (err, doc) => {
        if(err) throw err;
        else {
            // res.redirect('/todo')
            Todo.find({}, (err, docs) => {
                if(err) throw err;
                else res.json(docs)
            })
        }
    }) 
})

todos.put('/put', (req, res, next) => {
    let putTodoItem = req.body
    Todo.findOneAndUpdate(
        {_id: req.body._id},
        {
            $set: {
            title: putTodoItem.title,
            completed: putTodoItem.completed
        }
        }, (err, doc) => {
            if(err) throw err
            else res.json(doc)
    })
})


export default todos
