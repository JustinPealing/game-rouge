var FONT = 32;

// the ascii display, as a 2d array of characters
var asciidisplay;

var level;

// initialize phaser, call create() once done
var game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, null, {
    create: create
});

function create() {    
    level = new Level();
    level.init();
    
    // initialize ascii display
    asciidisplay = [];
    for (var y = 0; y < ROWS; y++) {
        var newRow = [];
        asciidisplay.push(newRow);
        for (var x = 0; x < COLS; x++)
            newRow.push(initCell('', x, y));
    }
    drawMap();
}

function initCell(chr, x, y) {
    // add a single cell in a given position to the ascii display
    var style = {
        font: FONT + "px monospace",
        fill: "#A23B6C"
    };
    return game.add.text(FONT * 0.6 * x, FONT * y, chr, style);
}

function drawMap() {
    for (var y = 0; y < ROWS; y++)
        for (var x = 0; x < COLS; x++)
            asciidisplay[y][x].text = level.map[y][x];
}
