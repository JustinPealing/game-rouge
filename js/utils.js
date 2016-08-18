function matrix(x, y) {
    let a = new Array(x);
    for (let i = 0; i < x; i++) {
        a[i] = new Array(y);
    }
    return a;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Adapted from http://www.roguebasin.com/index.php?title=Bresenham%27s_Line_Algorithm#JavaScript
function getLine(x0, y0, x1, y1) {
    var tmp;
    var steep = Math.abs(y1 - y0) > Math.abs(x1 - x0);
    if (steep) {
        //swap x0,y0
        tmp = x0;
        x0 = y0;
        y0 = tmp;
        //swap x1,y1
        tmp = x1;
        x1 = y1;
        y1 = tmp;
    }

    var sign = 1;
    if (x0 > x1) {
        sign = -1;
        x0 *= -1;
        x1 *= -1;
    }
    var dx = x1 - x0;
    var dy = Math.abs(y1 - y0);
    var err = (dx / 2);
    var ystep = y0 < y1 ? 1:-1;
    var y = y0;

    var points = [];
    for (var x=x0;x<=x1;x++) {
        if (!(steep ? points.push({x:y, y:sign * x}) : points.push({x:sign * x, y:y}))) {
            return points;
        }
        err = (err - dy);
        if (err < 0) {
            y += ystep;
            err += dx;
        }
    }
    return points;
}