var ts = require('..')
var assert = require('assert')

var l = 1000000
var prev = 0
//assert that timestamps are strictly increasing!
while (l--) {
  var t = ts()
  if(prev >= t) {
    console.log('collision', prev, t)
    assert(prev < t)
  }
  prev = t
}

