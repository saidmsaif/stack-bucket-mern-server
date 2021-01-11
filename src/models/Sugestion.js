// Module Imports
const { Schema, model } = require('mongoose')

// Schema Init
const SugestionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
        default: 0
    }
})

// Create Model
const Sugestion = model('Sugestion', SugestionSchema)

// Exports Documents
module.exports = Sugestion