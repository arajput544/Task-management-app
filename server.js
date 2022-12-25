const cors = require('cors');
const mongoose = require('mongoose');
const express= require('express');

const app=express();
const port = 8880;

const projects=require('./api/routes/projects');
const tasks = require('./api/routes/tasks');
const users = require('./api/routes/users');
const { username, password, dbName } = require('./config.json');
app.use(cors());

app.use(express.json());
app.use('/projects',projects);
app.use('/tasks', tasks);
app.use('/users', users);

const mongourl = `mongodb+srv://captaincool73:${password}@cluster0.fas4may.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(mongourl,()=>{
    console.log('Connected to mongo');
});
app.listen(port,() => {
    console.log(`Server is listening to ${port}`);
});