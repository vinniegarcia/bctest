const Node = require('../libs/node');

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