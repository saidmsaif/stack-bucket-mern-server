const { Schema, model } = require('mongoose')

const SugestionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        default: 0
    }
})

const Sugestion = model('Sugestion', SugestionSchema)