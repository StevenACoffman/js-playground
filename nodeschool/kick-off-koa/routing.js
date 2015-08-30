var koa = require('koa');
var parse = require('co-body');
var app = koa();

app.use(function* (next) {
  'use strict';
  if (this.path !== '/') {
    return yield next;
  }

  // in Koa handler
  var body =
    yield parse(this);
  this.body.name = body.name.toUpperCase();
});

app.use(function* (next) {
  'use strict';
  if (this.path !== '/404') {
    return yield next;
  }

  this.body = 'page not found';
});

app.use(function* (next) {
  'use strict';
  if (this.path !== '/500') {
    return yield next;
  }

  this.body = 'internal server error';
});

app.listen(process.argv[2]);