var koa = require('koa');

var app = koa();

function errorHandler() {
  'use strict';
  return function* (next) {
    // try catch all downstream errors here
    try {
      yield next;
    } catch (err) {
      // set respose status
      this.status = 500;
      // set response body
      this.body = 'internal server error';
      // can emit on app for log
      this.app.emit('error', err, this);
    }
  };
}


app.use(errorHandler());

app.use(function* () {
  'use strict';
  if (this.path === '/error') {
    throw new Error('ooops');
  }
  this.body = 'OK';
});


app.listen(process.argv[2]);