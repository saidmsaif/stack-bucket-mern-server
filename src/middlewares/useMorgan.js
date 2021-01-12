const morgan = require('morgan')
const fs = require('fs')
const path = require('path')

module.exports = function (app) {
    const format = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';

    // create a write stream (in append mode)
    var accessLogStream = fs.createWriteStream(
        path.join(__dirname, '../../', 'logs', 'access.log'),
        {
            flags: 'a'
        }
    )

    // Status Code 400 & 500
    app.use(
        morgan(format, {
            skip: (req, res) => res.statusCode < 400,
            stream: process.stderr
        })
    )

    // Status Code 200 & 300
    app.use(
        morgan(format, { 
            skip: (req, res) => res.statusCode >= 400,
            stream: accessLogStream
        })
    )
}