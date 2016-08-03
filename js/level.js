const ROWS = 15;
const COLS = 40;

class Level {
    init() {
        this.map = [];
        for (let y = 0; y < ROWS; y++) {
            let newRow = [];
            for (let x = 0; x < COLS; x++) {
                newRow.push(Math.random() > 0.8 ? '#' : '.');
            }
            this.map.push(newRow);
        }
    }
}
