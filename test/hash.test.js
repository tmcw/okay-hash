var hash = require('../'),
    assert = require('assert');

describe('is pretty okay', function() {
    it('is pretty okay at most things', function() {
        var seen = {};
        for (var i = 0; i < 1000; i++) {
            var x = Math.random().toString(36).substring(7);
            if (seen[x]) continue;
            for (var k in seen) {
                assert.notEqual(hash(x), seen[x]);
            }
            seen[x] = hash(k);
        }
    });
});

