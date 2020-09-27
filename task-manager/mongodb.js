//CRUD create read update delete
// Create = Insert
// Read = Find

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {
    MongoClient,
    ObjectID
} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'






MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connec to database!')
    }
    console.log('Connected correctly!')
    const db = client.db(database)
    /**
     * Reading a document in the database
     */

    //Find a single document
    // db.collection('users').findOne({
    //     _id: new ObjectID('5f70c7c473985505c68923ea')
    // }, (error, user) => {
    //     if (error) {
    //         return console.log('Cannot connect to the database')
    //     }

    //     console.log(user)
    // })


    // db.collection('users').find({
    //     age: 31
    // }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({
    //     age: 31
    // }).count((error, count) => {
    //     console.log(count)
    // })

    db.collection('tasks').findOne({
        _id: new ObjectID('5f70cbcdb7eff205f0a217ff')
    }, (error, tasks) => {
        console.log(tasks)
    })


    db.collection('tasks').find({
        completed: false
    }).toArray((error, tasks) => {
        console.log(tasks)
    })

    db.addUser('')


    /**
     * Inserting one document
     */
    // db.collection('users').insertOne({
    //     name: 'Kevin',
    //     age: 31
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([{
    //     name: 'Chris',
    //     age: 45
    // }, {
    //     name: 'Jones',
    //     age: 34
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([{
    //         description: 'Go to the grocery store',
    //         completed: true
    //     },
    //     {
    //         description: 'Start cooking dinner',
    //         completed: true
    //     }, {
    //         description: 'Finish Udemy class',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to add tasks')
    //     }

    //     console.log(result.ops)
    // })


})