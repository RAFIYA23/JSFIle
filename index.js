var express=require("express");
var app=express();
var config=require("config");
var port=parseInt(config.get("port"));
var deptrout=require("./route/dept")

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Access")
    next();
})

app.use("/dept",deptrout);



app.listen(port,()=>{
    console.log("Server Started");
});
