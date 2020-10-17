require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndRemove('5f89ed51fbf89e4a5c6d4bdb').then( (tasks) =>{
    console.log(tasks)
    return Task.countDocuments({completed: false})
}).then((countedTasks) => {
    console.log(countedTasks)
}).catch((e) =>{})


const deleteTaskAndCount =  async (id) => {
    const taskDeleted = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5f89ed51fbf89e4a5c6d4bdb').then((count) => {
    console.log(count)
}).then((error) => {
    console.log(error)
})

