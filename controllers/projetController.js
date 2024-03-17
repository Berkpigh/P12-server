const projetService = require('../services/projetService')

module.exports.addProjet = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await projetService.addProjet(req.body)
    response.status = 200
    response.message = 'Nouveau projet cree'
    response.body = responseFromService
  } catch (error) {
    console.error('Something went wrong in projetController.js', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.readProjets = async (req, res) => {

  let response = {}

  try {
    const responseFromService = await projetService.readProjets()
    response.status = 200
    response.message = 'Les projets ont bien été lus'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in projetController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.updateProjet = async (req, res) => {
  let response = {}
  //console.log('req :', req)
  try {
    const responseFromService = await projetService.updateProjet(req)
    response.status = 200
    response.message = "Le projet a bien été mis à jour"
    response.body = responseFromService
    //console.log('response :',response)
  } catch (error) {
    console.log('Error in userController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}  
