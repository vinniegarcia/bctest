const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
	const markup = ReactDOMServer.renderToString(new NodeComponent({ node: ancestor }));
	res.send(markup);
});

const inMemoryFamilyStorage = {};

//get all 
router.get('/api/', (req, res) => {
	res.json(inMemoryFamilyStorage);
});

//get single
router.get('/api/:id', (req, res) => {
	res.json(inMemoryFamilyStorage[req.params.id]);
})

//create new
router.post('/api/', (req, res) => {
	let params = inMemoryFamilyStorage[Date.now()] = req.body;
	//set created status and return
	res.status(201).json(params);
});

//edit single
router.put('/api/:id', (req, res) => {
	inMemoryFamilyStorage[req.params.id] = req.body;
	//set accepted status and return new params.
	res.status(202).json(params);
});

//delete single
router.delete('/api/:id', (req, res) => {
	delete inMemoryFamilyStorage[req.params.id];
	//set deleted status, return nothing
	res.status(204).json({});
});

module.exports = router;