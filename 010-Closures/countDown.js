"use strict";

function countDown(countDownFrom, delayInMilliSeconds) {
  var counter, delay;
  countDownFrom ? counter = countDownFrom : counter = 10;
  delayInMilliSeconds ? delay = delayInMilliSeconds : delay = 1000;
  var intervalId = setInterval(timeIt, delay);
  function timeIt() {
    console.log("Timer " + counter);
    counter--;
    if (counter < 0) {
      clearInterval(intervalId);
    }
  }
}

countDown(10, 500);
