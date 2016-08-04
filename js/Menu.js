function drawBox(display, x1, y1, x2, y2) {
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

class Menu {
    constructor(display, x, y, width, height) {
        this.display = display;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.visible = false;
    }

    draw() {
        if (this.visible) {
            drawBox(this.display, 1, 1, this.width, this.height);
        }
    }

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }
}