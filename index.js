const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const hbsrs = require('express-handlebars');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const homeRoutes = require('./routes/home');
const adminpanelRoutes = require('./routes/admin-panel');
const accountRoutes = require('./routes/account');
const shopsRoutes = require('./routes/shops');
const flash = require('express-flash');
const csrf = require('csurf');

dotenv.config();

const app = express();

const hbs = hbsrs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
});

const store = new MongoStore({
    collection: 'sessions',
    uri: process.env.URL
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
    secret: 'some secret value',
    resave: false,
    saveUninitialized: false,
    store
}));

app.use(flash());
app.use(csrf());

app.use('/', homeRoutes);
app.use('/collections', shopsRoutes);
app.use('/admin-panel', adminpanelRoutes);
app.use('/account', accountRoutes);

const PORT = 5000 || process.env.PORT;

async function start(){
    try {
        await mongoose.connect(process.env.URL);
        app.listen(PORT);
        console.log("Port is " + process.env.PORT);
    } catch (error) {
        console.log(error);
    }
}

start();