const db = require("../models/seq");
const Quiz = db.quizzes;

//READ : menampilkan data quiz sesuai model dari databas
exports.getAll = async(req, res) => {
    try {
        const categoryId = req.params.categoryId;
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

      //create: untuk menambah data ke dalam tabel quiz
exports.create = async (req, res) => {

  try {
      const data = await Quiz.create(req.body)
      res.json({
          message: "quiz created succesfully.",
          data: data,
      })
  } catch(error) {
      res.status(500).json({
          message: error.message,
          data: null,
      });
  }
}

//update data quiz
exports.update = async (req,res) => {
  const id = req.params.id
  try {
      const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
      quiz.update(req.body,{
          where: {id}
      })
      res.json({
          message: "quizzes updated successfully",
          data: quiz,
      });
  } catch (error) {
      res.status(500).json({
          message: error.message || "some error occured while retrieving quiz",
          data: null,
      });
  }
}

//menghapus data quiz berdasarkan id
exports.delete = async (req, res) => {
  const id = req.params.id
  try {
      const quiz = await Quiz.findByPk(id,{rejectOnEmpty: true})

      quiz.destroy()

      res.json({
          message: "quiz deleted successfully"
      });
  } catch (error) {
      res.status(500).json({
          message: error.message || "some error occured while retrieving quiz",
          data: null,
      });
  }
}