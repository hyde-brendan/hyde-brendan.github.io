# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

#### Desktop
![Desktop solution](screenshots/solution-desktop.png)
![Desktop solution (active state)](screenshots/solution-active.png)

_(1440×800px)_

#### Mobile
![Mobile solution](screenshots/solution-mobile.png)

_(375×808px)_

### Links

- [Solution Repository URL](https://github.com/hyde-brendan/hyde-brendan.github.io/tree/main/frontend-mentor/base-apparel-coming-soon-page)
- [Live Site URL](https://hyde-brendan.github.io/frontend-mentor/base-apparel-coming-soon-page/index)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox & CSS Grid
- Mobile-first workflow

### What I learned

~~I learned grids are very finicky~~

I got to learn in this project how forms work, alongside how to validate if an inputted string is a valid email address. I was watching little bits of [a stream of another person doing this same challenge](https://www.youtube.com/watch?v=8A7-0gsbHA0) just to better understand the JavaScript for it. The basic idea is to get a regular expression defining a valid email address ([from online](https://emailregex.com/)), and run the `test()` function between it and the string in the input field:

```javascript
function validateEmail(address) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test( String(address).toLowerCase() );
}
```

From there, if the input email address is invalid, the `invalid` CSS class is added to reveal the error message-related page elements, and removes the class if the email address is valid.

Besides forms, this was my first time using keyframes! They're actually much easier to understand than I was expecting (granted the ones on this project are super basic, so who knows how much I'll regret saying that...), but in the process I did have to learn about the `animationend` event handler to get the error message shake able to replay.

### Continued development

I need to better understand how to properly set the sizes for non-equal grid rows / columns in a dynamic context. I spent a large portion of time on this just trying to figure out what I needed to set `grid-template-columns` to in order to get the desired effect, but wasn't able to properly do what I wanted.

Is there a way to use `minmax()` with a `fr` as the minimum, and a explicit maximum value (such as an `em`)? It didn't appear that was the case from what I saw, and knowing how to do a similar effect would be very useful to know as I continue to do more complex frontend design.

### Useful resources

- [Adam Laki's article on detecting when an animation ends](https://pineco.de/detect-the-end-of-transition-and-animation-with-the-help-of-javascript/) - The article that taught me about the `animationend` event handler.

## Author

- Frontend Mentor - [@hyde-brendan](https://www.frontendmentor.io/profile/hyde-brendan)
