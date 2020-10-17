require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5f89ba22adc454078468f689', {age: 31}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 31})
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate( id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5f89ba22adc454078468f689', 2).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})


