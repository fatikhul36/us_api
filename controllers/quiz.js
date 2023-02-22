const db = require("../models");
const Quiz = db.quizzes;

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

//READ : menampilkan data quiz sesuai model dari databas
exports.getAll = async(req, res) => {
    try {
        const quizzes = await Quiz.findAll()
        res.json({
            message: "Quizzes retrieved successfully",
            data : quizzes,
        });
    } catch (error) {
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

//menampilkan quiz berdasarkan id
exports.findOne = async (req,res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true})
        res.json({
            message: 'quizzes retrieved successfully with id=${id}.',
            data : quiz,
        });
    } catch (error){
        res.status(500).json({
            message: error.message || "some error occurred while retrieving quiz",
            data: null,
        });
    }
}

//menampilkan quiz berdasarkan category
exports.getByCategoryId = async (req,res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            categoryid: id
        }
    })
    res.json({
        message:'quizzes retrieved succesfully with categoryid=$(id).',
        data: quizzes,
    });
}

//menampilkan quiz berdasarkan level
exports.getByLevelId = async (req,res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where: {
            levelId: id
        }
    })
    res.json({
        message: 'quizzes retrieved succesfully with levelId=${id}.',
        data: quizzes,
    });
}