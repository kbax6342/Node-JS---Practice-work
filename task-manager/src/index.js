const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000

// app.use( (req, res, next) => {
//     if(req.method === 'GET' || req.method === 'POST' || req.method === 'PATCH' || req.method === 'DEL'){
//         res.status(503).send('This site is down')
//     }else {
//         next()
//     }
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const bcrypyt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const myFunction = async () => {
   const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse')

   const data = jwt.verify(token, 'thisismynewcourse')

}

myFunction()