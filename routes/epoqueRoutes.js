const express = require('express')
const router = express.Router()
const epoqueController = require('../controllers/epoqueController')
//const tokenValidation = require('../middleware/tokenValidation')

router.post('/epoque', epoqueController.addEpoque)

router.get('/epoques', epoqueController.readEpoques)

router.put('/epoque', epoqueController.updateEpoque)

module.exports = router
