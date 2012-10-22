var _last = 0
var _count = 1

module.exports = 
function () {
  var t = Date.now()
  var _t = t
  if(_last == t) {
    _t += ((_count++)/1000) 
  } 
  else _count = 1 

  _last = t

  return _t
}

