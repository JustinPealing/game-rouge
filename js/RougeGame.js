const WIDTH = 40;
const HEIGHT = 15;

function randomWalk(creature) {
    creature.move(randomInt(-1, 1), randomInt(-1, 1));
}

class RougeGame {
    constructor(items) {
        this.items = items;
        this.level = new Level(WIDTH, HEIGHT);
        this.turn = 1;
        this.player = null;
    }

    init() {
        this.level.init();
        this.generateItems();
        this.player = this.level.player;
    }

    generateItems() {
        for (let i = 0; i < 10; i++) {
            let x = randomInt(0, this.level.width - 1);
            let y = randomInt(0, this.level.height - 1);
            let i = randomInt(0, this.items.length - 1);

            let tile = this.level.getTile(x, y);
            if (tile.char == '.') { 
                tile.items.push(new Item('i', this.items[i]));
            }
        }
    }

    playerMove(dx, dy) {
        if (this.player.hp <= 0) {
            return;
        }

        let x = this.player.x + dx;
        let y = this.player.y + dy;
        
        let creature = this.level.getCreature(x, y);
        if (creature != null) {
            this.player.attack(creature);
            this.tick();
        } else {
            if (this.player.move(dx, dy)) {
                let tile = this.level.getTile(this.player.x, this.player.y);
                for (let item of tile.items) {
                    this.player.pickUp(item);
                }
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