const starsEl = document.querySelectorAll("div.stars");
renderStars();

function renderStars(numStars = 5) {
    `
        Renders out the 5 star vectors for the ratings section of the design.
    `
    for (let el of starsEl) {
        let html = "";
        for (let i = 0; i < numStars; i++) {
            html += `<img src="images/icon-star.svg" alt="">`;
        }

        el.innerHTML = html;
    }
}