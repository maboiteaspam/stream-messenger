var bubbled = require('@maboiteaspam/bubbled')

var k = 0;

module.exports = function StreamMessenger(name, fnT, fnF) {
  var stream;

  var args = [].slice.apply(arguments);
  if (!name.substr && args.length<3) {
    fnT = name;
    fnF = fnT;
    name = 'stream-msgr'+k
    k++;
  }
  stream = bubbled(name, ['message', 'error'], fnT, fnF);
  stream.name = name;
  return stream;
};
