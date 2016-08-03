function newMatrix(x, y) {
    var a = new Array(x);
    for (var i = 0; i < x; i++) {
        a[i] = new Array(y);
    }
    return a;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}