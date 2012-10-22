# timestamp

Monotonically increasing timestamp.

This is NOT a  accurate representation of the time.
Since js only measures time as ms, if you call Date.now()
twice quickly, it's possible to get two identical time stamps.

`timestamp` fixes that problem! (crudely)

## Example

``` js
var timestamp = require('timestamp')

console.log(timestamp())
console.log(timestamp())
console.log(timestamp())
console.log(timestamp())
console.log(timestamp())

```

subsequent calls to timestamp() are ALWAYS strictly ordered.

<img src=https://secure.travis-ci.org/'Dominic Tarr'/timestamp.png?branch=master>


##TODO

syncronize network time.

## License

MIT
