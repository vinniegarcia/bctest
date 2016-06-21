webpackJsonp([0,3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	const ReactDOM = __webpack_require__(1);
	const NodeComponent = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/node.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	const ancestor = __webpack_require__(159);
	
	ReactDOM.render(new NodeComponent({ node: ancestor }), document.getElementById('family'));

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	const Node = __webpack_require__(160);
	
	// let's make a family!
	let ancestor = new Node('great-grandma');
	let grandma = new Node('grandma', ancestor);
	let flo = new Node('great-aunt Flo', ancestor);
	
	ancestor.addChild(grandma);
	ancestor.addChild(flo);
	ancestor.addChild(new Node('great-uncle Billy', ancestor));
	ancestor.addChild(new Node('great-uncle Mark', ancestor));
	
	let ma = new Node('ma', grandma);
	grandma.addChild(ma);
	grandma.addChild(new Node('uncle jim', grandma));
	grandma.addChild(new Node('aunt rachel', grandma));
	
	flo.addChild('cousin jill', flo);
	
	let me = new Node('me', ma);
	let bro = new Node('bro', ma);
	let sis = new Node('sis', ma);
	ma.addChild([me, bro, sis]);
	
	let son = new Node('son', me);
	let daughter = new Node('daughter', me);
	
	me.addChild([son, daughter]);
	
	let niece = new Node('niece', bro);
	let nephew = new Node('nephew', sis);
	bro.addChild(niece);
	sis.addChild(nephew);
	
	module.exports = ancestor;

/***/ },

/***/ 160:
/***/ function(module, exports) {

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

/***/ }

});
//# sourceMappingURL=app.c04286ce5ddb479ac07f.js.map