const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');

const polygons = require('./routes/polygons');

const app = express();

app.use(fileUpload({
  createParentPath: true,
}));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/api/v1/polygons', polygons);

app.use('/', express.static(path.join(__dirname, 'static')));

module.exports = app;
