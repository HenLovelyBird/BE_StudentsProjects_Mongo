const express = require("express"); 
const studentsRouter = require("./src/students/students")
const projectsRouter = require("./src/projects/projects")
const listEndpoints = require("express-list-endpoints");
const cors = require("cors")
const mongoose = require("mongoose")

const local ="mongodb://127.0.0.1:27017/dbStudents"

mongoose.connect(local,{useNewUrlParser: true})
    .then(db => console.log("MongoDB Connected"),
        err => console.log("There was an error connecting to MongoDb, err"))

const server = express() 

const port = 3003; 

server.use(express.json()); 
server.use(cors());
server.use('/students', studentsRouter)
server.use('/projects', projectsRouter)

console.log(listEndpoints(server))
server.listen(port, () => { 
    console.log(`Howdy! Your Server is running on port ${port}`); 
});