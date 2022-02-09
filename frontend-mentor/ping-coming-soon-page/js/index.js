const submitBtn = document.querySelector(".form--submit");
const inputEl = document.querySelector(".form--input");
const heroEl = document.querySelector(".hero");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // console.log(inputEl.firstElementChild.value);

    let emailValue = inputEl.firstElementChild.value;

    if ( !validateEmail(emailValue) ) {
        addInvalid(inputEl, true);
        addInvalid(heroEl, false);

        // Update error message text if empty or not
        let errorMsg = emailValue.trim() === "" ?
            `Whoops! It looks like you forgot to add your email` :
            `Please provide a valid email address`;
        inputEl.lastElementChild.innerHTML = errorMsg;
    } else {
        removeInvalid(inputEl);
        removeInvalid(heroEl);
    }
});

//////////////////////////////////////////////////

function validateEmail(address) {
    `
        Checks if the inputted string is a valid email address.
        Regex provided by https://emailregex.com/.
    `
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test( String(address.trim()).toLowerCase() );
}

function addInvalid(el, addShake) {
    el.classList.add("invalid");

    if (addShake) {
        el.classList.add("shake");
        el.addEventListener("animationend", () => {
            el.classList.remove("shake");
        });
    }
}

function removeInvalid(el) {
    el.classList.remove("invalid");
}