var ts = require('..')
var assert = require('assert')

var l = 1000
var prev = 0
//assert that timestamps are strictly increasing!
while (l--) {
  var t = ts()
  assert(prev < t)
  prev = t
}

