const e = require('express');
const db = require('../models');
const Quiz = db.quizzes;

//jawaban di imput satu per satu
exports.submitOne = async (req,res) => {

   
    const jobsheet ={
        quizId : req.body.quizId,
        answer: req.body.answer,
    };

    try {
        var quiz = await Quiz.findOne({
            where : {
                id:req.body.quizId
            }
        });

        if (req.body.answer == quiz.key) {
            res.status(200).json({
                "message" : "benar"
            })
        } else {
            res.status(200).json({
                "message" : 'jawaban benar adalah ${quiz.key}'
            })
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//memasukan beberapa jawaban sekaligus
exports.submitMany = async (req,res) => {
    const jobsheet = {
        quizId : req.body.quizId,
        answer : req.body.answer
    };

    try {
        let benar = 0
        let totalsoal = jobsheet.quizId.lenght
        for (let i = 0; i < totalsoal; i++){
            const quiz = await Quiz.findOne({
                limit: 1,
                where : {
                    id: jobsheet.quizId[i]
                },
                order: [['id','desc']],
            });
            if(quiz.key == jobsheet.answer[i]){
                benar = benar + 2
            }
        }
        res.status(200).json({
            message: 'benar $(benar) dari ${totalsoal} soal'
        })
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};