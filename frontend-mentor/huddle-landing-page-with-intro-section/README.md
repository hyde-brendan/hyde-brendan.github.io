# Frontend Mentor - Huddle landing page with single introductory section solution

This is a solution to the [Huddle landing page with single introductory section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the page depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

#### Desktop
![Desktop solution](screenshots/solution-desktop.png)
![Desktop solution (active state)](screenshots/solution-active.png)

_(1440×800px)_

#### Mobile
![Mobile solution](screenshots/solution-mobile.png)

_(375×800px)_

### Links

- [Solution Repository URL](https://github.com/hyde-brendan/hyde-brendan.github.io/tree/main/frontend-mentor/huddle-landing-page-with-intro-section)
- [Live Site URL](https://hyde-brendan.github.io/frontend-mentor/huddle-landing-page-with-intro-section/index)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox & CSS Grid
- Mobile-first workflow

### What I learned

In between the [last challenge](https://github.com/hyde-brendan/hyde-brendan.github.io/tree/main/frontend-mentor/ping-coming-soon-page) I did and this one, I finally went and properly looked up what "semantic HTML markup" actually meant, and took a [little module on Codecademy](https://www.codecademy.com/learn/learn-html/modules/learn-semantic-html) on the subject (which to be quite honest didn't really provide too much information). I've made an effort to properly stick to it on this challenge, and the only `<div>` that appears is the container for the social media links' flexbox.

I learnt some other various things in this project. For one, I figured out how to do staggered animation! This was a challenge I faced in my ["Base Apparel coming soon page" solution](https://github.com/hyde-brendan/hyde-brendan.github.io/tree/main/frontend-mentor/base-apparel-coming-soon-page) and implemented with different keyframe animations with progressively later starting percentages. Not only was this ugly code, it was primarily just because a normal `animation-delay` kept the element visible before snapping to the animation.

Since then, I discovered that the [`animation-fill-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode) set to `forward` allows the animated element to retain the final state changes. This means that if I set the element to have an opacity of 0, then it will stay visible until the animation, and stay at opacity 100% after. This eliminated the need to use multiple keyframes for `animation-delay`.

(As a side note, I also found out that you can replace `0% {...} 100% {...}` with `from {...} to {...}`, but I prefer the explicit nature of the former.)

On a related note, I need to keep in mind for the future to include the following `prefers-reduced-motion` accessibility media query whenever I have a page with some kind of animation:
```css
@media (prefers-reduced-motion: reduce) {  
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
```

Aside from that, I cleaned up the implementation of the Ionicons used on the footer. Previously I had set the `width` and `height` of all the `.site` children elements explicitly, which is kinda silly now that I look back at it. All you have to do is set the `font-size` to the size you want. This is extra nice since it means you can have some responsive design with a `clamp()` function changing the icons' size based on viewport size.

### Continued development

Not too much I can think of at the moment!

### Useful resources

- ['Staggered fade-in divs from 0 opacity' on Stack Overflow](https://stackoverflow.com/questions/37488440/staggered-fade-in-divs-from-0-opacity) - The Stack Overflow answer I referred to when implementing the staggered animation on this challenge.

## Author

- Frontend Mentor - [@hyde-brendan](https://www.frontendmentor.io/profile/hyde-brendan)