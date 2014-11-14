var trimStart = exports.trimStart = function (buffer) {
    var pos = 0
    for (var i = 0; i <= buffer.length; i++) {
        if (buffer[i] !== 0x00) {
            pos = i
            break
        }
    }
    return buffer.slice(pos)
}

var trimEnd = exports.trimEnd = function (buffer) {
    var pos = 0
    for (var i = buffer.length - 1; i >= 0; i--) {
        if (buffer[i] !== 0x00) {
            pos = i
            break
        }
    }
    return buffer.slice(0, pos + 1)
}

exports.trim = function (buffer) {
    return trimEnd(trimStart(buffer))
}