import mongoose from 'mongoose';

let Schema = mongoose.Schema;

// let todo = mongoose.model('todo', {title: String, complate: Blob, createAt: Date});

let todoSchema = new Schema({
    title: String,
    completed: Boolean,
    createAt: Date
})

let Todo = mongoose.model('Todo', todoSchema);


export default Todo