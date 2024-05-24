const express = require('express')
const app = express()

const PORT=4000;


app.get('/', (req,res)=>{
    res.send("hello from docker")
})


app.listen(PORT, ()=>{
    console.log(`server is running at : ${PORT}`)
})