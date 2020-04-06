const mongoose = require('mongoose')
// import Schema from mongoose
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // Only has a single field
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true, //trim whitespace at the end
        minlength:3
    },
},{
    timestamps:true, // automatically create fields for when created and modified.
}
);

// User could be anything, it's just a name.  
const User = mongoose.model('User',userSchema);

module.exports = User;