const React = require('react');
const ReactDOM = require('react-dom');
const Node = require('../libs/node');

const NodeComponent = (props) => {
  const {parent, children} = props.node;
  const classes = (props.node.hasChildren) ? 'parent' : 'childfree';
  //solving some constraints to make it look better
  const divisor = props.node.hasParent && props.node.hasChildren ? parent.children.length : 1;
  let width = ((100 / divisor) - 5) + '%';
  if (divisor > 2) {
	  width = '50%';
	}
  const borderRadius = width / 2;
  let descendents = null;
  //recursively map children so they show up in the family tree
  if (children && children.length > 0) {
	  descendents = children.map((child, i) => {
      return new NodeComponent({ node: child });
	  });
	}
  return (
	<div className={classes}  style={{ width: width}}>
    	<h2>{props.node.toString()}</h2>
    	{descendents}
 	 </div>
  );
};

module.exports = NodeComponent;