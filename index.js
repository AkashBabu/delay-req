









var onFinished = require('on-finished');

var pendingReq = 0; // variable that is used to count the number of pending requests

/**
 * Timeout function
 * @param {object} options - settings options for timeout
 * @return {function} - function of the form fn(req, res, next)
 */
function timeout (options ) {

    var defaults = {
        delay: 500,
        maxPendingReq: 3000,
        errStatus: 429,
        errMsg: "Too Many Requests"
    }

    options.delay = options.delay || defaults.delay;
    options.maxPendingReq = options.maxPendingReq || defaults.maxPendingReq;
    options.errStatus = options.errStatus || defaults.errStatus;
    options.errMsg = options.errMsg || defaults.errMsg;

    return function (req, res, next) {

    if (pendingReq++ < options.maxPendingReq) {
      onFinished(res, function (err) {
        pendingReq--;
      })
      setTimeout(function () {
        next();
        
      }, options.delay);

    } else {
      res.status(options.errStatus).send(options.errMsg);
    }
  }
  
}

module.exports = timeout
