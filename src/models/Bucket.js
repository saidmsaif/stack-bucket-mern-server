// Modules Imports
const { Schema, model } = require('mongoose')

// Schema Init
const BucketSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        default: 0,
    },
    items: {
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }
}, {timestamps: true})

// Model Creation
const Bucket = model('Bucket', BucketSchema)

// Module Exports
module.exports = Bucket