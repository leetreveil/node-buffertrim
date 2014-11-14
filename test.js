var buffertrim = require('./')
var test = require('tape')

var trimStart = buffertrim.trimStart
var trimEnd = buffertrim.trimEnd
var trim = buffertrim.trim

test('trim 0x00 from start of buffer', function (t) {
    t.deepEqual(trimStart(new Buffer([0x00, 0x00, 0x66, 0x6F, 0x6F])), new Buffer([0x66, 0x6F, 0x6F]))
    t.deepEqual(trimStart(new Buffer([0x00, 0x00, 0x6F])), new Buffer([0x6F]))
    t.end()
})

test('trim 0x00 from end of buffer', function (t) {
    t.deepEqual(trimEnd(new Buffer([0x66, 0x6F, 0x6F, 0x00, 0x00])), new Buffer([0x66, 0x6F, 0x6F]))
    t.deepEqual(trimEnd(new Buffer([0x6F, 0x00, 0x00])), new Buffer([0x6F]))
    t.end()
})

test('trim nulls from start and end of buffer', function (t) {
    t.deepEqual(trim(new Buffer([0x00, 0x00, 0x6F, 0x00, 0x00])), new Buffer([0x6F]))
    t.end()
})

test('don\'t trim shit', function (t) {
    t.deepEqual(trim(new Buffer([0x6F, 0x6F, 0x6F])), new Buffer([0x6F, 0x6F, 0x6F]))
    t.end()
})
