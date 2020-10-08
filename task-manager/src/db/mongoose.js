 const mongoose = require('mongoose')
 const validator = require('validator')

 mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
     useNewUrlParser: true,
     useCreateIndex: true
 }).then(() => {
     console.log('Connection was successful')
 }).catch((error) => {
     console.log(error)
     console.log(db)
 })


 const Task = mongoose.model('Task', {
     description: {
         type: String,
         required: true,
         trim: true
     },
     completed: {
         type: Boolean,
         default: false
     }
 });