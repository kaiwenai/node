var url = require("url");
var querystring = require("querystring")
function start(request) {
  console.log("Request handler 'start' was called.");
}

function upload(request) {
  console.log("Request handler 'upload' was called.");
}

function aaa(request){
	
	console.log("哈哈AAA");
}

function showtime(request){
	console.log("time");
	console.log(new Date().getTime())
}

function api(request){
	
	var urlname = url.parse(request.url);
	var arg = url.parse(request.url,true).query;
	console.log(urlname.href);
	console.log(arg);
}
exports.start = start;
exports.upload = upload;
exports.aaa = aaa;
exports.time = showtime;
exports.api = api;