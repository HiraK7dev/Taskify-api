import { Todo } from "../models/todos.models.js"

async function createTodo(req, res){    
    try {
        const result = await Todo.create({
            task: req.body.task,
        });
        res.status(201).json({ message: "success" })
    } catch (error) {
        res.status(500).json({ message: "error" })
    }
}

export default createTodo