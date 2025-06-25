const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.getTodos);
router.post('/add', todoController.addTodo);
router.post('/update/:id', todoController.updateTodo);
router.post('/delete/:id', todoController.deleteTodo);

module.exports = router;
