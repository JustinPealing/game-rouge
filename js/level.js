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

class Level {
    constructor(width, height) {
        this.actors = [];
        this.player = null;
        this.map = newMatrix(width, height);
        this.width = width;
        this.height = height;
    }

    init() {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                this.map[x][y] = Math.random() > 0.8 ? '#' : '.';
            }
        }

        for (let i = 0; i < 10; i++) {
            let x = getRandomInt(0, this.width);
            let y = getRandomInt(0, this.height);
            this.actors.push(new Creature(this, 'e', 1, x, y));
        }

        this.player = new Creature(this, '@', 10, 0, 0);
        this.actors.push(this.player);
    }

    getTile(x, y) {
        if (x < 0 || x >= this.width || y < 0 || y > this.height) {
            return null;
        }
        return this.map[x][y];
    }
}