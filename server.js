


var express = require('express.io');
var PORT = 2000;
var app = express();
console.log('server started on port' + PORT);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('index.ejs');
});

app.io.route('ready', function(req){
	req.io.join(req.data)
	app.io.room(req.data).broadcast('anounce', {
		message: "new client is in the chatroom " + req.data + " room."
	})
})

app.listen(PORT);
