const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const hbsrs = require('express-handlebars');
const indexRouter = require('./routes/index');

const app = express();

const hbs = hbsrs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', indexRouter);

const PORT = 5000 || process.env.PORT;

async function start(){
    try {
        app.listen(PORT);
    } catch (error) {
        console.log(error);
    }
}

start();