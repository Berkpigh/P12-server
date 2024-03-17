const Epoque = require('../database/models/epoqueModel')

module.exports.addEpoque = async serviceData => {
  console.log(serviceData)
  try {
    const epoque = await Epoque.findOne({ email: serviceData.titre })
    if (epoque) {
      throw new Error('Epoque deja existante')
    }

    const newEpoque = new Epoque({
      titre: serviceData.titre,
      caracteristique: serviceData.caracteristique,
      vecu: serviceData.vecu,
      numImage: serviceData.numImage,
      image: serviceData.image,
      descriptionImage: serviceData.descriptionImage
    })
  console.log(newEpoque)
    let result = await newEpoque.save()

    return result
  } catch (error) {
    console.error('Error in epoqueService.js', error)
    throw new Error(error)
  }
}

module.exports.readEpoques = async serviceData => {
  try {
    const epoques = await Epoque.find()

    return epoques
  } catch (error) {
    console.error('Error in epoqueService.js', error)
    throw new Error(error)
  }
}

module.exports.updateEpoque = async serviceData => {
  try {
    console.log('serviceData :',serviceData)
    const epoque = await Epoque.findOneAndUpdate(
      { _id: serviceData.body._id },
      {
        titre: serviceData.body.titre,
        caracteristique: serviceData.body.caracteristique,
        vecu: serviceData.body.vecu,
        numImage: serviceData.body.numImage,
        image: serviceData.body.image,
        descriptionImage: serviceData.body.descriptionImage      
      },
      { new: true }
    )
    return epoque.toObject()
  } catch (error) {
    console.error('Error in epoqueService.js', error)
    throw new Error(error)
  }
}