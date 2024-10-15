import { Todo } from "../models/todos.models.js";

async function editTodo(req, res) {
    const { id } = req.params;
    const body = req.body;
    if ((await Todo.find({ "_id": id })).length) {
        try {
            const result = await Todo.updateOne(
                { "_id": id },
                { $set: { "task": body.task, "isCompleted": body.isCompleted } }
            );
            res.status(200).json({ message: "success" });
        } catch (error) {
            res.status(500).json({ message: "error" });
        }
    } else {
        res.status(404).json({ message: "not found" });
    }
}

export default editTodo