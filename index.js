const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const validateMiddleware = require('./middleware/validationMiddleware')

const app = new express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})

app.listen(4000, ()=>{
    console.log("App listening on port 4000")
})

app.get('/', homeController)
app.get('/posts/new', newPostController)
app.use('/posts/store', validateMiddleware)
app.get('/post/:id', getPostController)
app.post('/posts/store', storePostController)