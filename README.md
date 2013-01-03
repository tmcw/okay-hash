# ok-hash

A non-secure hash that's fast and simple. Hashes strings into signed numbers.

```javascript
okhash('foo') // 101574

// hashes are consistent
okhash('foo') // 101574

// and are numeric
okhash('foo bar') // -682507847

// choose your own representation
okhash('foo bar').toString(32) // '-kasfi7'
```

## install

With [npm](https://npmjs.org/) do

    npm install okay-hash
