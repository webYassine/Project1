const express  =  require("express")
const app = express()
app.get('/' , (req,res)=>{ res.send('hello world') })
const port = 2233
app.listen(port , ()=>console.log("server runn in "+ port))
