const app =require('./app')
const {connectDatabase} = require('./config/database')

connectDatabase();
app.listen(process.env.PORT,()=>{
    console.info(`Server is listining to ${process.env.PORT} `)
})