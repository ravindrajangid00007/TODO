const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

const sassMiddleware = require('node-sass-middleware') ;
app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended' ,
    prefix: '/css'
}));


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(__dirname + '/assets'));
app.use(express.urlencoded());


const db = require('./config/mongoose')
const Todo = require('./models/todo');

// app.get('/', (req, res) => {
//     return res.send('<h1> Home </h1>');
// });
app.use('/', require('./routes/index'));


app.listen(port, (err) => {
    if (err) { console.log("error in starting server"); return; }

    console.log(`server is up and running on port ${port}`);
})



