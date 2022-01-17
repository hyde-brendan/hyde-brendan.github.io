# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- See hover states for interactive elements

### Screenshot

#### Desktop
![Desktop solution](screenshots/solution-desktop.png)

_(1440×800px)_

#### Mobile
![Mobile solution](screenshots/solution-mobile.png)
![Mobile solution w/ hover](screenshots/solution-active.png)

_(375×700px)_

### Links

- [Solution Repository URL](https://github.com/hyde-brendan/hyde-brendan.github.io/tree/main/frontend-mentor/order-summary-component)
- [Live Site URL](https://hyde-brendan.github.io/frontend-mentor/order-summary-component/index)

## My process

### Built with

- CSS custom properties
- Flexbox & CSS Grid
- Mobile-first workflow

### What I learned

In this project, I learned one new and neat property and got more practice with another property I did not really understand.

When creating the on-hover animation for the "Change plan" link, I found that `font-decoration` is not compatible with `transition`, and the underline would instantly disappear when focused. After some looking around, I found that the [`font-decoration-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color) property is a solid work-around, as `font-decoration-color: transparent` is visibly equivalent to `font-decoration: none` while also being compatible with animation.

As the box shadow on this project was more noticeable than previous ones, I took a look at techniques for nicer-looking shadows. From what I found out, the secret is to overlap multiple shadows. There's online tools that can be used to set up these; the one I used in this project was [Philipp Brumm's smooth shadow tool](https://shadows.brumm.af/), and I liked how it turned out! That said, the results were very finicky whenever I tried to make edits...

### Continued development

Box shadows I know are quite powerful and important to learn, and I would like to eventually get a better sense how to go about setting them without blindly relying on online tools like the one posted above.

### Useful resources

- [Philipp Brumm's smooth shadow tool](https://shadows.brumm.af/)

## Author

- Frontend Mentor - [@hyde-brendan](https://www.frontendmentor.io/profile/hyde-brendan)
