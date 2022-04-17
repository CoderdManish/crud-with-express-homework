const mongoose = require("mongoose")

const { Schema } = mongoose;

const curdSchema = new Schema({
    todo: {
        type: String,
     
    },
    timeStamp: {
        type: Date,
        default:Date.now
    }
})
module.exports = mongoose.model("crud",curdSchema)