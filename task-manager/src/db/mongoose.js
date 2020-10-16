 const mongoose = require('mongoose')
 const validator = require('validator')

 mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
        useUnifiedTopology: true,
        useNewUrlParser: true
 }).then(() => {
     console.log('Connection was successful')
 }).catch((error) => {
     console.log(error)
     
 })


