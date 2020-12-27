module.exports = {
    age: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: false,
        default: 'not specified'
    },
    education:[{
        type: String,
        required: false,
    }]
};
