import { ComponentHolder } from "./classes/ComponentHolder.js";
document.addEventListener("DOMContentLoaded", loaded);
let componentHolder = undefined;
function loaded() {
    initComponentHolder();
    initSectionIndicators();
    initSimpleSliders();
    initSlideShows();
    initSquarifier();
}
function initComponentHolder() {
    componentHolder = new ComponentHolder();
}
function initSectionIndicators() {
    let siSections = document.getElementsByClassName("si-section");
    let siContents = document.getElementsByClassName("si-content");
    for (let index = 0; index < siSections.length; index++) {
        componentHolder.addSectionIndicator(Array.from(siSections[index].children), Array.from(siContents[index].children));
    }
}
function initSimpleSliders() {
    let sliders = document.getElementsByClassName("simpleSlider");
    let sliderContents = document.getElementsByClassName("simpleSliderContent");
    for (let index = 0; index < sliders.length; index++) {
        let inputElement = sliders[index];
        componentHolder.addSimpleSlider(inputElement, Array.from(sliderContents).slice(0, Number.parseInt(inputElement.max) + 1));
    }
}
function initSlideShows() {
    let slideShows = document.getElementsByClassName("slideShow");
    for (let index = 0; index < slideShows.length; index++) {
        let slideShow = slideShows[index];
        let previousButton = slideShow.firstElementChild;
        let nextButton = slideShow.lastElementChild;
        let contents = Array.from(slideShow.children).slice(1, -1);
        let imgPaths = getData(slideShow.id);
        componentHolder.addSlideShow(previousButton, nextButton, contents, slideShow, imgPaths);
    }
}
function initSquarifier() {
    let missingHeightSquares = document.getElementsByClassName("noYElement");
    let missingWidthSquares = document.getElementsByClassName("noXElement");
    componentHolder.addSquares(Array.from(missingHeightSquares), Array.from(missingWidthSquares));
}
function getData(id) {
    switch (id) {
        case "slideShowProjects":
            return [
                "bg-[url(/assets/img/projects/Adribot.git.avif)]",
                "bg-[url(/assets/img/projects/AdriTemplater.git.avif)]",
                "bg-[url(/assets/img/projects/MyWebsite.git.avif)]"
            ];
        default:
            return [];
    }
}
