const mongoose = require('mongoose')

const projetSchema = new mongoose.Schema(
  {
    numProjet: Number,
    nom: String,
    scenario: String,
    resultat: String,
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        // delete ret.password
        delete ret.__v
        return ret
      }
    }
  }
)
module.exports = mongoose.model('Projet', projetSchema)
