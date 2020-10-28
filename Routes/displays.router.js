const express =require('express');
const router = express.Router();


const displayController = require('../Controllers/display.controller');

router.get('getDisplay/:id',displayController.getDisplay);
router.get('getDisplays',displayController.getDisplays);
router.post('addDisplay',displayController.addDisplay);
router.put('updateDisplay/:id',displayController.updateDisplay);
router.delete('deleteDisplay/:id',displayController.deleteDisplay);

module.exports = router;


