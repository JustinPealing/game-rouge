const ROWS = 15;
const COLS = 40;

function newMatrix(x, y) {
    var a = new Array(x);
    for (var i = 0; i < x; i++) {
        a[i] = new Array(y);
    }
    return a;
}

class Level {
    constructor() {
        this.actors = [];
        this.player = null;
        this.map = newMatrix(COLS, ROWS);
    }

    init() {
        for (let x = 0; x < COLS; x++) {
            for (let y = 0; y < ROWS; y++) {
                this.map[x][y] = Math.random() > 0.8 ? '#' : '.';
            }
        }

        this.player = {
            char: '@',
            hp: 10,
            x: 0,
            y: 0
        };
        
        this.actors.push(this.player);
    }

    move(dx, dy) {
        let x = this.player.x + dx;
        let y = this.player.y + dy;
        if (x >= 0 && x < COLS && y >= 0 && y < ROWS && this.map[x][y] == '.') {
            this.player.x = x;
            this.player.y = y;
        }
    }
}
