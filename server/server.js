const server =require('./app')
const {connectDatabase} = require('./config/database')

connectDatabase();
server.listen(process.env.PORT,()=>{
    console.info(`Server is listining to ${process.env.PORT} `)
})