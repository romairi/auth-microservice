const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
        maxLength: 200,
    },
    creationTime: {
        type: Date,
        default: Date.now,
    }
});

UserSchema.statics.createUser = async function (args) {
    const user = await this.create(args);
    return await user.save();
};

module.exports = mongoose.model('User', UserSchema);
