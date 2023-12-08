let i = 1;
const slider = document.querySelector('#slider');
const nextButton = document.querySelector("#next");
const next = () => {
    changeEffect();
    setTimeout(() => {
        i++;
        if (i > 3) i = 1;
        slider.src = `images/image${i}.jpg`;
    }, 400);
}
nextButton.addEventListener("click", next);

const prev = () => {
    changeEffect();
    setTimeout(() => {
        i--;
        if (i < 1) i = 3;
        slider.src = `images/image${i}.jpg`;
    }, 400);
}
const prevButton = document.querySelector("#prev");
prevButton.addEventListener("click", prev);

const startButton = document.querySelector("#start");
let timerId;
startButton.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = setInterval(function () {
        changeEffect();
        next();
    }, 3000);
});

const stopButton = document.querySelector("#stop");
stopButton.addEventListener("click", () => {
    clearInterval(timerId);
});

const miniatures = document.querySelectorAll(".mini");
for (let i = 0; i < miniatures.length; i++) {
    miniatures[i].addEventListener('click', (event) => {
        let imageMini = event.target;
        changeEffect();
        setTimeout(() => {
            slider.src = imageMini.src;
        }, 400);
    });
}

const effects = document.forms.effects;
let effect = 'none';
for (let i = 0; i < effects.length; i++) {
    effects[i].addEventListener('click', (event) => {
        effect = event.target.value;
    });
}

function changeEffect() {
    slider.classList.remove(effect);
    slider.classList.add(effect);
    setTimeout(() => {
        slider.classList.remove(effect);
    }, 500);
}