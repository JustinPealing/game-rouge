class Level {
    constructor(width, height) {
        this.creatures = [];
        this.player = null;
        this.map = matrix(width, height);
        this.width = width;
        this.height = height;
    }

    init() {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                let char = Math.random() > 0.8 ? '#' : '.';
                this.map[x][y] = {
                    char: char,
                    items: []
                };
            }
        }

        for (let i = 0; i < 10; i++) {
            let x = randomInt(0, this.width - 1);
            let y = randomInt(0, this.height - 1);
            this.creatures.push(new Creature(this, 'e', 1, x, y));
        }

        for (let i = 0; i < 10; i++) {
            let x = randomInt(0, this.width - 1);
            let y = randomInt(0, this.height - 1);
            let tile = this.getTile(x, y);
            if (tile.char == '.') { 
                tile.items.push(new Item('i', "Test item"));
            }
        }

        this.player = new Creature(this, '@', 10, 0, 0);
        this.creatures.push(this.player);
    }

    getTile(x, y) {
        if (x < 0 || x >= this.width || y < 0 || y > this.height) {
            return null;
        }
        return this.map[x][y];
    }

    getCreature(x, y) {
        for (let c of this.creatures) {
            if (c.x == x && c.y == y) {
                return c;
            }
        }
        return null;
    }

    removeCreature(creature) {
        this.creatures.splice(this.creatures.indexOf(creature) , 1);
    }
}