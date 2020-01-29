const mongoose = require("mongoose")
const validator = require ("validator")

const projectsSchema = new mongoose.Schema({
    name: String,
    description: String,
    liveurl: String,
    quantity: Number
    
})

const studentSchema = new mongoose.Schema({
    image:{
        type: String,
        required: false,
        default: "https://picsum.photos/200"
    },
    name: { 
        type: String,
        required: true
    },
    surname: { 
        type: String,
        required: true
        
    },
    email: { 
        type: String,
        required: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid!")
            }
        }
    },

    dateOfBirth:{ 
        type: Date,
        required: false
    },

    projects: [projectsSchema]

    
})

const studentCollection = mongoose.model("student", studentSchema)

module.exports = studentCollection