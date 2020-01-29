const express = require("express"); 
const studentsRouter = require("./src/students/students")
const projectsRouter = require("./src/projects/projects")
const listEndpoints = require("express-list-endpoints");
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const db = require("./src/db/dbConnect")

// const local ="mongodb://127.0.0.1:27017/dbStudents"

const server = express() 
server.get("/", async (req, res) => {
    res.send("server is working");
});

const port = 3003; 

server.use(express.json()); 
server.use(cors());
server.use('/students', studentsRouter)
// server.use('/projects', projectsRouter)



console.log(listEndpoints(server))
server.listen(port, () => { 
    console.log(`Howdy! Your Server is running on port ${port}`); 
});