const User = require('../models/users');
const SharedService = require('../services/sharedservice');

const getAllUsers = async () => await SharedService.all(User);

const getUserById = async (id) => await SharedService.get(User,id);

const updateUserById = async(id,body) => await SharedService.update(User,id,body);
module.exports = {getAllUsers, getUserById, updateUserById};