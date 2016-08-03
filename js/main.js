const FONT = 32;
const WIDTH = 40;
const HEIGHT = 15;

var display;
var level;

var game = new Phaser.Game(WIDTH * FONT * 0.6, HEIGHT * FONT, Phaser.AUTO, null, {
    create: create
});

function create() {
    game.input.keyboard.addCallbacks(null, null, onKeyUp);

    level = new Level(WIDTH, HEIGHT);
    level.init();
    
    display = new Display(game, WIDTH, HEIGHT, FONT);
    draw();
}

function draw() {
    for (var x = 0; x < level.width; x++) {
        for (var y = 0; y < level.height; y++) {
            display.set(x, y, level.map[x][y]);
        }
    }

    for (actor of level.creatures) {
        if (actor.hp > 0) {
            display.set(actor.x, actor.y, actor.char);
        }
    }
}

function onKeyUp(event) {
    switch (event.keyCode) {
        case Phaser.Keyboard.LEFT:
            level.player.move(-1, 0);
            break;
        case Phaser.Keyboard.RIGHT:
            level.player.move(1, 0);
            break;
        case Phaser.Keyboard.UP:
            level.player.move(0, -1);
            break;
        case Phaser.Keyboard.DOWN:
            level.player.move(0, 1);
            break;
    }
    draw();
}