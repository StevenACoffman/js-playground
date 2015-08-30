See http://javascriptplayground.com/blog/2014/11/js-modules-jspm-systemjs/

```bash
npm install --global jspm
jspm install
jspm install jquery
```


```javascript
var $ = require('jquery');
// next line is es6 syntax
//import $ from 'jquery';
console.log($.fn.jquery);
```

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="jspm_packages/system.js"></script>
    <script src="config.js"></script>
    <script>
      System.import('./app');
    </script>
  </head>
  <body>
  </body>
</html>
```

```bash
jspm install bootstrap
```

```javascript
import * as $ from 'jquery';
//'bare' import has side effects (event binding), but no variable assignment
import 'bootstrap';

```

```html
<!DOCTYPE html>
<html>

<head>
  <script src="jspm_packages/system.js"></script>
  <script src="config.js"></script>
  <script>
    System.import('./app');
  </script>
  <link href="./jspm_packages/github/twbs/bootstrap@3.3.4/css/bootstrap.min.css" rel="stylesheet">
  <link href="./jspm_packages/github/twbs/bootstrap@3.3.4/css/bootstrap-theme.min.css" rel="stylesheet">
</head>

<body>
  <div class="container">
    <div class="jumbotron">
      <h1>Hello, world!</h1>
      <p>...</p>
      <p><a class="btn btn-primary btn-lg" href="#" role="button"><i class="fa fa-check-circle"></i>Learn more</a></p>
    </div>
    <div class="alert alert-warning alert-dismissible fade in" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
      <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
    </div>
  </div>
</body>

</html>
```



```bash
npm install systemjs-builder
npm install traceur
#npm install babel-core

```

my-project/
  |- src/
  |  |- jspm_packages/
  |  |- app/
  |  |  |- app.js
  |  |  |- jspm.config.js
  |  |  |- index.html
  |- gulpfile.js
  |- package.json
