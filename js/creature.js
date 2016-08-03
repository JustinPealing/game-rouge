class Creature {
    constructor(level, char, hp, x, y) {
        this.level = level;
        this.char = char;
        this.hp = hp;
        this.x = x;
        this.y = y;
    }

    move(dx, dy) {
        let x = this.x + dx;
        let y = this.y + dy;
        if (this.level.getTile(x, y) == '.' && this.level.getCreature(x, y) == null) {
            this.x = x;
            this.y = y;
        }
    }
}