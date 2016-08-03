const WIDTH = 40;
const HEIGHT = 15;

class RougeGame {
    constructor() {
        this.level = new Level(WIDTH, HEIGHT);
        this.turn = 1;
    }

    init() {
        this.level.init();
    }

    playerMove(dx, dy) {
        if (this.level.player.hp > 0 && this.level.player.move(dx, dy)) {
            this.tick();
        }
    }

    tick() {
        this.turn++;
    }
}