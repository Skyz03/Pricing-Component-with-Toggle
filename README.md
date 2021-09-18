# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

## Overview
This is one of the best challenge where I accomplished to build the components as required. I used some of the best references which help to take this challenge to the next level by adding a dark mode with the toggle.

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard
- **Bonus**: Complete the challenge with just HTML and CSS

### Screenshot
![image](https://user-images.githubusercontent.com/42742924/133890958-d9878796-2ce4-4f75-8963-507ad9e4a4db.png)
![image](https://user-images.githubusercontent.com/42742924/133890966-423f84b7-14dd-426b-9d52-226c51247a86.png)


### Links

- Solution URL: [https://github.com/Skyz03/Pricing-Component-with-Toggle](https://github.com/Skyz03/Pricing-Component-with-Toggle)
- Live Site URL: [https://skyz03.github.io/Pricing-Component-with-Toggle/](https://skyz03.github.io/Pricing-Component-with-Toggle/)

## My process
Firstly, 
I designed the layout as per the design provided using SCSS then made the pricing dynamic using JS loops and Conditions, then I implemented the dark mode in the toggle mode as well.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- SCSS
- JS

### What I learned

I learned a lot about SCSS nesting loops, media queries, partials and :nth-child and then the fundamentals of JS with Dark mode themes.
To see how you can add code snippets, see below:

```html
   <div class="choose-billing--wrap">
        <label class="billingLabel" for="switch">Annually</label>
        <!--billing toggle -->
        <div class="toggle-switch">
          <input type="checkbox" id="switch" class="switchInput" onclick="priceChange()" />
          <label for="switch" class="switchLabel" tabindex="0" role="button" aria-pressed="false">
            <span class="circle"></span>
          </label>
        </div>
        <label class="billingLabel" for="switch">Monthly</label>
      </div>
```
```scss
.light {
  background-color: #000 !important;
  color: #fff !important;
}

}
```
```js
function priceChange() {

  for (let i = 0; i < noOfElements; i++) {

    let priceElements = document.querySelectorAll(".price");
    if (SWITCH_CHECKBOX.checked === true) {

      priceElements[0].innerHTML = "$19.99";
      priceElements[1].innerHTML = "$24.99";
      priceElements[2].innerHTML = "$39.99";

      //  Adding Dark Mode 
      document.getElementById("body").classList.add('light')
      document.getElementById("card").classList.add('light')
      document.getElementById("card2").classList.add('light')

    } else {
      priceElements[0].innerHTML = "$199.99";
      priceElements[1].innerHTML = "$249.99";
      priceElements[2].innerHTML = "$399.99";

      // Removing Dark mode 
      document.getElementById("body").classList.remove('light')
      document.getElementById("card").classList.remove('light')
      document.getElementById("card2").classList.remove('light')

    }
}
```
### Continued development

Toggle with keyboard buttons.

### Useful resources

- [Meduim article for theme](https://medium.com/@haxzie/dark-and-light-theme-switcher-using-css-variables-and-pure-javascript-zocada-dd0059d72fa2) - Gave me idea about the theme changeing.
@tediko calculater app for SCSS and Theme mode inspiration.

## Author
Skyz03

## Acknowledgments

@tediko cal app
