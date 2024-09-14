import { Todo } from "../models/todos.models.js"

async function getTodo(req, res){
    try {
        const result = await Todo.find();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: "Server Error" });
    }
}

export default getTodo