import mg from "mongoose";
import { Todo } from "./models/Todo.js";
import express from "express";
const app = express();
const port = 3000;

let conn = await mg.connect("mongodb://localhost:27017/todo");

app.get('/', (req, res) => {
    const todo = new Todo({title: 1, desc: "This is the description for the todo", isDone: false, days: Math.ceil(Math.random() * 30)});
    todo.save();
    res.send("Hello World!");
});

app.get('/about', async (req, res) => {
    let todo = await Todo.findOne({});
    console.log(todo);
    res.json({title: todo.title, desc: todo.desc, days: todo.days});
}
)

app.listen(port, () => {
    console.log(`Example app is listenig on port ${port}`);
});
