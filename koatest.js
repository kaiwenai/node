var koa = require('koa');  
var app = koa();

app.use(function *(){  
  this.body = '滚你妹的';
  console.log("###################");

  console.log("1:"+this.request);
  console.log(this.url);
  console.log(this.request.search);
  console.log(this.query);
  console.log(this.path);
  console.log(this.ip);
  console.log("###################");
  



});

app.listen(8888);