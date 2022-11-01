
const mongoose = require("mongoose");

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:<password>@indeedbcluster.sp9r8xb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


const Schema = mongoose.Schema;

var applicationSchema = new Schema({
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
    resume: String,
    
    profilePicture: Buffer,
    created: { 
        type: Date,
        default: Date.now
    }
});