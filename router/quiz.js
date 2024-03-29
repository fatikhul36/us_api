const quizcontroller = require('../controllers/quiz');
const router = require('express').Router();

router.get('/:id',quizcontroller.getAll);
router.post('/',quizcontroller.create);
router.put('/:id',quizcontroller.update);
router.delete('/:id',quizcontroller.delete);

module.exports = router;