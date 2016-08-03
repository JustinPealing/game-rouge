class Creature {
    constructor(level, char, hp, x, y) {
        this.level = level;
        this.char = char;
        this.hp = hp;
        this.x = x;
        this.y = y;
    }

    move(dx, dy) {
        if (this.canMove(dx, dy)) {
            this.x += dx;
            this.y += dy;
            return true;
        }
        return false;
    }

    canMove(dx, dy) {
        let x = this.x + dx;
        let y = this.y + dy;
        
        return this.level.getTile(x, y) == '.'
            && this.level.getCreature(x, y) == null;
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