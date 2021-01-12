require('dotenv').config()
const path = require('path')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { useMorgan } = require('./middlewares')

const app = express()
mongoose.connect('mongodb://localhost:27017/stack-bucket-mern', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database Connected');
}).catch((e) => {
    console.log(e); 
})


useMorgan(app)
app.use(cors())
app.use(express.static(path.join(__dirname, '../', 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.status('200').json({
        msg: "Hello World",
    })
})

app.use((req, res, next) => {
    const err = new Error('404 Internal Server Error')
    err.status = 404
    next(err)
})

app.use((err, req, res, next) => {
    if (err.status === 404) {
        return res.status(404).json({
            err: err.message,
            status: 404
        })
    } else {
        return res.status(500).json({
            err: 'Error Occured',
            status: 500,
        })
    }
})

// app.use((req, res, next) => {
//     const err = new Error('404 not found')
//     err.status = 404
//     next(err)
// })

// app.use((err, req, res, next) => {
//     if (err.status === 404) {
//         return res.status(404).json({
//             error: err.message,
//             status: 404
//         })
//     } else {
//         return res.status(500).json({
//             msg: 'Internal Server Error',
//             status: 500
//         })
//     }
// })

app.listen(process.env.PORT, () => {
    console.log(`Server Running on Port `, process.env.PORT);
})