var http = require('http');
var exec = require('child_process').exec;

var port = process.env.PORT || 3000;

var requestHandler = function(request, response) {
	var child = exec("top -b -n 1", function(error, stdout, stderr) {
		if (error !== null) {
			response.end(error);
		} else {
			response.end(stdout + stderr);			
		}
	});
};

var server = http.createServer(requestHandler);

server.listen(port, function(err) {
	if (err) {
		return console.log('something bad happened', err);
	}

});