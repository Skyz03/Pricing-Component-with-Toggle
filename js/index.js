// import variables from "../sass/abstracts/variables"

let SWITCH_CHECKBOX = document.querySelector("#switch");

//creation of the loop for selecting the price elements
const noOfElements = document.querySelectorAll(".price").length

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
}