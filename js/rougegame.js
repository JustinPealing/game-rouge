const WIDTH = 40;
const HEIGHT = 15;

class RougeGame {
    constructor() {
        this.level = new Level(WIDTH, HEIGHT);
    }

    init() {
        this.level.init();
    }

    moveLeft() {
        this.level.player.move(-1, 0);
    }

    moveRight() {
        this.level.player.move(1, 0);
    }

    moveUp() {
        this.level.player.move(0, -1);
    }

    moveDown() {
        this.level.player.move(0, 1);
    }
}