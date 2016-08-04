class InventoryMenu extends Menu {
    constructor(game, display) {
        super(display, "Inventory", 1, 1, display.width - 2, display.height - 3);
        this.game = game;
    }

    onKeyUp(event) {
        switch (event.keyCode) {
            case Phaser.KeyCode.ESC:
            case Phaser.KeyCode.I:
                this.hide();
                break;
        }
    }
}