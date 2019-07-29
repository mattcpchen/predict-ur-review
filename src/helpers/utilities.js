


export const debounce = (fn, delay) => {
  var dbTimeout = null;
  return function() {
    var args = Array.from(arguments);
    clearTimeout(dbTimeout);
    dbTimeout = setTimeout(function(){
      fn.apply(null, args);
      dbTimeout = null;
    }, delay);
  }
};


export const throttle = (fn, timeSpan) => {
  var lastTime = 0;
  return function() {
    var args = Array.from(arguments);
    var nowTime = new Date().getTime();
    if(nowTime-lastTime >= timeSpan) {
      lastTime = nowTime;
      fn.apply(null, args);
    }
  }
};

