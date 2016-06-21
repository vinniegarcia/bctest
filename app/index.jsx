const ReactDOM = require('react-dom');
const NodeComponent = require('./components/node.jsx');
const ancestor = require('../data/generate');

ReactDOM.render(new NodeComponent({node: ancestor}), document.getElementById('family'));