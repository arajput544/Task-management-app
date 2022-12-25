const { Model } = require('mongoose');
const Project = require('../models/projects');
const SharedService = require('../services/sharedservice');

const getAllProjects = async () => await SharedService.all(Project);

const createProject = async (body) => {
    const v = await SharedService.create(Project, body);
    return v;
}

const getOneProjectById = async(id) => await SharedService.get(Project,id);


const updateOneProjectById = async(id,body) =>  await SharedService.update(Project,id,body);

module.exports = {
    getAllProjects,
    createProject,
    getOneProjectById,
    updateOneProjectById
};