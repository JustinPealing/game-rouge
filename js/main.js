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
            let tile = level.getTile(x, y);
            if (tile.items.length == 0) {
                display.set(x, y, tile.char);
            } else {
                display.set(x, y, tile.items[0].char);
            }
        }
    }

    for (actor of level.creatures) {
        if (actor.hp > 0) {
            display.set(actor.x, actor.y, actor.char);
        }
    }

    display.putText(0, HEIGHT, new Array(WIDTH + 1).join(' '));
    display.putText(0, HEIGHT, "HP: " + level.player.hp);
    display.putText(7, HEIGHT, "T: " + game.turn);
}

function onKeyUp(event) {
    switch (event.keyCode) {
        case Phaser.KeyCode.LEFT:
            game.playerMove(-1, 0);
            break;
        case Phaser.KeyCode.RIGHT:
            game.playerMove(1, 0);
            break;
        case Phaser.KeyCode.UP:
            game.playerMove(0, -1);
            break;
        case Phaser.KeyCode.DOWN:
            game.playerMove(0, 1);
            break;
    }
    draw();
}