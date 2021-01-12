const morgan = require('morgan')

module.exports = function (app) {
    const format = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';

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
            stream: process.stdout
        })
    )
}