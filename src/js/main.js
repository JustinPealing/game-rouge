import {RougeGame, WIDTH, HEIGHT} from "./RougeGame.js";
import Display from "./Display.js";
import InventoryMenu from "./InventoryMenu.js";

const FONT = 20;

let display;
let game;
let inventoryMenu = null;

let phaser = new Phaser.Game(WIDTH * FONT * 0.6, (HEIGHT + 1) * FONT, Phaser.AUTO, null, {
    preload: preload,
    create: create
});

function preload() {
    phaser.load.text("items", "/data/items.txt");
}

function create() {
    phaser.input.keyboard.addCallbacks(null, null, onKeyUp);

    let items = phaser.cache.getText("items").match(/[^\r\n]+/g);
    game = new RougeGame(items);
    game.init();
    
    display = new Display(phaser, WIDTH, HEIGHT + 1, FONT);

    inventoryMenu = new InventoryMenu(game, display);

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

    for (let actor of level.creatures) {
        if (actor.hp > 0) {
            display.set(actor.x, actor.y, actor.char);
        }
    }

    display.putText(0, HEIGHT, new Array(WIDTH + 1).join(' '));
    display.putText(0, HEIGHT, "HP: " + level.player.hp);
    display.putText(7, HEIGHT, "T: " + game.turn);

    inventoryMenu.draw();
}

function onKeyUp(event) {
    if (inventoryMenu.visible) {
        inventoryMenu.onKeyUp(event)
    } else {
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
            case Phaser.KeyCode.I:
                inventoryMenu.show();
                break;
        }
    }
    draw();
}