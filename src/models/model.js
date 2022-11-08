const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const directSchema = new mongoose.Schema({
    dName:{
        type: String,
        require: true,
        unique: true

    },
    directory:{
          type: [ObjectId],
          ref: "todo"
    },
    isDeleted:{
        type: Boolean,
        default: false
    }    
}, {timestamps: true})

const todoSchema =  new mongoose.Schema({
    itemName: {
        type: String,
        unique: true,
        require: true,
        trim: true
    },
    markDone: {
        type: Boolean,
        default: false
    },
    moveToDirectory:{
        type: Boolean,
        default: false
    }
},{timestamps: true})


const directModel = mongoose.model('directory', directSchema)

const todoModel = mongoose.model('todo', todoSchema)


module.exports = {todoModel, directModel}


