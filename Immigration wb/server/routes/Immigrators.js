const express = require('express');

const {
    GetAllData,
    DeleteDataById,
    AddData,
    GetDataById,
} = require("../controllers/immigratorControllers");

const router = express.Router();

router.get('/',GetAllData)   
router.get('/:id',GetDataById)   
router.delete('/:id',DeleteDataById)  
router.post('/add',AddData)

module.exports = router;