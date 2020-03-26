var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
server.listen(3000);
app.get('/',function (request, respons) {
  respons.sendFile(__dirname+'/index.html');

})
// Массив со всеми подключениями
users = [];
connections = [];

// Функция, которая сработает при подключении к странице
// Считается как новый пользователь
io.sockets.on('connection', function(socket) {
  console.log("Connect");
	connections.push(socket);
	// Удаления пользователя из массива
  socket.on('disconnect',function(date){
    connections.splice(connections.indexOf(socket), 1);
    console.log("Out");
  });
  socket.on('send mess', function(data) {
		io.sockets.emit('add mess', {msg: data.msg, name: data.name, className : data.className});
	});

});
