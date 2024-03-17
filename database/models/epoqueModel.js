const mongoose = require('mongoose')

const epoqueSchema = new mongoose.Schema(
  {
    titre: String,
    caracteristique: String,
    vecu: String,
    numImage: Number,
    image: String,
    descriptionImage: String
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

module.exports = mongoose.model('Epoque', epoqueSchema)
