var http = require("http");
var url = require("url");

function start(route, handle, secrect) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    request.addListener("data", function(chunk) {
  	// called when a new chunk of data was received
	});

	request.addListener("end", function() {
  	route(handle, pathname,request);

	});

        response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
