const FONT = 32;
const WIDTH = 40;
const HEIGHT = 15;

// the ascii display, as a 2d array of characters
var display;
var level;

// initialize phaser, call create() once done
var game = new Phaser.Game(WIDTH * FONT * 0.6, HEIGHT * FONT, Phaser.AUTO, null, {
    create: create
});

function create() {
    game.input.keyboard.addCallbacks(null, null, onKeyUp);

    level = new Level(WIDTH, HEIGHT);
    level.init();
    
    initDisplay(WIDTH, HEIGHT);
    draw();
}

function initDisplay(width, height) {
    display = newMatrix(width, height);
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            display[x][y] = createCell(x, y); 
        }
    }
}

function createCell(x, y) {
    var style = {
        font: FONT + "px monospace",
        fill: "#A23B6C"
    };
    return game.add.text(FONT * 0.6 * x, FONT * y, '', style);
}

function draw() {
    for (var x = 0; x < level.width; x++) {
        for (var y = 0; y < level.height; y++) {
            display[x][y].text = level.map[x][y];
        }
    }

    for (actor of level.actors) {
        if (actor.hp > 0) {
            display[actor.x][actor.y].text = actor.char;
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