const express = require('express');
const cors = require('cors');
const app = express();
const quizRoute= require('./router/quiz');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const db = require('./models/seq');
db.sequelize.sync();

app.get('/', (req,res) => {
    res.send('Quiz ExpressJS api');
});

app.use('/api/quizzes',quizRoute);

app.listen(() => console.log('running'));