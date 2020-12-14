import mongoose from 'mongoose';
import extendedModel from './extendedModel';


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
    },
    ...extendedModel
});

export default mongoose.model('User', UserSchema);
