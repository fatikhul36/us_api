const db = require("../models/seq");
const Quiz = db.quizzes;

//READ : menampilkan data quiz sesuai model dari databas
exports.getAll = async(req, res) => {
    try {
        const categoryId = req.query.categoryId;
    const questions = await Quiz.findAll({ where: { categoryid: categoryId } });
    res.json(questions.map((question) => {
      return {
        id: question.id,
        quiz: question.quiz,
        options: [question.a, question.b, question.c, question.d]
      }
    }));
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
      };
