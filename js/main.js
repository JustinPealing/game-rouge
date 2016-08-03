const FONT = 32;

var display;
var game;

var phaser = new Phaser.Game(WIDTH * FONT * 0.6, (HEIGHT + 1) * FONT, Phaser.AUTO, null, {
    create: create
});

function create() {
    phaser.input.keyboard.addCallbacks(null, null, onKeyUp);

    game = new RougeGame();
    game.init();
    
    display = new Display(phaser, WIDTH, HEIGHT + 1, FONT);
    draw();
}

function draw() {
    let level = game.level;

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

    display.putText(0, HEIGHT, new Array(WIDTH + 1).join(' '));
    display.putText(0, HEIGHT, "HP: " + level.player.hp);
}

function onKeyUp(event) {
    switch (event.keyCode) {
        case Phaser.Keyboard.LEFT:
            game.moveLeft();
            break;
        case Phaser.Keyboard.RIGHT:
            game.moveRight();
            break;
        case Phaser.Keyboard.UP:
            game.moveUp();
            break;
        case Phaser.Keyboard.DOWN:
            game.moveDown();
            break;
    }
    draw();
}