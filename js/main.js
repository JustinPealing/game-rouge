var FONT = 32;

// the ascii display, as a 2d array of characters
var display;
var level;

// initialize phaser, call create() once done
var game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, null, {
    create: create
});

function create() {
    game.input.keyboard.addCallbacks(null, null, onKeyUp);

    level = new Level();
    level.init();
    
    initDisplay();
    draw();
}

function initDisplay() {
    display = newMatrix(COLS, ROWS);
    for (var x = 0; x < COLS; x++) {
        for (var y = 0; y < ROWS; y++) {
            display[x][y] = createCell(x, y); 
        }
    }
}

function createCell( x, y) {
    var style = {
        font: FONT + "px monospace",
        fill: "#A23B6C"
    };
    return game.add.text(FONT * 0.6 * x, FONT * y, '', style);
}

function draw() {
    for (var y = 0; y < ROWS; y++) {
        for (var x = 0; x < COLS; x++) {
            display[x][y].text = level.map[x][y];
        }
    }

    for (actor of level.actors) {
        if (actor.hp > 0) {
            display[actor.x][actor.y].text = actor.char
        }
    }
}

function onKeyUp(event) {
    switch (event.keyCode) {
        case Phaser.Keyboard.LEFT:
            level.move(-1, 0);
            break;
        case Phaser.Keyboard.RIGHT:
            level.move(1, 0);
            break;
        case Phaser.Keyboard.UP:
            level.move(0, -1);
            break;
        case Phaser.Keyboard.DOWN:
            level.move(0, 1);
            break;
    }
    draw();
}
