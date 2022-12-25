const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema(
    {
        name : String,
        details : String,
        priority : {
            type : String,
            enum : ['high','medium','low']
        },
        status : {
            type : String,
            enum : ['assigned','in-review','completed']
        },
        timeline : {
            date_assigned : Date,
            date_due : Date,
            date_updated : Date
        },
        user : {type: mongoose.Schema.Types.ObjectId, ref : 'User'},
        project : {type: mongoose.Schema.Types.ObjectId, ref : 'Project'}
        
    })

const Task = mongoose.model('Task',TaskSchema);

module.exports = Task;