//step 7 import the mongoose library to interact with mongodb
const mongoose = require("mongoose");
//define the schema for "goal" collection
const GoalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String, //optional field: a brief description of the goal

  progress: {
    type: Number, // the progress must be a number
    required: true, // the field is mandatory
    min: 0, // the minimum value allowed is 0
    max: 100, // the maximum value allowed is 100
  },
});

// export the mongoose model for use in order parts of the app
// "Goal" is the name of the model, and it uses GoalSchema as its structure;
module.exports = mongoose.model("Goal", GoalSchema); //to be exported to controller

//then go to the controller to continue