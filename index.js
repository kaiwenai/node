var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var secrect = require("./secrect");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/aaa"] = requestHandlers.aaa;
handle["/secrect"] = secrect.showSecrect;
handle["/time"] = requestHandlers.time;
handle["/api"] = requestHandlers.api;
//添加了一段注释 哈哈 hahaha
server.start(router.route, handle);