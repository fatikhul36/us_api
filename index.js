const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
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

app.listen(port,() => console.log('App listening on port http://localhost:5000!'));