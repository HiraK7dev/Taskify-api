import express from 'express'
import getTodo from './controllers/getTodo.js';
import createTodo from './controllers/createTodo.js';
import errorHandler from './middlewares/errorHandler.js'
import mongoose from 'mongoose';
import editTodo from './controllers/editTodo.js';
import deleteTodo from './controllers/deleteTodo.js';
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL).then((res) => console.log(`MongoDB Connected`)).catch((err) => console.log(`Connection Failed! ${err}`));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(errorHandler);

app.route(`/todos`).get(getTodo).post(createTodo);
app.route(`/todos/:id`).patch(editTodo).delete(deleteTodo);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})