class SimpleSlider {
    constructor(rangeInputElement, elements) {
        this.activeElement = Number.parseInt(rangeInputElement.value);
        this.elements = elements;
        this.forceStyle(this.activeElement);
        rangeInputElement.addEventListener("input", (inputEvent) => {
            this.styleActiveElement(Number.parseInt(inputEvent.target.value));
        });
    }
    styleActiveElement(newId) {
        if (this.activeElement == newId)
            return;
        this.forceStyle(newId);
    }
    forceStyle(newId) {
        this.elements[this.activeElement].classList.add("hidden");
        this.elements[newId].classList.remove("hidden");
        this.activeElement = newId;
    }
}
export { SimpleSlider };
