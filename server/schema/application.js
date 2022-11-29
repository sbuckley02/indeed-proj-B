const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var applicationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    // Job Information
    positionId: String,
    positionTitle: String,
    organizationName: String,
    orgType: String,
    postingDate: String,
    semester: String,
    timeCommitment: String,
    meetingType: String,
    dues: Boolean,

    paid: Boolean,
    payRate: String,

    // Dynamic Array
    applicationQuestions: {
        type: Array
    },

    // Resume Field
    resume: String,

    profilePicture: Buffer,
    created: {
        type: Date,
        default: Date.now
    }
});
