# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

#### Desktop
![Desktop solution](screenshots/solution-desktop.png)
![Desktop solution (active state)](screenshots/solution-active.png)

_(1440×800px)_

#### Mobile
![Mobile solution](screenshots/solution-mobile.png)

_(375×994px)_

### Links

- [Solution Repository URL](https://github.com/hyde-brendan/hyde-brendan.github.io/tree/main/frontend-mentor/intro-component-with-signup-form)
- [Live Site URL](https://hyde-brendan.github.io/frontend-mentor/intro-component-with-signup-form/index)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox & CSS Grid
- Mobile-first workflow

### What I learned

This challenge was ultimately an expansion of the previous challenge, ["Base Apparel coming soon page"](https://github.com/hyde-brendan/hyde-brendan.github.io/tree/main/frontend-mentor/intro-component-with-signup-form), with additional input fields. Since I already did most of the base work in the previous challenge, it was fairly easy to expand for the name and password fields, especially in comparison to the regex for email validation.

Upon clicking submit button, the event handler will iterate through all the input field elements, extract its value, and based on a `switch` statement validate the field and either add or remove the `invalid` class to the input DOM, which the CSS will reflect the incorrect form fields:

```javascript
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
```

Beyond that, two other minor things I've learned in this are:

- `:not(:placeholder-shown)` for setting a custom color for the input field border if the user has entered text into the field.
- The `brightness()` and `saturation()` filters, used for the submit button's hover state.

### Continued development

It's not part of the project scope, but in a more realistic situation, a password wouldn't typically have no restrictions besides not literally being empty. It'd have things like "8 or more characters", "at least 1 number and 1 special character", and so on. I don't think it'd be especially difficult having checks for that in a sequential manner, but I'm curious about regex, and would like to learn more about it down the road.

### Useful resources

- [':not(:empty) CSS selector is not working?' on Stack Overflow](https://stackoverflow.com/questions/8639282/notempty-css-selector-is-not-working) - Where I found out about the `:placeholder-shown` pseudo-element.

## Author

- Frontend Mentor - [@hyde-brendan](https://www.frontendmentor.io/profile/hyde-brendan)