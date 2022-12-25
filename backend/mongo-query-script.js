const mongoose = require('mongoose');

const Project = require('./api/models/projects');
const Task = require('./api/models/tasks');
const User = require('./api/models/users');

const { username, password, dbName } = require('./config.json');
// const { findById } = require('./api/models/projects');


const mongourl = `mongodb+srv://captaincool73:${password}@cluster0.fas4may.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(mongourl,()=>{
    console.log('Connected to mongo');
});
const execScript = async () =>{
// await Project.deleteMany({});

// const project = await Project.create({
//     name : 'ElevatorProject',
//     description : 'This project is based on designing a software for elevator', 
    
//     assosciate_repository_url:'www.github.com/elevatorproject'  

// })

// const user = await User.findById('6361d4335a82917477373de7')
// Project.findByIdAndUpdate(
//     "636efdf5e3c5f8d126e713d9",
//     {$push : {manager : user._id}},
//     {new : true, upset:true},
//     (err,project) => {
//         if(err){
//             console.log(err);
//         }else{
//             console.log(project);
//         }
//     }

// )

// const task = await Task.findById('6361d4325a82917477373dda')
// Project.findByIdAndUpdate(
//     "636efdf5e3c5f8d126e713d9",
//     {$push : {tasks_id : task._id}},
//     {new:true, upset:true},
//     (err, project)=> {
//         if(err){
//             console.log(err);
//         }else{
//             console.log(project);
//         }
//     }

// )

// const user = await User.findById('6361d4335a82917477373de7')
// Project.findByIdAndUpdate(
//     "636efdf5e3c5f8d126e713d9",
//     {$push : {users_id : user._id}},
//     {new : true, upset:true},
//     (err,project) => {
//         if(err){
//             console.log(err);
//         }else{
//             console.log(project);
//         }
//     }

// )

// const user = await User.findById('6361d4345a82917477373de9')
// Project.findByIdAndUpdate(
//     "636efdf5e3c5f8d126e713d9",
//     {$push : {users_id : user._id}},
//     {new : true, upset:true},
//     (err,project) => {
//         if(err){
//             console.log(err);
//         }else{
//             console.log(project);
//         }
//     }

// )



// const task = await Task.findById('6361d4325a82917477373ddc')
// Project.findByIdAndUpdate(
//     "636efdf5e3c5f8d126e713d9",
//     {$push : {tasks_id : task._id}},
//     {new:true, upset:true},
//     (err, project)=> {
//         if(err){
//             console.log(err);
//         }else{
//             console.log(project);
//         }
//     }

// )














// **********

// await Task.deleteMany({});

// const task = await Task.create({
//     name : 'web dev',
//     details : 'web dev of a software',
//     priority : 'high',
//     status : 'completed',
//     timeline : 
//         {
//             date_assigned : '09-21-2022',
//             date_due : '09-22-2022',
//             date_updated :'09-25-2022'
//         }
// })

// const project = await Project.findById('636efdf5e3c5f8d126e713d9')
// const user = await User.findById('6361d4335a82917477373de7');
// Task.findByIdAndUpdate(
//     "636f2a62ba5d4081287d9826",
//     {$push : {
//         project : project._id, user: user._id}},
//     {new:true, upset:true},
//     (err, task)=> {
//         if(err){
//             console.log(err);
//         }else{
//             console.log(task);
//         }
//     }

// )

// const task1 = await Task.create(
//     {
//         name: 'testing'  ,
//         details : 'testing of a software' ,
//         priority : 'medium' ,
//         status:'in-review',
//         timeline : {
//             date_assigned : "09-10-2022",
//             date_due  : "09-20-2022",
//             date_updated :"09-15-2022"
//         }
//     }
// )

// const project = await Project.findById('636efdf5e3c5f8d126e713d9')
// const user = await User.findById('6361d4345a82917477373de9');
// Task.findByIdAndUpdate(
//     "636f2a62ba5d4081287d982a",
//     {$push : {
//         project : project._id, user: user._id}},
//     {new:true, upset:true},
//     (err, task1)=> {
//         if(err){
//             console.log(err);
//         }else{
//             console.log(task1);
//         }
//     }

// )
// await User.deleteMany({});

// const user = await User.create({
//     first_name : 'vijaye',
//     last_name:'shekar',
//     position : 'assistant manager' ,
//     status : true
// }
// )
// const project = await Project.findById('636efdf5e3c5f8d126e713d9')
// User.findByIdAndUpdate(
//     "6361d4335a82917477373de7",
//     {$push : { project : project._id}},
//     {new:true, upset:true},
//     (err, user)=> {
//         if(err){
//             console.log(err);
//         }else{
//             console.log(user);
//         }
//     }

// )

const project = await Project.findById('636efdf5e3c5f8d126e713d9')
User.findByIdAndUpdate(
    "6361d4345a82917477373de9",
    {$push : { project : project._id}},
    {new:true, upset:true},
    (err, user1)=> {
        if(err){
            console.log(err);
        }else{
            console.log(user1);
        }
    }

)
// const project = await Project.findById('636efdf5e3c5f8d126e713d9')
// User.findByIdAndUpdate(
//     "6361d4335a82917477373de7",
//     {$push : { project : project._id}},
//     {new:true, upset:true},
//     (err, user)=> {
//         if(err){
//             console.log(err);
//         }else{
//             console.log(task1);
//         }
//     }

// )
// const user1 = await User.create(
//     {
//         first_name: "raj",
//         last_name:"sharma",
//         position:"assosciate manager" ,
//         status : true
//     }
// )

// const user2 = await User.create(
//     {
//         first_name: "rajendra",
//         last_name:"verma",
//         position:"manager" ,
//         status : true
//     }
// )

// const user3 = await User.create(
//     {
//         first_name : "john",
//         last_name :"morgan",
//         position :"tech lead" ,
//         status : true
//     }
// )

// const user4 = await User.create(
//     {
//         first_name: "jack",
//         last_name:"velch",
//         position:"project head" ,
//         status : true
    
//     }
// )

// const user5 = await User.create(
//     {
//         first_name: "rohan",
//         last_name:"pandey",
//         position:"hr" ,
//         status : true
//     }
// )

// //  2. Write a query which uses your User model and interacts with your Mongo Users collection to get a user by id.

// // Print to the console the user document
// // Yes, you may hard code the _id in the query.

// const find = await User.findById(user._id);
// const find2 = await User.findById(user._id);
// console.log(find);
// console.log(find2);



};
execScript();

