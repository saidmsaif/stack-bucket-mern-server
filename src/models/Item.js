// Module Imports
const { Schema, model } = require('mongoose')

// Schema Init
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
        default: 0
    },
    quantity: String,
    isComplete: {
        type: Boolean,
        default: false,
    }
})

// Model Init
const Item = model('Item', ItemSchema)

module.exports = Item