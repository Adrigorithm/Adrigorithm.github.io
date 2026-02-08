const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const cats = [
  "https://media.tenor.com/WesI8c7nMTEAAAAM/yaz-x-pai-stuffed-toy.gif",
  "https://media.tenor.com/wFxMAqCsQDoAAAAM/cats.gif",
  "https://media.tenor.com/IBxdvql1Mk0AAAAM/cat-kiss.gif",
  "https://media.tenor.com/HG8EebENUbAAAAAM/cat-cat-kiss.gif",
  "https://media.tenor.com/0590DAAITQ0AAAA1/holaroberto3.webp",
  "https://media.tenor.com/LWYOG0Mi998AAAAM/cat-hug-cat-cuddle.gif",
  "https://media.tenor.com/hPbG0BnbmHUAAAA1/cat-cat-kiss.webp",
  "https://media.tenor.com/eBM2EoGFfwcAAAAm/kiss-gif-kiss-gif-couple.webp",
  "https://media.tenor.com/tVjhea21BVgAAAAM/cat-kitten.gif",
  "https://media.tenor.com/2ibORhLXgBsAAAAM/cat-cuddle-cat-kiss.gif",
  "https://media.tenor.com/RrQFKdRzgoIAAAAM/cat-cats.gif",
  "https://media.tenor.com/PCJUrAADbR0AAAAM/cat-love.gif",
];
let firstButton = yesButton;
let activeCat = -1;

noButton.addEventListener("click", () => {
  if (firstButton === noButton) {
    noButton.style.order = 1;
    yesButton.style.order = 0;
    firstButton = yesButton;
  } else {
    noButton.style.order = 0;
    yesButton.style.order = 1;
    firstButton = noButton;
  }

  animateButton(() => {
    activateLoveScene();
  });
});

yesButton.addEventListener("click", () => {
  animateButton(() => {
    activateLoveScene();
  });
});

async function animateButton(callback) {
  const buttonAnimation = [
    { scale: "100%", backgroundColor: "green" },
    { scale: "150%", backgroundColor: "lime" },
    { scale: "100%", backgroundColor: "green" },
  ];

  const buttonTiming = {
    duration: 1000,
    iterations: 1,
  };

  const animation = yesButton.animate(buttonAnimation, buttonTiming);

  await animation.finished;

  animation.commitStyles();
  animation.cancel();

  callback();
}

function activateLoveScene() {
  buttonContainer = yesButton.parentElement;
  buttonContainer.style.display = "none";
  buttonContainer.previousElementSibling.innerHTML =
    "❤️ I love you forever! ❤️";

  document.body.style.backgroundPosition = "";
  document.body.style.backgroundRepeat = "repeat";
  switchBackground();

  setInterval(switchBackground, 3000);
}

function switchBackground() {
  document.body.style.background = `url(${getNextCat()})`;
}

function getNextCat() {
  if (activeCat === cats.length - 1) activeCat = 0;
  else activeCat++;

  return cats.at(activeCat);
}
