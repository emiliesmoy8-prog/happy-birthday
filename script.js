// ---------- ELEMENTS ----------

const playButton = document.getElementById("playButton");
const musicNote = document.getElementById("musicNote");

const energyBar = document.getElementById("energyBar");
const happyBar = document.getElementById("happyBar");

const loadingText = document.getElementById("loadingText");
const spinner = document.querySelector(".spinner");

const ticketButton = document.getElementById("ticketButton");

const modal = document.getElementById("rewardModal");
const modalBar = document.getElementById("modalBar");
const viewReward = document.getElementById("viewReward");
const closeModal = document.getElementById("closeModal");

// ---------- MUSIC ----------

let playing = false;
const music = new Audio("song.mp3");

music.volume = 0.55;

music.preload = "auto";

// Later:
// const music = new Audio("song.mp3");

// ---------- PAGE LOAD ----------

window.addEventListener("load", () => {

    animateBars();

    startLoading();

    rotateSpinner();

});

// ---------- PLAY ----------

playButton.addEventListener("click", () => {

    if (!playing) {

        playing = true;

        playButton.textContent = "⏸";

        musicNote.classList.add("playing");

      music.play();

    } else {

        playing = false;

        playButton.textContent = "▶";

        musicNote.classList.remove("playing");

    music.pause();

music.currentTime = 0;

    }

});

// ---------- ENERGY ----------

function animateBars() {

    let energy = 0;

    const energyInterval = setInterval(() => {

        energy++;

        energyBar.style.width = energy + "%";

        if (energy >= 90) {

            clearInterval(energyInterval);

            animateHappy();

        }

    },18);

}

function animateHappy(){

    let happy = 0;

    const happyInterval = setInterval(() => {

        happy++;

        happyBar.style.width = happy + "%";

        if(happy >= 100){

            clearInterval(happyInterval);

            breatheBars();

        }

    },16);

}

// ---------- BREATHE ----------

function breatheBars(){

    energyBar.animate(

        [

            {opacity:1},

            {opacity:.8},

            {opacity:1}

        ],

        {

            duration:2200,

            iterations:Infinity

        }

    );

    happyBar.animate(

        [

            {opacity:1},

            {opacity:.8},

            {opacity:1}

        ],

        {

            duration:2200,

            iterations:Infinity

        }

    );

}

// ---------- LOADING ----------

function startLoading() {

    let dots = 1;

    setInterval(() => {

        loadingText.textContent =
            "Laugh... (Loading" +
            ".".repeat(dots) +
            ")";

        dots++;

        if (dots > 3) {
            dots = 1;
        }

    }, 550);

}

// ---------- SPINNER ----------

function rotateSpinner(){

    let rotation = 0;

    setInterval(() => {

        rotation += 4;

        spinner.style.transform =
        `rotate(${rotation}deg)`;

    },25);

}

// ---------- TICKET ----------

ticketButton.addEventListener("click", () => {

    modal.classList.remove("hidden");

    modalBar.style.width = "0%";

    let progress = 0;

    const loader = setInterval(() => {

        progress++;

        modalBar.style.width = progress + "%";

        if (progress >= 100) {

            clearInterval(loader);

            setTimeout(() => {

                window.location.href = "movie-ticket.jpg";

            }, 500);

        }

    }, 18);

});

// ---------- CLOSE ----------

if (closeModal) {

    closeModal.addEventListener("click", () => {

        modal.classList.add("hidden");

    });

}

// ---------- PLACEHOLDER ----------

viewReward.addEventListener("click",()=>{

    alert(
        "Spider-Man ticket coming soon 🕷"
    );

});

// ---------- SHIMMER ----------

setInterval(()=>{

    ticketButton.classList.add("shine");

    setTimeout(()=>{

        ticketButton.classList.remove("shine");

    },1200);

},9000);