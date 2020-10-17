 const mongoose = require('mongoose')
 const validator = require('validator')

 mongoose.connect('mongodb://127.0.0.1:27017/taski-manager-api', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
 }).then(() => {
     console.log('Connection was successful')
 }).catch((error) => {
     console.log(error)
     
 })


