const express = require('express')
const router = express.Router()
const projetController = require('../controllers/projetController')

router.post('/projet', projetController.addProjet)

router.get('/projets', projetController.readProjets)

router.put('/projet', projetController.updateProjet)

module.exports = router
