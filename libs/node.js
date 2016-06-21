// Code goes here
//basic node model to represent the family
function Node (name, parent) {
  this.parent = parent;
  this.name = name;
  this.children = [];
}

//helper methods to add/remove child nodes
Node.prototype.addChild = function (child) {
  if (!Array.isArray(child)) {
    this.children.push(child);
  } else {
    child.forEach((k) => this.children.push(k));
  }
};

Node.prototype.removeChild = function (child) {
  var kidIndex = this.children && this.children.indexOf(child);
  if (kidIndex > -1) {
    this.children.splice(kidIndex, 1);
  }
};

//dipslay 
Node.prototype.toString = function () {
  return this.name || 'unnamed node';
};

//more utility properties
Object.defineProperty(Node.prototype, 'hasChildren', {
	get: function () {
		return this.children && this.children.length > 0;
	}
});

Object.defineProperty(Node.prototype, 'hasParent', {
	get: function () {
		return !!this.parent;
	}
});

module.exports = Node;