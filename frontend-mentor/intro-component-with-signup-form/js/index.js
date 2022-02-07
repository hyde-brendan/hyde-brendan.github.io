const submitBtn = document.querySelector(".form--submit");
const inputEls = document.querySelectorAll(".form--input");

// console.log(inputEls);
// console.log(inputEls[0].firstElementChild);

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    for (let inputEl of inputEls) {
        let inputField = inputEl.firstElementChild;
        const inputFieldValue = inputField.value;

        switch (inputField.className) {
            case "form--first-name":
            case "form--last-name":
            case "form--password":
                if ( emptyInput(inputFieldValue) ) {
                    addInvalid(inputEl);
                } else {
                    removeInvalid(inputEl);
                }
                break;
                
            case "form--email":
                if ( !validateEmail(inputFieldValue) ) {
                    addInvalid(inputEl);
                } else {
                    removeInvalid(inputEl);
                }
                break;
        }

    }

});

//////////////////////////////////////////////////

function emptyInput(str) {
    `
        Checks if the inputted string is empty or not.
    `
    return str.trim().length === 0;
}

function validateEmail(address) {
    `
        Checks if the inputted string is a valid email address.
        Regex provided by https://emailregex.com/.
    `
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test( String(address.trim()).toLowerCase() );
}

function addInvalid(el) {
    el.classList.add("invalid");

    el.classList.add("shake");
    el.addEventListener("animationend", () => {
        el.classList.remove("shake");
    });
}

function removeInvalid(el) {
    el.classList.remove("invalid");
}