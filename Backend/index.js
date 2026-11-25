import express from "express"

const app = express()

const PORT = 4000

app.get("/",(req,res)=>{
    res.send("<h1>Wecome on my Application<h/>")
})
app.get("/login",(req,res)=>{
    res.send("<h1>Enter your credential for the Login<h/>")
})
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})