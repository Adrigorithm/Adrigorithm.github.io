class Squarifier {
    constructor() {
        this.missingHeightSquares = [];
        this.missingWidthSquares = [];
    }
    initialise(missingWidthSquares, missingHeightSquares) {
        this.missingHeightSquares = missingHeightSquares;
        this.missingWidthSquares = missingWidthSquares;
        this.work();
        window.addEventListener("resize", () => {
            this.work();
        });
    }
    work() {
        this.missingHeightSquares.forEach((square) => {
            square.style.height = square.clientWidth + "px";
        });
        this.missingWidthSquares.forEach((square) => {
            square.style.width = square.clientHeight + "px";
        });
    }
}
export { Squarifier };
