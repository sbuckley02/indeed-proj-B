const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    // Basic Information
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: String,
    streetAddress: String,
    city: String,
    state: String,
    zipCode: String,

    // Applicant Information
    resume: String,
    experience: Array,
    positionsApplied: Array,
    linkedin: String,
    profilePicture: Buffer,
    created: {
        type: Date,
        default: Date.now
    }
});
