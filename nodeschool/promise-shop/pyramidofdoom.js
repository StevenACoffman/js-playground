/* jshint esnext:true, devel:true, browser:true, jquery:true, -W024, -W097, -W098 */
/* global asyncOperation:false, anotherAsync:false, yetAnotherAsync:false */
'use strict';

// Normal callback usage => PYRAMID OF DOOOOOOOOM
asyncOperation(function(data) {
  // Do some processing with `data`
  anotherAsync(function(data2) {
    // Some more processing with `data2`
    yetAnotherAsync(function() {
      // Yay we're finished!
      console.log(data + data2);
    });
  });
});


// Let's look at using promises
asyncOperation()
  .then(function(data) {
    // Do some processing with `data`
    return anotherAsync();
  })
  .then(function(data2) {
    // Some more processing with `data2`
    return yetAnotherAsync();
  })
  .then(function() {
    // Yay we're finished!
  });
