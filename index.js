const { Server } = require("socket.io");

const io = new Server({cors:"http://localhost:3302"});


io.on("connection", (socket) => {
  console.log("new connection",socket.id)
  socket.on("send_message",(data)=>{
    console.log('data',data)
    if(data){
      io.emit("get_mess",data)
    }
  })
});

io.listen(3000);