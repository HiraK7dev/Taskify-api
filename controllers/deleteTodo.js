import { Todo } from "../models/todos.models.js";

async function deleteTodo(req, res) {
    const { id } = req.params;
    try {
        const result = await Todo.deleteOne({ "_id": id });
        res.status(200).json({ message: "success" });
    } catch (error) {
        res.status(500).json({ message: "error" });
    }
}

export default deleteTodo