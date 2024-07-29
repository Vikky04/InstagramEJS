const express=require("express");

const app=express();

let port=8080;

app.set("view engine","ejs");

app.get("/:username",(req,res)=>{
  const instadata=require("./data.json"); // backend data requires 
let {username}=req.params;
   res.render("Insta.ejs",{data : instadata[username]});
});

app.get("/",(req,res)=>{
        res.render("home.ejs");
        // this response rensdering and it use home.
        //ejs file which is in views folder must to decet
        // that file in views folder always
});

app.get("/rolldice",(req,res)=>{
    let dice=Math.floor(Math.random()*6)+1;// if this comes from database then we send 
    // this value to ejs file with render as second argument which is sending as object key val pair

        res.render("rolldice.ejs",{num : dice});
});

app.listen(port,()=>{
    console.log("hello");
});
