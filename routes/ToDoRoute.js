const {Router} = require('express');
const { getTodo, saveToDo, updateToDo, deleteToDo } = require('../controllers/ToDoController');

const router = Router();

 router.get('/', getTodo)

 router.post('/save', saveToDo)

 router.put('/update', updateToDo)

 router.delete('/delete', deleteToDo)

 module.exports = router;
