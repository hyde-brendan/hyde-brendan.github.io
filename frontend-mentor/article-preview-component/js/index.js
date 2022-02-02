const cardContactEl = document.querySelector(".card-contact");
const shareEl = document.querySelector(".card-contact--share-bg");

shareEl.addEventListener("click", toggleShareButton);

function toggleShareButton() {
    cardContactEl.classList.toggle("active");
}