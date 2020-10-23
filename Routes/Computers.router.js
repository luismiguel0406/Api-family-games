const express = require ('express');
const router = express.Router();

const computerController = require('../Controllers/computers.controller');

router.get('/getcomputers',computerController.getComputers);
router.get('/getcomputer/:id',computerController.getComputer); 
router.put('/updatecomputer/:id',computerController.updateComputer);



module.exports = router;

