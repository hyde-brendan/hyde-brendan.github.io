const rollBtn = document.querySelector(".advice--reroll");
const adviceIdEl = document.querySelector(".advice--id");
const adviceTextEl = document.querySelector(".advice--text");
const adviceIcon = document.querySelector(".advice--reroll-img");

let typewriterText = "";
const typewriterSpeed = 15;
let typewriterTextLength = 0;
let typewriterIndex = 0;

function renderAdvice(id, text) {
    /**
     * Updates the advice--id and advice--text spans to the
     * updated advice slips' details.
     * 
     * Encoding issue fixes:
     * - Advice #146 renders the left apostrophe as "â€˜".
     * - Advice #76 renders the "ä" as "Ã¤".
     */

    typewriterText = text;
    typewriterText = typewriterText.replaceAll("â€˜", "'");
    typewriterText = typewriterText.replaceAll("Ã¤", "ä");
    typewriterTextLength = typewriterText.length;
    typewriterIndex = 0;

    adviceIdEl.innerHTML = id;
    typewriter();
}

function typewriter() {
    /**
     * Replicates a typewriter effect to render out the advice
     * slip contents.
     * 
     * TODO: Fix rolling a new advice slip while one is printing
     * out resulting in multiple typewriter() running at the same
     * time, resulting in the message print being sped up.
     */

    adviceTextEl.innerHTML = typewriterText.substring(0, typewriterIndex);
    typewriterIndex += 1;
    if (typewriterIndex <= typewriterTextLength) {
        setTimeout("typewriter()", typewriterSpeed);
    }
}

function animateIcon(el) {
    /**
     * Handles the classList of the el to handle its
     * on-reroll animation.
     * 
     * - I hear `void adviceIcon.offsetWidth` is an option,
     *   but it's apparently not the best practice? Have to
     *   look into it more.
     */

    el.classList.remove("animate");
    setTimeout(() => el.classList.add("animate"), 0);
}

function fetchAdvice() {
    /**
     * Fetches a random advice slip using Advice Slip JSON API.
     * 
     * - A random integer is used for generating a random advice
     *   every reroll, as the non-IDed API call takes too long to
     *   refresh for my liking.
     * - From manual tests, there are advices for IDs 1-224.
     */

    const idMin = 1;
    const idMax = 224;
    const randId = Math.floor(Math.random() * (idMax - idMin) + idMin);

    fetch(`https://api.adviceslip.com/advice/${randId}`)
        .then((response) => response.json())
        .then((data) => {
            renderAdvice(data.slip.id, data.slip.advice);
        })
        .catch((error) => {
            console.error(`Error: ${error}`);
        });
}

window.addEventListener("DOMContentLoaded", () => {
    adviceIdEl.innerHTML = "";
    adviceTextEl.innerHTML = "Loading...";
    fetchAdvice();
});

rollBtn.addEventListener("click", () => {
    animateIcon(adviceIcon);
    fetchAdvice();
});
