const { query } = require('express');

const ProjectService = require('../services/project');

const getProjects = async (req,res) => {
    try{
        const projects = await ProjectService.getAllProjects();
        res.json(projects)
    }catch(error){
        res.status(500).json(error);
    }
};

const createProject = async (req, res) => {
    const { body } = req;
    try{
        const project = await ProjectService.createProject(body);
        res.json(project);
    }catch(error){
        res.status(500).send({error: error.toString() });
    }
}

const getOneProjectById = async (req,res) => {
    const id  = req.params.id;
    console.log(id);
    try{
        const project = await ProjectService.getOneProjectById(id);
        res.json(project);
    }catch(error){
        res.status(500).send({error : error.toString()});
    }
};

const updateOneProjectById = async (req,res) => {
     const {
        body,
        params: { id },
    } = req;

    try{
        const project = await ProjectService.updateOneProjectById(id,body);
        res.json(project);
    }catch(error){
        res.status(500).send({error : error.toString()});
    }


}
module.exports = {getProjects, createProject, getOneProjectById, updateOneProjectById};