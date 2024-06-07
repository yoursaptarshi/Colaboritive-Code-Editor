const express = require('express');
const dotenv = require('dotenv')
const app = express();
const userRoute = require('./routes/user')
const {Server} = require('socket.io')
const codeBaseRoute = require('./routes/CodeBase')
const http = require('http')
const cookieParser = require("cookie-parser");
const UserModel = require('./models/User')
const cors = require('cors')
dotenv.config({path:'./config/config.env'})



//socketIO

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"],
        credentials:true
    }
})

io.on('connection',(socket)=>{
  console.log('Hi from server')
    socket.emit("New-User-Welcome",`Welcome to CodeShare`)
  socket.on('Join-Room',({roomName})=>{
    socket.join(roomName)
  })

  socket.on('personal-code-to-server',({code,roomName})=>{
    if(code !='' && roomName!='')
      {
        
    io.to(roomName).emit("all-codes-from-server",code)
      }
  })
  
  socket.on('send-message-to-server',({message,roomName})=>{
    io.to(roomName).emit("send-message-to-client",message)
    
  })

  })








//middlewares
app.use(cors({origin:'http://localhost:3000',credentials:true}))

    
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api/v1",userRoute);
app.use("/api/v1",codeBaseRoute);




module.exports = server;