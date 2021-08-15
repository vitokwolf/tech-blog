// load dependecies
const express = require('express');
const path = require('path');


// create server/assign a port
const app = express();
const PORT = process.env.PORT || 3001;

// create connection to database
const sequelize = require("./config/connection");


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