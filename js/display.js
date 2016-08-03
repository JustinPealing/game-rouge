class Display {
    constructor(game, width, height, font) {
        this.game = game;
        this.font = font;

        this.cells = newMatrix(width, height);
        for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
                this.cells[x][y] = this.createCell(x, y); 
            }
        }
    }

    set(x, y, char) {
        this.cells[x][y].text = char;
    }

    createCell(x, y) {
        var style = {
            font: this.font + "px monospace",
            fill: "#A23B6C"
        };
        return this.game.add.text(this.font * 0.6 * x, this.font * y, '', style);
    }

    putText(x, y, text) {
        for (let i = 0; i < text.length; i++) {
            this.set(x + i, y, text[i])
        }
    }
}