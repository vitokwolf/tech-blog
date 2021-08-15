// load dependecies
const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');

// create server/assign a port
const app = express();
const PORT = process.env.PORT || 3001;

// create connection to database
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// setting up cookies
const sess = {
     secret: process.env.SECRET,
     cookie: { },
     resave: false,
     saveUninitialized: true,
     store: new SequelizeStore({
          db: sequelize
     })
};

app.use(session(sess));

// setting up handlebars as template engine
const hbs = exphbs.create({ });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// add midlleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// setup the server to use routes from controlers
app.use(require('./controllers/'));

// sync database and the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`
                                        ========================================
                                             Now listening on PORT: ${PORT}
                                        ========================================`));
});