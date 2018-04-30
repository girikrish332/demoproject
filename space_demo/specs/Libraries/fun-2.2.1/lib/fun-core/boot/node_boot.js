module.exports = function(funRequire) {
  var fun = funRequire.core(funRequire);

  var consoleFns = require('../console/console.js');
  consoleFns.console(consoleFns, fun);

  var env = fun.getEnv();

  var funInterface = funRequire.interface(fun, env);

  extend(global, funInterface);

  function extend(destination, source) {
    for (var property in source) destination[property] = source[property];
    return destination;
  }

  return fun;
};
