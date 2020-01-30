const cors = require("cors")
const express = require("express"); 
const studentsRouter = require("./src/students/students")
const projectsRouter = require("./src/projects/projects")
const listEndpoints = require("express-list-endpoints");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const db = require("./src/db/dbConnect")

// const local ="mongodb://127.0.0.1:27017/dbStudents"

var whitelist = [ 'https://be-studentsprojects-mongodb.herokuapp.com/students' ]
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback (null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

const server = express() 
server.get("/", async (req, res) => {
    res.send("server is working");
});

server.use(cors());
server.use(express.json()); 
server.use('/students', studentsRouter)
// server.use('/projects', projectsRouter)

const port = process.env.PORT || 3003; 

console.log(listEndpoints(server))
server.listen(port, () => { 
    console.log(`Howdy! Your Server is running on port ${port}`); 
});