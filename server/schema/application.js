const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var applicationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    
    // Job Information
    jobId: String,
    jobTitle: String,
    organizationName: String,
    postingDate: String,
    semester: String,
    paid: Boolean,
    payRate: String,
    
    // Dynamic Array 
    applicationQuestions: {
        type: Array
    },
    
    // Resume Field
    resume: String;
    
    profilePicture: Buffer,
    created: { 
        type: Date,
        default: Date.now
    }
});