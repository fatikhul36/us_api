const quizcontroller = require('../controllers/quiz');
const router = require('express').Router();

router.post('/',quizcontroller.create);
router.get('/',quizcontroller.getAll);
router.get('/:id',quizcontroller.findOne);
router.put('/:id',quizcontroller.update);
router.delete('/:id',quizcontroller.delete);
router.get('/category/:id',quizcontroller.getByCategoryId);
router.get('/level/:id',quizcontroller.getByLevelId);

module.exports = router;