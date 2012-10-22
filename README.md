# monotonic-timestamp

Monotonically increasing timestamp.

<img src=https://secure.travis-ci.org/'Dominic Tarr'/monotonic-timestamp.png?branch=master>


This is NOT a  accurate representation of the time.
Since js only measures time as ms, if you call Date.now()
twice quickly, it's possible to get two identical time stamps.

`monotonic-timestamp` fixes that problem! (crudely)

## Example

``` js
var timestamp = require('monotonic-timestamp')

console.log(timestamp())
console.log(timestamp())
console.log(timestamp())
console.log(timestamp())
console.log(timestamp())

```

subsequent calls to timestamp() are ALWAYS strictly ordered.

##TODO

syncronize network time.

## License

MIT
