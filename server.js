var https = require('https');
var fs = require('fs');

var options = {
    key:  fs.readFileSync('/etc/ssl/autodeploy.io.key'),
    cert: fs.readFileSync('/etc/ssl/autodeploy.io.crt')
};

var app = https.createServer(options, function (req, res) {
    fs.readFile(__dirname + '/html/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }
            res.writeHead(200);
            res.end(data);
        });
}).listen(3000);

var io = require('socket.io')(app);

io.sockets.on('connection', function (socket) {
    console.log('connected');

    socket.on('history_print', function(msg){
        console.log(msg);
        io.emit('history_live_'+msg.queueId, msg.line);
    });

    socket.on('history_print_refresh', function(msg){
        io.emit('refresh_'+msg.queueId, "refresh");
    });
});
