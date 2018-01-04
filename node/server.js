/*eslint no-console: 0, no-unused-vars: 0*/
/*"use strict";

var xsjs  = require("@sap/xsjs");
var xsenv = require("@sap/xsenv");
var port  = process.env.PORT || 3000;

var options = {
	anonymous : true, // remove to authenticate calls
	redirectUrl : "/index.xsjs"
};

// configure HANA
try {
	options = Object.assign(options, xsenv.getServices({ hana: {tag: "hana"} }));
} catch (err) {
	console.log("[WARN]", err.message);
}

// configure UAA
try {
	options = Object.assign(options, xsenv.getServices({ uaa: {tag: "xsuaa"} }));
} catch (err) {
	console.log("[WARN]", err.message);
}

// start server
xsjs(options).listen(port);

console.log("Server listening on port %d", port);*/

// var http = require('http');
// var port = 3000;

// var requestHandler = function(request, response) {
//   console.log(request.url);
//   response.end('Hello Node.js Server!');
// };

// var server = http.createServer(requestHandler);

// server.listen(port, function(err) {
//   if (err) {
//     return console.log('something bad happened', err);
//   }

// });

/*eslint no-console: 0, no-unused-vars: 0, no-undef:0*/

"use strict";
var https = require("https");
var xsenv = require("@sap/xsenv");
var port = process.env.PORT || 3000;
var server = require("http").createServer();
var requestHandler = function(request, response) {
  response.end('Hello Node.js Server!');
};
server.on("request", requestHandler);
server.listen(port, function() {
	console.info("HTTP Server: " + server.address().port);
});
