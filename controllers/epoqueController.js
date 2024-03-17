const epoqueService = require('../services/epoqueService')

module.exports.addEpoque = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await epoqueService.addEpoque(req.body)
    response.status = 200
    response.message = 'Nouvelle epoque cree'
    response.body = responseFromService
  } catch (error) {
    console.error('Something went wrong in epoqueController.js', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.readEpoques = async (req, res) => {

  let response = {}

  try {
    const responseFromService = await epoqueService.readEpoques()
    response.status = 200
    response.message = 'Les époques ont bien été lues'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in epoqueController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.updateEpoque = async (req, res) => {
  let response = {}
  //console.log('req :', req)
  try {
    const responseFromService = await epoqueService.updateEpoque(req)
    response.status = 200
    response.message = "L'époque a bien été mise à jour"
    response.body = responseFromService
    //console.log('response :',response)
  } catch (error) {
    console.log('Error in userController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}  
