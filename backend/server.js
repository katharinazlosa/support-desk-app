const path = require('path')
const express = require('express')
require('colors')
require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

//connect to database
connectDB()


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to the Support desk API'})
})

//routes
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

//serve frontend
if(process.env.NODE_ENV === 'production') {
    //set build folder as static
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    //fix: below code fixes app crashing on refresh in deployment
    app.get('*', (_, res) => {
        res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
    })
} else {
    app.get('/', (_, res) => {
        res.status(200).json({message: 'Welcome to the Support Desk API'})
    })
}


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))