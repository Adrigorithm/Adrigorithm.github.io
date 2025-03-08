import { SectionIndicator } from "./SectionIndicator.js";
import { SimpleSlider } from "./SimpleSlider.js";
import { SlideShow } from "./SlideShow.js";
import { Squarifier } from "./Squarifier.js";
class ComponentHolder {
    constructor() {
        this.sectionIndicators = [];
        this.simpleSliders = [];
        this.slideShows = [];
        this.squarifier = new Squarifier();
    }
    addSquares(missingHeightSquares, missingWidthSquares) {
        this.squarifier.initialise(missingWidthSquares, missingHeightSquares);
    }
    addSectionIndicator(siSections, siContents) {
        this.sectionIndicators.push(new SectionIndicator(siSections, siContents));
    }
    addSimpleSlider(rangeInputElement, elements) {
        this.simpleSliders.push(new SimpleSlider(rangeInputElement, elements));
    }
    addSlideShow(previousButton, nextButton, backgroundContents, background, imgPaths) {
        this.slideShows.push(new SlideShow(previousButton, nextButton, backgroundContents, background, imgPaths));
    }
}
export { ComponentHolder };
