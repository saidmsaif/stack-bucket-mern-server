const { Schema, model } = require('mongoose')

const ItemSchema = new Schema({
    name: {
        tyep: String,
        required: true
    },
    cost: {
        type: Number,
        required: true,
        default: 0
    },
    quantity: String,
    isComplete: {
        type: Boolean,
        default: false
    }
})

const Item = model('Item', ItemSchema)