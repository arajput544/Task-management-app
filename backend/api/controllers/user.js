const { query } = require('express');

const UserService = require('../services/user');

const getAllUsers = async(req,res) => {
    const {status} = req.query;
    try{

        const users = await UserService.getAllUsers(status);
        res.json(users);
    }catch(error){
        res.status(500).json(error);
    }
}
const getUserById = async(req, res) => {
    const id = req.params.id;
    console.log(id);
    try{
        const user= await UserService.getUserById(id);
        res.json(user);
    }catch(error){
        res.status(500).json(error);
    }
}

const updateUserById = async(req,res) => {
    const {
        body,
        params: { id },
    } = req;
    const user = await UserService.updateUserById(id,body);
    res.json(user);
}

module.exports = {getAllUsers , getUserById, updateUserById};
