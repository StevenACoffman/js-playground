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
