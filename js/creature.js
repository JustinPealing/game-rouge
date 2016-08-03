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
        
        if (this.level.getTile(x, y) == '.') {
            this.x = x;
            this.y = y;
            return true;
        }
        return false;
    }

    attack(creature) {
        creature.damage(3);
        this.damage(3);
    }

    damage(d) {
        this.hp -= d;
        if (this.hp <= 0) {
            this.level.removeCreature(this);
        }
    }
}