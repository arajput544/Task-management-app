const { query, json } = require('express');
const TaskService = require('../services/task');

const createTask = async (req,res) => {
    const {body} =req;
    try{
        const task = await TaskService.createTask(body);
        res.json(task);
    }catch(error){
        res.status(500).send({error: error.toString()});
    }
};

const getTaskById = async (req,res) => {
    const id = req.params.id;
    try{
        const task = await TaskService.getTaskById(id);
        res.json(task);
    }catch(error){
        res.status(500).send({error : error.toString()});
    }
}

const deletebyId = async(req,res) => {
    const id = req.params.id;
    try{
        const task = await TaskService.deletebyId(id);
        res.json(task);
    }catch(error){
        res.status(500).send({error : error.toString()});
    }
}

const updateTaskById = async (req,res) => {
   const id = req.params.id;
   const {body} = req;
    console.log(id,body);
    try{
        const task = await TaskService.updateTaskById(id, body);
        res.json(task);
    }catch(error){
        res.status(500).send({error:error.toString()})
    }
}
module.exports = {
    createTask,getTaskById, deletebyId,updateTaskById
}