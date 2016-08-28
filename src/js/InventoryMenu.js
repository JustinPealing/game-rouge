import Menu from "./Menu.js";

export default class InventoryMenu extends Menu {
    constructor(game, display) {
        super(display, "Inventory", 1, 1, display.width - 2, display.height - 3);
        this.game = game;
        this.selectedIndex = -1;
    }

    onDraw() {
        super.onDraw();
        for (let i = 0; i < this.game.player.items.length; i++) {
            let item = this.game.player.items[i];
            this.display.putText(this.x + 3, this.y + 2 + i, item.name);
        }
        if (this.selectedIndex >= 0) {
            this.display.putText(this.x + 2, this.y + 2 + this.selectedIndex, '*');
        }
    }

    onKeyUp(event) {
        switch (event.keyCode) {
            case Phaser.KeyCode.ESC:
            case Phaser.KeyCode.I:
                this.hide();
                break;
            case Phaser.KeyCode.UP:
                if (this.selectedIndex > 0) {
                    this.selectedIndex--;
                }
                break;
            case Phaser.KeyCode.DOWN:
                if (this.selectedIndex < this.game.player.items.length - 1) {
                    this.selectedIndex++;
                }
                break;
        }
    }

    show() {
        super.show();
        if (this.game.player.items.length > 0) {
            this.selectedIndex = 0;
        }
    }
}