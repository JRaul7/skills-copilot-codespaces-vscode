// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Set static folder
app.use(express.static('public'));

// Set router
const router = require('./routers/router');
app.use(router);

// Listen port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
