var FONT = 32;

// the ascii display, as a 2d array of characters
var display;
var level;

// initialize phaser, call create() once done
var game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, null, {
    create: create
});

function create() {    
    level = new Level();
    level.init();
    
    initDisplay();
    draw();
}

function initDisplay() {
    display = [];
    for (var y = 0; y < ROWS; y++) {
        var newRow = [];
        display.push(newRow);
        for (var x = 0; x < COLS; x++)
            newRow.push(createCell(x, y));
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
    for (var y = 0; y < ROWS; y++)
        for (var x = 0; x < COLS; x++)
            display[y][x].text = level.map[y][x];
}
