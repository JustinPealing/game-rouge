function drawBox(display, title, x, y, width, height) {
    display.putText(x, y, "\u2554" + Array(width - 1).join('\u2550') + "\u2557");
    if (title != null) {
        display.putText(x + 2, y, " " + title + " ");
    }
    for (let i = 1; i < height - 1; i++) {
        display.putText(x, y + i, "\u2551" + Array(width - 1).join(' ') + "\u2551");
    }
    display.putText(x, y + height - 1, "\u255A" + Array(width - 1).join('\u2550') + "\u255D");
}

class Menu {
    constructor(display, title, x, y, width, height) {
        this.display = display;
        this.title = title;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.visible = false;
    }

    draw() {
        if (this.visible) {
            drawBox(this.display, this.title, 1, 1, this.width, this.height);
        }
    }

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }
}