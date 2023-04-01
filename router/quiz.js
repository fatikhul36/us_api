const quizcontroller = require('../controllers/quiz');
const router = require('express').Router();

router.get('/',quizcontroller.getAll);

module.exports = router;