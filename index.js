var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var arr = [];
app.get('/',function(req,res){
res.sendFile(__dirname+'/index.html');
})

io.on("connection",function(socet){
arr.push(socet);
console.log("User connected "+arr.length);

socet.on("disconnect",function(){
arr.splice(socet,1);
console.log("User disconnected "+arr.length);
})



});





http.listen("3000",function(){
console.log("srvere created at port 3000");

})
