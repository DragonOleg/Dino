import Canvas from "./canvas.js";

class Game {

    constructor(container) {
        this.canvas = new Canvas(container);
        this.score = new Score( ".game-score .score-count", 0 );
    }

    update() {
    }

    draw() {
        this.canvas.context.clearRect(0, 0, this.canvas.element.width, this.canvas.element.height);
    }

}

new Game(document.querySelector(".canvas-wrapper"));