var _last = 0
var _count = 1
var LAST

module.exports = 
function () {
  var t = Date.now()
  var _t = t
  if(_last == t) {
    _t += ((_count++)/1000) 
  } 
  else _count = 1 

  _last = t

  if(_t === LAST)
    throw new Error('LAST:' + LAST + ',' + _t)
  LAST = _t
  return _t
}

