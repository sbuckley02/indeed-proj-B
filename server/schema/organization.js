const mongoose = require("mongoose");
mongoose.connect('mongodb://admin:webd3vIndeed8rojB@host:port/database?options...');
const Schema = mongoose.Schema;

var organizationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    
    // Basic Information
    organizationName: {
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
    website: String,
    twitter: String,
    facebook: String,
    linkedin: String,
    profilePicture: Buffer,
    created: { 
        type: Date,
        default: Date.now
    }
});