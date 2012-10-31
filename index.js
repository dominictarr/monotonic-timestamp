// If `Date.now()` is invoked twice quickly, it's possible to get two
// identical time stamps. To avoid generation duplications, subsequent
// calls are manually ordered to force uniqueness.

var _last = 0
var _count = 1

module.exports =
function timestamp() {
  /**
  Returns NOT an accurate representation of the current time.
  Since js only measures time as ms, if you call `Date.now()`
  twice quickly, it's possible to get two identical time stamps.
  This function guarantees unique but maybe inaccurate results
  on each call.
  **/
  var time = Date.now()
  var adjusted = time
  // If time returned is same as in last call, adjust it by
  // adding 1 / 1000-th of the number in counter. Also counter
  // is incremented so that next call get's adjusted properly.
  if (_last === time) adjusted += _count++ / (_count + 999)
  // If last time was different reset timer back to `1`.
  else _count = 1
  
  _last = time
  return adjusted
}
