# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend
Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158).
Frontend Mentor challenges help you improve your coding skills by building
realistic projects.

## Table of contents

- [Overview](#overview)
	- [The challenge](#the-challenge)
	- [Screenshot](#screenshot)
	- [Links](#links)
- [My process](#my-process)
	- [Built with](#built-with)
	- [What I learned](#what-i-learned)
	- [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
	- The input field is empty
	- The email address is not formatted correctly

### Screenshot

![Desktop screenshot](./screenshot.png)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/vuejs-3-mobile-first-bem-scss-EKyX7qnv9)
- [Live Site URL](https://halivert.dev/bookmark-landing-page)

## My process

### Built with

- Mobile-first workflow
- [Vue.js](https://v3.vuejs.org/) - JS framework
- [BEM methodology](http://getbem.com/) - For styles

### What I learned

I learn how to use `box-shadow`.

```css
.extension-card {
	--blur-spread: 10px -8px;
	--box-shadow-color: hsl(231, 69%, 60%, 0.1);
	box-shadow: 10px 10px var(--blur-spread) var(--box-shadow-color),
		-10px 10px var(--blur-spread) var(--box-shadow-color);
}
```

This was the simplest form I found to add shadow to extension cards.

### Continued development

The next steps are to improve sectioning with components and improve styles.
Add backend and stuff.

I want to improve my Vue.js comprehension, and BEM styling.

## Author

- Website - [Halí](https://halivert.dev)
- Frontend Mentor - [@halivert](https://www.frontendmentor.io/profile/halivert)
- Twitter - [@halivert](https://www.twitter.com/halivert)
