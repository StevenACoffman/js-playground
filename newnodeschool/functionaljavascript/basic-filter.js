'use strict';

function getShortMessages(messages) {
  return messages.map(function getBareMessage(currentValue) {
    return currentValue.message;
  }).filter(function lengthLessThanFifty(element) {
    return element && element.length < 50;
  });
}


module.exports = getShortMessages;