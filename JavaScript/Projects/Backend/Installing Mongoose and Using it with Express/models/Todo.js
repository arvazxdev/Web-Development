import mg from "mongoose";

const TodoSchema = new mg.Schema({
    title: {type: String, required: true, default: "Hello World!"},
    desc: String,
    isDone: Boolean,
    days: Number
});

export const Todo = mg.model('Todo', TodoSchema);