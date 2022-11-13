# ecommerce-checkout

This ought to be a simple e-commerce product page.
I am currently learning vue, so i'll be using vue to implement this.

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
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![Design preview for the E-commerce product page coding challenge](./src/assets/images/desktop-preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- [Vue](https://vuejs.org/) - JS library

### What I learned

i was able to implement a very simple image zoom parallax with this piece of code

```js
const selectedImg = e.target.querySelector("img.active");
const mousePosX = e.clientX;
const mousePosY = e.clientY;

//divide by 2 so it can balnce out on both ends of the X-axis
const originX = (mousePosX - e.target.offsetLeft) / 2;
const originY = mousePosY - e.target.offsetTop;

// Make sure to transform on large screen
if (selectedImg && window.innerWidth >= 1024) {
  selectedImg.style.transformOrigin = `${originX}px ${originY}px`;
  selectedImg.style.transform = "scale(1.2)";
}
```

### Continued development

- i would like to develope this further by creating a checkout system and integrating a payment API just to see how far i can go with the project.
- also improve on the accessibility

### Useful resources

- [Image slider resourcce](https://codepen.io/ApplePieGiraffe/pen/YzpvmqN) - This helped me with the smooth image slider. I really loved how simple it was. I believe image sliders should be this simple.
- [Image zoon parallax](https://www.youtube.com/watch?v=flOx9Jis938) - This video show me the logic behind the zoom parallax effect used for the image slider

## Author

- Twitter - [@yourusername](https://www.twitter.com/shrlsmnky)
