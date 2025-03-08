const express = require("express"); //import express framework into app.js step 1
const mongoose = require("mongoose"); //imported mongoose for interacting with mongoDB step 5

// CORS middleware to allow cross-origin requests
const cors = require("cors");

// Load environment varaible(env) and configure it
require("dotenv").config();


//step 11
//import route handler
const goalRoutes = require("./routes/goalRoutes");
const app = express(); //initialize the express application step 2
const port = process.env.PORT || 3000; // set port at 3000 step 3

// Allow request from any origin
app.use(cors({origin: "*"}));

//step 9 middleware to pass incoming JSON requests.... you can now test with POSTMAN
app.use(express.json())

//step 12 define the route
app.use("/api/goals", goalRoutes)

//connect to the mongodb and start app server step 6 (go to model)
const start = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  console.log("MongoDB connected successfully");
  //start the express server and listen on the specific port step 4
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
};

start();

//joshuauwagboe5
//z8J1SDJOvdUwWSsd
//mongodb+srv://joshuauwagboe5:z8J1SDJOvdUwWSsd@cluster0.lj3rt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//3 important folders for the backend
// 1. model folder: the model is to give your date base a blueprint or schema of the data structure which will be an object

//2. controller folder: the controller handles the request and response of each function.. request types:get,post,delete,patch,put... responses: (STATUS CODE)200 good, 404 page not found, 201,500 intenal server error

//3. routesm folder:routes defines the path ways for each function coming from the controller.

//mongodb: is the datebase we will be using
//postman: this is used to test of our request and response are working effectively
