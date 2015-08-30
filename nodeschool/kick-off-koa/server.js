var koa = require('koa');
var app = koa();


// handlers here
// app.use(handlers);

app.use(function* () {
  'use strict';
  this.body = 'hello koa';
});
app.listen(process.argv[2]);