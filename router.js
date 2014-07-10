function route(handle, pathname,request) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === "function") {
  	console.log(handle[pathname])
    handle[pathname](request);
  } else {
    console.log("No request handler found for " + pathname);
  }
}

exports.route = route;