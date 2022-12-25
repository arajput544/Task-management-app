const router = require('express').Router();

const Task = require('../controllers/task');


router.post('/', Task.createTask);
router.get('/:id', Task.getTaskById);
router.delete('/:id', Task.deletebyId);
router.put('/:id', Task.updateTaskById);
module.exports = router;