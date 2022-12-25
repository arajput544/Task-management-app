const Task = require('../models/tasks');

const SharedService = require('../services/sharedservice');

const createTask = async (body) => {
    const e = await SharedService.create(Task,body);
    return e;
}
const getTaskById = async(id) => await SharedService.get(Task,id);

const deletebyId = async(id) => await SharedService.remove(Task,id);

const updateTaskById = async(id,body) => {
    const task = await SharedService.get(Task,id);
    if(task.status === 'assigned'){
        const result = Task.findByIdAndUpdate(id,body);
        return result;
    }else{
        task.status = body.status;
        const result = Task.findByIdAndUpdate(id,task);
        return result;
    }

}

module.exports = {createTask,getTaskById,deletebyId,updateTaskById};