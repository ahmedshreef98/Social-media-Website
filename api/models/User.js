const mongoose = require('mongoose')


var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, min: 4, max: 12, required: true },
    email: {
     type: String,
     trim: true,
     lowercase: true,
     unique: true,
     required: 'Email address is required',
     validate: [validateEmail, 'Please fill a valid email address'],
     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
 },
    password: { type: String, required: true, min:5 , max:16 }
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel



