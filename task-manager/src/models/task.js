const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if(value.isEmpty()){
                throw new Error('There is no task in the description')
            }
        }
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = Task