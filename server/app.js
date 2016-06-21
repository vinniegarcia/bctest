const express = require('express');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ancestor = require('../data/generate');
const NodeComponent = require('../app/index.jsx');
const routes = require('./routes');
const app = express();

app.use(bodyParser.json());
app.use(serveStatic(path.join(__dirname, '../public')));

app.use(routes);

app.listen(3000);