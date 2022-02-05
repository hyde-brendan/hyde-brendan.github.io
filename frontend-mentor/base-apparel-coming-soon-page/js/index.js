const formEl = document.querySelector(".info--form");
const submitBtn = document.querySelector(".form--submit");
const emailEl = document.querySelector(".form--email");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const emailVal = emailEl.value;
    // console.log(validateEmail(emailVal));

    // Adds ".invalid" class if the inputted address is invalid
    if ( !validateEmail(emailVal) ) {
        formEl.classList.add("invalid");

        formEl.classList.add("shake");
        formEl.addEventListener("animationend", () => {
            formEl.classList.remove("shake");
            // console.log("animation ended!");
        });
    } else {
        formEl.classList.remove("invalid");
    }
});

//////////////////////////////////////////////////

function validateEmail(address) {
    `
        Checks if the inputted string is a valid email address.
        Regex provided by https://emailregex.com/.
    `
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test( String(address).toLowerCase() );
}