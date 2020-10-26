const express = require ('express');
const router = express.Router();

const computerController = require('../Controllers/computers.controller');

router.get('/getComputers',computerController.getComputers);
router.get('/getComputer/:id',computerController.getComputer); 
router.put('/updateComputer/:id',computerController.updateComputer);
router.delete('/deleteComputer/:id',computerController.deleteComputer);
router.post('/addComputer',computerController.addComputer);



module.exports = router;

