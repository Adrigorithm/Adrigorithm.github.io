class SlideShow {
    constructor(previousButton, nextButton, backgroundContents, background, imgPaths) {
        this.previousButton = previousButton;
        this.nextButton = nextButton;
        this.backgroundContents = backgroundContents;
        this.background = background;
        this.activeElement = 0;
        this.imgPaths = imgPaths;
        this.initialise();
    }
    initialise() {
        this.previousButton.addEventListener("click", () => {
            this.nextActiveElement(true);
        });
        this.nextButton.addEventListener("click", () => {
            this.nextActiveElement(false);
        });
    }
    styleActiveElement(oldActiveElement, newActiveElement) {
        this.background.classList.replace(this.imgPaths[oldActiveElement], this.imgPaths[newActiveElement]);
        this.backgroundContents[oldActiveElement].classList.add("hidden");
        this.backgroundContents[newActiveElement].classList.remove("hidden");
    }
    nextActiveElement(invert) {
        let oldActiveElement = this.activeElement;
        if (invert)
            this.activeElement = this.activeElement == 0 ? this.imgPaths.length - 1 : this.activeElement - 1;
        else
            this.activeElement = this.activeElement == this.imgPaths.length - 1 ? 0 : this.activeElement + 1;
        this.styleActiveElement(oldActiveElement, this.activeElement);
    }
}
export { SlideShow };
