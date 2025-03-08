//step 8
//import the goal model to interact with the mongodb database
const Goal = require("../Model/Goal");


//=======================

//create a new goal controller
const newGoal = async (req, res) => {
    //extract tittle, description and progress from the request body
    const  {title, description, progress} = req.body;
    // Create a new goal document with the porvided data
    const goal = new Goal({title, description, progress})

    //save the goal to the database
    const savedGoal = await goal.save()

    //Send a success message with the saved goal
    res.status(201).json({message: "Goal created successfully", savedGoal})
};

// const goals = await Goal.create({})



// ================================
// Get all goals
const allGoals = async (req, res) => {
const goals = await Goal.find();

res.status(200).json(goals)
};


// ========================
// Get all completed goals (progress === 100)
const completedGoals = async (req, res) => {
    const completedG = await Goal.find({progress: 100})

    res.status(200).json(completedG)
};



// ======================
// Get all ongoing goals (progress < 100)

const ongoingGoals = async(req, res) => {
    const ongoingG = await Goal.find({progress: {$lt: 100}})

    res.status(200).json(ongoingG)
};

// ==============================
// To get a particular goal by ID
const getGoal = async (req, res) => {
const goal = await Goal.findById(req.params.id);
if (!goal) {
   return res.status(404).json({error: "Goal not found"})
}

res.status(200).json(goal);
};


// =============================
// update only the progress field of a goal 
const editProgress = async (req, res) => {
    const {progress} = req.body;

    // Ensure progress is updated before submitting 
    if (progress === undefined) {
        return res.status(400).json({error: "progress value is required"})

    }

    // Find the goal by ID and update that particular goals progress
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, {progress}, {new: true})

    res.status(201).json(updatedGoal)
};

// ================================
// delete a goal by ID
const deletedGoal = async (req, res) => {
    const deleted = await Goal.findByIdAndDelete(req.params.id)

    res.status(200).json({message: "Goal deleted successfully"})
};

module.exports = {newGoal, allGoals, completedGoals, ongoingGoals, editProgress, getGoal, deletedGoal}; // export all the controller funsctions for use in routes