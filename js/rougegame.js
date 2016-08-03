const WIDTH = 40;
const HEIGHT = 15;

function randomWalk(creature) {
    creature.move(randomInt(-1, 1), randomInt(-1, 1));
}

class RougeGame {
    constructor() {
        this.level = new Level(WIDTH, HEIGHT);
        this.turn = 1;
        this.player = null;
    }

    init() {
        this.level.init();
        this.player = this.level.player;
    }

    playerMove(dx, dy) {
        if (this.player.hp <= 0) {
            return;
        }

        let x = this.player.x + dx;
        let y = this.player.y + dy;
        
        var creature = this.level.getCreature(x, y);
        if (creature != null) {
            this.player.attack(creature);
            this.tick();
        } else {
            if (this.player.move(dx, dy)) {
                this.tick();
            }
        }
    }

    tick() {
        for (let c of this.level.creatures) {
            if (c.char == 'e') {
                randomWalk(c);
            }
        }
        this.turn++;
    }
}