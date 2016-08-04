const FONT = 32;

let display;
let game;
let showInventory = false;

let phaser = new Phaser.Game(WIDTH * FONT * 0.6, (HEIGHT + 1) * FONT, Phaser.AUTO, null, {
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

    for (let x = 0; x < level.width; x++) {
        for (let y = 0; y < level.height; y++) {
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

    if (showInventory) {
        drawBox(1, 1, WIDTH -2, HEIGHT -2);
    }
}

function drawBox(x1, y1, x2, y2) {
    for (let x = x1; x < x2 + 1; x++) {
        for (let y = y1; y < y2 + 1; y++) {
            if (x == x1 && y == y1) {
                display.putText(x, y, '\u2554');
            } else if (x == x2 && y == y1) {
                display.putText(x, y, '\u2557');
            } else if (x == x1 && y == y2) {
                display.putText(x, y, '\u255A');
            } else if (x == x2 && y == y2) {
                display.putText(x, y, '\u255D');
            } else if (x == x1 || x == x2) {
                display.putText(x, y, '\u2551');
            } else if (y == y1 || y == y2) {
                display.putText(x, y, '\u2550');
            } else {
                display.putText(x, y, ' ');
            }
        }
    }
}

function onKeyUp(event) {
    if (event.keyCode == Phaser.KeyCode.I) {
        console.log("I");
        showInventory = !showInventory;
    } else if (!showInventory) {
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
    }
    draw();
}